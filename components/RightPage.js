//consists of codeeditor and results section; splitted vertically

import CodeEditor from "./Editor";
import { codeSubmitHandler } from "@/pages/api/codeSubmitHandler";
import { useState } from "react";
import Split from "react-split";
const base64Regex =
  /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

export default function RightPage({
  problem,
  code,
  setCode,
  setLoading,
  setError,
  error,
  loading,
  languageId,
  setLanguageId,
  result,
  setResult,
  resultLoading,
  setResultLoading,
}) {
  const onCodeSubmit = async () => {
    setResultLoading(() => true);
    setError(() => false);
    await codeSubmitHandler({
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
    });
  };
  return (
    <div className="right-page h-screen">
      <Split sizes={[70, 30]} direction="vertical">
        <div className="editor">
          <CodeEditor
            code={code}
            languageId={languageId}
            setLanguageId={setLanguageId}
            setCode={setCode}
          ></CodeEditor>
          <div className="btn-test-submit flex flex-row justify-start">
            <button
              type="submit"
              className="m-1 font-medium text-center hover:bg-purple-500 hover:border-black p-0 rounded-lg w-16 border-2"
              onClick={onCodeSubmit}
            >
              Run
            </button>
            <button
              type="submit"
              className="m-1 font-medium text-center hover:bg-purple-500 hover:border-black p-0 rounded-lg w-16 border-2"
              onClick={onCodeSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="results overflow-auto flex flex-col justify-start">
          {!resultLoading ? (
            result.map((r) => {
              return (
                <div className="rounded-md mb-2">
                  <div className="status text-start font-medium">
                    <span>{r.status.description}</span>
                  </div>
                  <div className="">
                    {r.stdout
                      ? base64Regex.test(r.stdout)
                        ? atob(r.stdout)
                        : r.stdout
                      : "No output"}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="relative w-full h-full text-center">
              Loading your results...
            </div>
          )}
        </div>
      </Split>
    </div>
  );
}
