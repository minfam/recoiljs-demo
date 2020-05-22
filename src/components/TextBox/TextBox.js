import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';

import "./TextBox.css";
import { taskListState } from "../../utils/recoil";

const TextBox = () => {
  const [text, setText] = useState('');
  const setTaskList= useSetRecoilState(taskListState);

  const handleAddTask = e => {
    e.preventDefault();
    setTaskList(oldTaskList => ([
      ...oldTaskList,
      {
        id: uuidv4(),
        name: text,
        done: false
      }
    ]));
    setText('');
  }

  return (
    <form onSubmit={handleAddTask}>
      <input
        className="text-box"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task here..."
      />
    </form>
  );
};

export default TextBox;
