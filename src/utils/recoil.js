import { atom, selector } from "recoil";

export const taskListStorage = {
  set: (tasks) => tasks.length && localStorage.setItem('tasks', JSON.stringify(tasks)),
  get: () => JSON.parse(localStorage.getItem('tasks')),
  remove: () => localStorage.removeItem('tasks')
}

export const taskListState = atom({
  key: "taskListState",
  default: taskListStorage.get() || [],
});

export const taskListFilterState = atom({
  key: 'taskListFilterState',
  default: 'All',
});

export const filteredTaskListState = selector({
  key: 'filteredTaskListState',
  get: ({get}) => {
    let filter = get(taskListFilterState);
    let list = get(taskListState);
    switch (filter) {
      case 'All':
        return list;
      case 'Done':
        return list.filter((item) => item.done);
      case 'Active':
        return list.filter((item) => !item.done);
      default:
        return list;
    }
  },
});
