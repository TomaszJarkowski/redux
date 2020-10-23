import types from "./types";

const addTask = (task) => ({
  type: types.ADD_TASK,
  task,
});

const deleteTask = (id) => ({
  type: types.DELETE_TASK,
  id,
});

const doneTask = (id) => ({
  type: types.DONE_TASK,
  id,
});

export default {
  addTask,
  deleteTask,
  doneTask,
};
