import { evaluate } from "mathjs";
import { useState } from "react";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, 'CE']];

export const operations = ["+", "-", "*", "/"];

export const Calculator = () => {
  const [value, setValue] = useState("");

  const createHandleClick = (character) => {

    if(character == "CE") {
        setValue(0);
        return true
    }
    
    setValue(value.toString().concat(character));
  };

  return (
    <div className="mx-auto w-1/5 border-solid border-2 border-slate-100 p-4 mt-5">
      <h1 className="text-center">Calculator</h1>

      <input
        type="text"
        value={value}
        readOnly
        className="w-full py-2 px-3 border-solid border-2 border-slate-500 my-4 text-right text-3xl rounded"
      />

      <div role="grid">
        {rows.map((row, idx) => (
          <div
            key={idx}
            role="row"
            className="flex flex-row justify-around my-2"
          >
            {row.map((number) => (
              <button
                onClick={() => createHandleClick(number)}
                type="button"
                key={number}
                className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-300 text-white"
                style={ {"width": "58px"} }
              >
                {number}
              </button>
            ))}
          </div>
        ))}

        <div className="flex flex-row justify-around">
          {operations.map((operation) => (
            <button
              key={operation}
              onClick={() => createHandleClick(operation)}
              type="button"
              className="p-4 rounded-full bg-slate-600 text-white"
              style={ {"width": "55px"} }
            >
              {operation}
            </button>
          ))}
        </div>
        <button
          onClick={() => setValue(evaluate(value))}
          className="p-4 w-full rounded bg-green-600 text-white mt-5"
        >
          =
        </button>
      </div>
    </div>
  );
};
