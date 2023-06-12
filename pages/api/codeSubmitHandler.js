import axios from "axios";

export const codeSubmitHandler = async ({
  loading,
  setLoading,
  error,
  setError,
  code,
  languageId,
  setResult,
  resultLoading,
  setResultLoading,
  problem,
}) => {
  const url =
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded:false&wait=true";
  const options = {
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "99e4a7bb8bmsh7c46e5deb09e9c3p153450jsn60b06cb20288",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
  };

  try {
    const testCases = problem.sampleTestCase.concat(problem.hiddenTestCase);
    const results = await Promise.all(
      testCases.map(async (tc) => {
        const response = await axios.post(
          url,
          JSON.stringify({
            source_code: code,
            language_id: languageId,
            expected_output: tc?.output,
            stdin: tc?.input,
          }),
          options
        );
        console.log(response);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        const text = response.data;
        console.log(text, typeof text);
        const { token } = text;
        const result = await axios.get(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded:true&fields=*`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-RapidAPI-Key":
                "99e4a7bb8bmsh7c46e5deb09e9c3p153450jsn60b06cb20288",
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          }
        );
        if (result.status !== 200) throw new Error(result.statusText);
        let res = result.data;
        console.log(res);
        return res;
      })
    );
    console.log("results", results);
    setResultLoading(() => false);
    setError(() => false);
    setResult(() => results);
  } catch (error) {
    setResultLoading(() => false);
    setError(() => true);
    console.error(error);
  }
};
