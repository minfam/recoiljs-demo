export function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function toggleAll(listItem) {
  const nextList = [];
  listItem.forEach((item) => {
    //what happen when we don't deep copy item
    const nextItem = { ...item };
    nextItem.done = !nextItem.done;
    nextList.push(nextItem);
  });
  return nextList;
}
