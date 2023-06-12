export default function LeftPage({ problem }) {
  const { id, name, difficulty, statement, sampleTestCase, constraints } =
    problem;
  return (
    <div className="left-page h-screen flex flex-col justify-items-start ml-3 mt-1 mr-3 overflow-auto">
      <div className="problem-number font-medium text-2xl mb-2 shadow-md flex flex-row justify-stretch">
        <span>{id}</span>
        <span className="flex flex-col justify-stretch">
          <div className="problem-name font-medium text-2xl">{name}</div>
          <div className="difficulty text-sm font-thin">{difficulty}</div>
        </span>
      </div>
      <div className="problem-statement mb-10">{statement}</div>
      <div className="sample-testcase flex flex-col">
        {sampleTestCase.map((tc, index) => {
          return (
            <div
              id={`${problem.id}-testcase-${index}`}
              className="flex flex-col justify-between font-medium shadow-md mb-5"
            >
              <div className="testcase-name mb-3">Example {index + 1}:</div>
              <div className="input ">Input: {tc.input}</div>{" "}
              <div className="output">
                Expected Output: {tc.expected_output}
              </div>
            </div>
          );
        })}
      </div>
      <div className="constraints shadow-md">
        <div className="constraint-name font-medium">Constraints:</div>
        <ul className="list-disc">
          {constraints.map((c, index) => {
            return <li key={`constraint-${index}`}>{c}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
