import { loader } from "@monaco-editor/react";
import monacoThemes from "monaco-themes/themes/themelist";
import { useEffect, useState } from "react";
import Select from "react-select";
export default function ThemeDropDown({ theme, setTheme }) {
  const [themeLocal, setThemeLocal] = useState(theme);

  const defineTheme = (theme) => {
    return new Promise((res) => {
      Promise.all([
        loader.init(),
        import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
      ]).then(([monaco, themeData]) => {
        console.log(monaco, themeData, theme);
        monaco.editor.defineTheme(theme, themeData);
        res();
      });
    });
  };

  const themeHandler = (e) => {
    const theme = e.value;
    console.log("theme...", theme);
    setThemeLocal(() => theme);
  };

  useEffect(() => {
    console.log(!["light", "vs-dark"].includes(themeLocal), themeLocal);
    if (!["light", "vs-dark"].includes(themeLocal)) {
      defineTheme(themeLocal).then((_) => setTheme(() => themeLocal));
    } else {
      setTheme(() => themeLocal);
    }
  }, [themeLocal]);
  console.log(theme);
  return (
    <Select
      placeholder={`Select Theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => {
        //console.log(themeId, themeName);
        return {
          label: themeName,
          value: themeId,
          key: themeId,
        };
      })}
      defaultValue={{
        label: "Github Dark",
        value: "github-dark",
        key: "github-dark",
      }}
      onChange={themeHandler}
    />
  );
}
