import React from "react";
import { connect } from "react-redux";
import actions from "../data/tasks/actions";

const ButtonDelete = (props) => {
  const handleClick = () => {
    props.deleteTask(props.id);
  };

  return (
    <button className="task__delete" onClick={handleClick}>
      Delete
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(actions.deleteTask(id)),
});

export default connect(null, mapDispatchToProps)(ButtonDelete);
