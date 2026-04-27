import { useState, useCallback } from "react";

const API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent";

export function useGemini(apiKey, userQuery, systemPrompt) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const callGemini = useCallback(
    async (userQuery, systemPrompt) => {
      if (!apiKey) {
        setError("No API key provided");
        return null;
      }

      setLoading(true);
      setError(null);

      let retries = 0;
      const maxRetries = 5;

      const execute = async () => {
        try {
          // Build contents with system prompt embedded in first message
          const contents = [
            {
              parts: [
                {
                  text: systemPrompt
                    ? `${systemPrompt}\n\n${userQuery}`
                    : userQuery,
                },
              ],
            },
          ];

          const response = await fetch(`${API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            const errorMessage =
              errorData.error?.message || `API Error: ${response.status}`;

            // 429 can be quota OR rate limiting — distinguish between them
            if (response.status === 429) {
              if (
                errorMessage.toLowerCase().includes("quota") ||
                (errorMessage.toLowerCase().includes("limit") &&
                  errorMessage.toLowerCase().includes("exceeded"))
              ) {
                throw new Error("QUOTA_EXCEEDED");
              }
              // Otherwise it's likely rate limiting — don't retry
              throw new Error(`Rate limited: ${errorMessage}`);
            }

            throw new Error(errorMessage);
          }

          const data = await response.json();

          if (data.error) {
            throw new Error(data.error.message || "API Error");
          }

          const result =
            data.candidates?.[0]?.content?.parts?.[0]?.text || null;
          setResponse(result);
          return result;
        } catch (err) {
          // Don't retry on quota or rate limit errors
          const isRetryable =
            !err.message.includes("QUOTA_EXCEEDED") &&
            !err.message.includes("Rate limited");

          if (retries < maxRetries && isRetryable) {
            const delay = Math.pow(2, retries) * 1000;
            retries++;
            await new Promise((r) => setTimeout(r, delay));
            return execute();
          }
          setError(err.message);
          throw err;
        } finally {
          setLoading(false);
        }
      };

      return execute();
    },
    [apiKey],
  );

  const clearResponse = useCallback(() => {
    setResponse(null);
    setError(null);
  }, []);

  return {
    callGemini,
    loading,
    error,
    response,
    clearResponse,
  };
}

export default useGemini;
