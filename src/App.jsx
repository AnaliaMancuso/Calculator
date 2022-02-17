/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import "./App.css";
import BtnPanel from "./components/BtnPanel";
import Result from "./components/Result";

const App = () => {
  const [result, setResult] = useState("");

  //lodash function to convert string to array
  const resultItems = words(result, /[^-^+^*^/]+/g);

  return (
    <div className="container">
      <Result value={resultItems[resultItems.length - 1]} />
      <BtnPanel
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
