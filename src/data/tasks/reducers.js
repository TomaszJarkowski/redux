import types from "./types";

const INITIAL_STATE = {
  tasksNumbers: 0,
  tasks: [],
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasksNumbers: state.tasksNumbers + 1,
        tasks: [...state.tasks, action.task],
      };
    case types.DELETE_TASK:
      return {
        ...state,
        tasksNumbers: state.tasksNumbers - 1,
        tasks: state.tasks.filter((el) => el.id !== action.id),
      };
    case types.DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default tasksReducer;
