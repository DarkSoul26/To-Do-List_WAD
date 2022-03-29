import React, { useState } from "react";
import "./style.css";
export const Todo = () => {
  const [arr, setArray] = useState([]);
  const [val, setVal] = useState("");
  const [selectIndex, setSelectedIndex] = useState();
  const handleAdd = () => {
    if (val != "") {
      let temp = [...arr, val];
      setArray(temp);
      setVal("");
    }
  };

  const handleDone = () => {
    let list = document.getElementById("list");
    if (list.childNodes[selectIndex].style.textDecoration == "line-through")
      list.childNodes[selectIndex].style.textDecoration = "none";
    else list.childNodes[selectIndex].style.textDecoration = "line-through";
  };

  const handleOngoing = () => {
    let list = document.getElementById("list");
    if (list.childNodes[selectIndex].style.color == "brown")
      list.childNodes[selectIndex].style.color = "black";
    else list.childNodes[selectIndex].style.color = "brown";
  };

  const handleSelect = (index) => {
    let list = document.getElementById("list");
    if (list.childNodes[index].style.fontWeight == "bold") {
      list.childNodes[index].style.fontWeight = "normal";
      setSelectedIndex(0);
    } else {
      list.childNodes[index].style.fontWeight = "bold";
      setSelectedIndex(index);
    }
  };

  const handleClear = () => {
    let temp = [...arr];
    temp.splice(selectIndex, 1);
    setArray(temp);
  };

  return (
    <div className="todo__container" id="grad1">
      <h1>Todo List</h1>
      <input
        type="text"
        value={val}
        className="textInput"
        onChange={(e) => setVal(e.target.value)}
      />
      <ol id="list">
        {arr.map((item, index) => {
          return <li onClick={() => handleSelect(index)}>{item}</li>;
        })}
      </ol>

      <div className="btn__grp">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleOngoing}>On Going </button>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};
