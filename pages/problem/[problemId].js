//identified by each problemId; consists of two sections - leftPage and rightPage

import { useRouter } from "next/router";
import Split from "react-split";
import { useEffect, useState } from "react";
import ListOfProblems from "../../dummy/index";
import LeftPage from "../../components/LeftPage";
import RightPage from "../../components/RightPage";

export default function Problem() {
  const router = useRouter();
  const { problemId } = router.query;
  const [problem, setProblem] = useState(null);
  const [languageId, setLanguageId] = useState(63);
  const [loading, setLoading] = useState(true);
  const [resultLoading, setResultLoading] = useState(false);
  const [error, setError] = useState(false);
  const [code, setCode] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchProblem = ListOfProblems[0];
        console.log(ListOfProblems[0]);
        setLoading(() => false);
        setError(() => false);
        setProblem(() => fetchProblem);
        setCode(() => fetchProblem.starterCode);
      } catch (err) {
        setLoading(() => false);
        setError(() => true);
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      {error && <div className="error">Error</div>}
      {!loading && !error ? (
        <Split className="split" sizes={[40, 60]}>
          <LeftPage problem={problem} />
          <RightPage
            problem={problem}
            code={code}
            setCode={setCode}
            languageId={languageId}
            setLoading={setLoading}
            loading={loading}
            error={error}
            setLanguageId={setLanguageId}
            setError={setError}
            result={result}
            setResult={setResult}
            resultLoading={resultLoading}
            setResultLoading={setResultLoading}
          />
        </Split>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}
