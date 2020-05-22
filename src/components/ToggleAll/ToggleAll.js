import React from "react";
import { useRecoilState } from "recoil";

import "./ToggleAll.css";
import { taskListState } from "../../utils/recoil";
import { toggleAll } from '../../utils/actions'


const ToggleAll = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const handleToggleAll = () => setTaskList(toggleAll(taskList));

  return <button className="toggleAll" onClick={handleToggleAll}>Toggle All</button>;
};

export default ToggleAll;
