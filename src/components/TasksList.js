import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task.js";

const TasksList = () => {
  const tasks = useSelector((store) => store.tasks.tasks);
  return tasks.map((el) => <Task task={el} key={el.id} />);
};

// const mapStateToProps = (state) => ({
//   tasks: state.tasks.tasks,
// });

// export default connect(mapStateToProps, null)(TasksList);

export default TasksList;
