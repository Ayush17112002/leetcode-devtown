"use client";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import ThemeDropDown from "./ThemeDropDown";
import LanguageDropDown from "./LanguageDropDown";
import { languageMap } from "../constants/languageOptions";

export default function CodeEditor({
  setLanguageId,
  setCode,
  languageId,
  code,
}) {
  console.log(languageId);
  const [theme, setTheme] = useState("github-dark");

  const handleEditorChange = (value, e) => {
    setCode(() => value);
  };

  return (
    <>
      <div className="relative">
        <div className="flex flex-row justify-around mt-2 mb-2">
          <ThemeDropDown theme={theme} setTheme={setTheme}></ThemeDropDown>
          <LanguageDropDown
            setLanguageId={setLanguageId}
            languageId={languageId}
          ></LanguageDropDown>
        </div>
        <Editor
          height="50vh"
          width={`100%`}
          language={languageMap.get(languageId).value}
          value={code}
          theme={theme}
          defaultValue="//"
          onChange={handleEditorChange}
        />
      </div>
    </>
  );
}
