import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { taskListState } from "../../utils/recoil";
import { replaceItemAtIndex, removeItemAtIndex } from "../../utils/actions";

import "./Task.css";

const Task = ({ task }) => {
  const { id, name, done } = task;
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const index = taskList.findIndex((item) => item.id === task.id);

  const handleEditTask = useCallback(() => {
    const newList = replaceItemAtIndex(taskList, index, {
      ...task,
      done: !done,
    });
    setTaskList(newList);
  }, [taskList]);

  const handleDeteleTask = useCallback(() => {
    const newList = removeItemAtIndex(taskList, index);
    setTaskList(newList);
  }, [taskList]);

  return (
    <div className={`${done ? "done " : ""}task`}>
      <input id={id} type="checkbox" onChange={handleEditTask} checked={done} />
      <label htmlFor={id} className="task-content">{name}</label>
      <button className="task-delete-btn" onClick={handleDeteleTask}>
        Delete
      </button>
    </div>
  );
};

export default Task;
