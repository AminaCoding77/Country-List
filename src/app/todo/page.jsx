"use client";

import { useState } from "react";
import { useEffect } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const Adding = () => {
    setData([...data, { task: inputValue, id: Date.now() }]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const a = data.filter((todo) => todo.id !== id);
    setData(a);
  };

  return (
    <div className="flex flex-col gap-5 mt-30 ml-30">
      <div className="flex gap-2">
        <input
          placeholder="Enter task..."
          className="w-70 px-3 py-2 border border-gray-300 rounded-3xl text-gray-700 placeholder-gray-400"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-1 px-2 rounded-2xl text-[15px]"
          onClick={Adding}
        >
          ADD
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {data.map((el, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 border  border-gray-600 rounded-2xl w-fit h-fit p-1"
            >
              <div key={el.id}>{el.task}</div>
              <button
                onClick={() => handleDelete(el.id)}
                className="bg-transparent hover:bg-cyan-800 text-cyan-600 font-semibold hover:text-white border border-cyan-500 hover:border-transparent text-[10px] w-fit h-fit p-1 rounded-2xl"
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
