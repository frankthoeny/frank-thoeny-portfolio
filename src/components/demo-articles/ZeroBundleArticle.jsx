import {
  Rocket,
  XSquare,
  Target,
  Stars,
  Zap,
  RefreshCw,
  Brush,
  ClipboardCopy,
  SquareCheckBig,
} from "lucide-react";

export default function ZeroBundleArticle({ isDark }) {
  return (
    <article
      className={`p-4 md:p-6 rounded-xl border ${
        isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
      }`}
    >
      <h3 className="font-bold mb-2">
        <Rocket className="inline mr-2 w-6 h-6 text-blue-500" /> Zero-Bundle
        Transformation
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        A revolutionary approach to async data fetching that eliminates loading
        state boilerplate and provides automatic caching through React's use()
        hook and Suspense boundaries.
      </p>

      <div className="space-y-4">
        <div className="bg-slate-2 border-slate-700 rounded-lg p-4 border ">
          <h4
            className={`text-sm font-semibold ${isDark ? "text-red-400" : "text-red-900"} mb-3`}
          >
            The Problem: Loading State Boilerplate
          </h4>
          <p
            className={`text-xs ${isDark ? "text-slate-200" : "text-slate-700"} mb-3`}
          >
            Traditional React async patterns require managing loading states,
            error handling, and effects:
          </p>
          <pre className="rounded-md bg-slate-900 text-red-200 p-3 text-[10px] md:text-xs overflow-x-auto">
            <code>
              {`// `}
              <XSquare className="inline w-5 h-5 mr-1 text-red-600 rounded-sm" />
              {` BEFORE: Traditional approach
function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* render data */}</div>;
}`}
            </code>
          </pre>
        </div>

        <div className="bg-slate-2 rounded-lg p-4 border border-slate-700">
          <h4
            className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-700"} mb-3`}
          >
            The Solution: Zero-Bundle Transformation
          </h4>
          <p
            className={`text-xs ${isDark ? "text-slate-200" : "text-slate-700"} mb-3`}
          >
            Service layer handles caching, components use use() hook, Suspense
            manages loading:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-green-400 font-semibold mb-2 text-xs">
                1. Service Layer
              </div>
              <pre className="rounded-md bg-slate-900 text-green-200 p-2 text-[9px] md:text-[10px] overflow-x-auto">
                <code>
                  {`// `}
                  <SquareCheckBig className="inline w-4 h-4 mr-1 bg-green-500 text-white rounded-sm" />
                  {` Service with cached promise
let dataPromise = null;

export function getData() {
  if (!dataPromise) {
    dataPromise = (async () => {
      const { data, error } = await supabase
        .from('table')
        .select('*');
      if (error) return [];
      return data || [];
    })();
  }
  return dataPromise;
}`}
                </code>
              </pre>
            </div>
            <div>
              <div className="text-green-400 font-semibold mb-2 text-xs">
                2. Component
              </div>
              <pre className="rounded-md bg-slate-900 text-green-200 p-2 text-[9px] md:text-[10px] overflow-x-auto">
                <code>
                  {`// `}
                  <SquareCheckBig className="inline w-4 h-4 mr-1 bg-green-500 text-white rounded-sm" />
                  {` Clean component
import { use } from 'react';
import { getData } from '../services/getData';

export default function MyComponent() {
  const data = use(getData());
  return <div>{/* render data */}</div>;
}`}
                </code>
              </pre>
            </div>
            <div>
              <div className="text-green-400 font-semibold mb-2 text-xs">
                3. Page with Suspense
              </div>
              <pre className="rounded-md bg-slate-900 text-green-200 p-2 text-[9px] md:text-[10px] overflow-x-auto">
                <code>
                  {`// `}
                  <SquareCheckBig className="inline w-4 h-4 mr-1 bg-green-500 text-white rounded-sm" />
                  {` Suspense boundary
<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-slate-2 rounded-lg p-4 border border-slate-600">
          <h4
            className={`text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-700"} mb-3`}
          >
            <Target className="bg-white text-red-500 rounded-sm w-5 h-5 inline mr-2" />
            Key Benefits
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2">
              <Stars className="text-yellow-500 w-3 h-3 inline mt-0.5" />
              <span
                className={`${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                <strong>No loading boilerplate</strong> - Suspense handles async
                automatically
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Rocket className="w-3 h-3 inline text-blue-500 mt-0.5" />
              <span
                className={`${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                <strong>Automatic caching</strong> - Promises cached at module
                scope
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Brush className="w-3 h-3 inline text-emerald-500 mt-0.5" />
              <span
                className={`${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                <strong>Clean components</strong> - Pure presentation logic only
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Zap className="w-3 h-3 inline text-yellow-500 mt-0.5" />
              <span
                className={`${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                <strong>Better performance</strong> - No redundant API calls
              </span>
            </div>
            <div className="flex items-start gap-2">
              <RefreshCw className="w-3 h-3 inline text-purple-500 mt-0.5" />
              <span
                className={`${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                <strong>Server-ready</strong> - Same pattern works with server
                components
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Brush className="w-3 h-3 inline text-slate-500 mt-0.5" />
              <span
                className={`${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                <strong>Simplified testing</strong> - No async state management
                to mock
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-4 border border-slate-600">
          <h4
            className={`text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-700"} mb-3`}
          >
            <ClipboardCopy className="w-4 h-4 inline text-blue-500 mr-2" />
            Implementation Pattern
          </h4>
          <div
            className={`text-xs ${isDark ? "text-slate-400" : "text-slate-700"} space-y-2`}
          >
            <p>
              <strong>1. Service Layer:</strong> Create cached promise functions
              in <code>src/services/</code>
            </p>
            <p>
              <strong>2. Section Components:</strong> Use <code>use()</code>{" "}
              hook to resolve promises
            </p>
            <p>
              <strong>3. Page Components:</strong> Wrap sections with{" "}
              <code>&lt;Suspense&gt;</code> boundaries
            </p>
            <p>
              <strong>4. App Level:</strong> Import page components (Suspense
              handled at page level)
            </p>
          </div>
          <pre className="rounded-md bg-slate-800 text-slate-200 p-3 mt-3 text-[10px] md:text-xs overflow-x-auto">
            <code>{`// Example from this app:
// src/services/getSkills.js
let skillsPromise = null;
export function getSkills() {
  if (!skillsPromise) {
    skillsPromise = (async () => {
      const { data, error } = await supabase
        .from('tech_stack')
        .select('category, skills');
      if (error) return {};
      const grouped = {};
      data.forEach(row => { grouped[row.category] = row.skills; });
      return grouped;
    })();
  }
  return skillsPromise;
}

// src/components/sections/SkillsSection.jsx
import { use } from 'react';
import { getSkills } from '../../services/getSkills';
export default function SkillsSection() {
  const skills = use(getSkills());
  return <Skills skills={skills} />;
}

// src/components/pages/SkillsPage.jsx
import { Suspense } from 'react';
import SkillsSection from '../sections/SkillsSection';
export default function SkillsPage() {
  return (
    <Suspense fallback={<div>Loading skills...</div>}>
      <SkillsSection />
    </Suspense>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </article>
  );
}
