export async function callGemini(apiKey, userQuery, systemPrompt) {
    let retries = 0;
    const maxRetries = 5;

    const execute = async () => {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: userQuery }] }],
                        systemInstruction: { parts: [{ text: systemPrompt }] },
                    }),
                }
            );

            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error("QUOTA_EXCEEDED");
                }
                throw new Error("API Error");
            }
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
        } catch (err) {
            if (retries < maxRetries) {
                const delay = Math.pow(2, retries) * 1000;
                retries++;
                await new Promise((r) => setTimeout(r, delay));
                return execute();
            }
            throw err;
        }
    };

    return execute();
}
