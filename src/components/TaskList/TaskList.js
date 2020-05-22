import React from "react";
import { useRecoilValue } from "recoil";

import Task from "../Task/Task";
import "./TaskList.css";
import { taskListState, taskListFilterState } from "../../utils/recoil";

const TaskList = () => {
  const taskList = useRecoilValue(taskListState);
  const taskListFilter = useRecoilValue(taskListFilterState);
  let taskFilters =
    taskListFilter === "Done"
      ? taskList.filter((item) => item.done)
      : taskListFilter === "Active"
      ? taskList.filter((item) => !item.done)
      : taskList;

  let renderTasks = <h4 className="nothing">Nothing here...</h4>;
  if (taskFilters.length) {
    renderTasks = taskFilters.map((task) => <Task key={task.id} task={task} />);
  }

  return <div className="task-list">{renderTasks}</div>;
};

export default TaskList;
