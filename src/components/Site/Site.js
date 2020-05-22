import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import TextBox from "../TextBox/TextBox";
import TaskList from "../TaskList/TaskList";
import ToggleAll from "../ToggleAll/ToggleAll";
import Filter from "../Filter/Filter";
import { taskListState, taskListStorage } from "../../utils/recoil";


const Site = () => {
  const taskList = useRecoilValue(taskListState);

  useEffect(() => { 
    taskListStorage.set(taskList);
  }, [taskList]);

  return (
    <div className="site-">
      <TextBox />
      <ToggleAll />
      <Filter />
      <TaskList />
    </div>
  );
};

export default Site;
