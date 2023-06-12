import { languageMap, languageOptions } from "../constants/languageOptions";
import Select from "react-select";

export default function LanguageDropDown({ setLanguageId, languageId }) {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => {
        console.log(selectedOption);
        setLanguageId(selectedOption.id);
      }}
    />
  );
}
