/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import "./App.css";
import BtnPanel from "./components/BtnPanel";
import Result from "./components/Result";
import Mode from "./components/Mode";

const App = () => {
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("light");
  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  //lodash function to convert string to array
  const resultItems = words(result, /[^ ]+/g);

  return (
    <div className={`container container-${mode}`}>
      <Mode currentMode={mode} handleTheme={handleTheme} />
      <Result theme={mode} value={resultItems[resultItems.length - 1]} />
      <BtnPanel
        theme={mode}
        fnNumber={(number) => {
          let find = result.indexOf("0");
          if (find === 0) {
            let cleanResult = result.substring(1);
            setResult(`${cleanResult}${number}`);
          } else {
            setResult(`${result}${number}`);
          }
        }}
        fnOperation={(op) => {
          setResult(`${result}${op}`);
        }}
        fnResult={() => {
          setResult(eval(result).toString());
        }}
        fnDelete={() => {
          if (result.length > 0) {
            const newResult = result.substring(0, result.length - 1);
            setResult(newResult);
          }
        }}
        fnClear={() => {
          setResult("");
        }}
      />
    </div>
  );
};

export default App;
