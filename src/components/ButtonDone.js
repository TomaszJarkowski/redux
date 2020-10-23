import React from "react";
import { useDispatch } from "react-redux";
import actions from "../data/tasks/actions";

const ButtonDone = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(actions.doneTask(props.id));
  };

  return (
    <button className="task__done" onClick={handleClick}>
      Done
    </button>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   doneTask: (id) => dispatch(actions.doneTask(id)),
// });

// export default connect(null, mapDispatchToProps)(ButtonDone);
export default ButtonDone;
