import React from "react";
import "./NumberOfTasks.css";
import { connect } from "react-redux";

const NumberOfTasks = ({ numberOfTasks }) => {
  return <div className="numberOfTasks">{numberOfTasks}</div>;
};

const mapStateToProps = (state) => ({
  numberOfTasks: state.tasks.tasksNumbers,
});

export default connect(mapStateToProps, null)(NumberOfTasks);
