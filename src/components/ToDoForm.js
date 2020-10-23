import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../data/tasks/actions";
import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(1);
  const submit = (e) => {
    e.preventDefault();

    if (title.length > 2 && text.length > 2) {
      const task = {
        id,
        title,
        text,
        done: false,
      };
      setId(id + 1);
      props.addTask(task);
      setTitle("");
      setText("");
    }
  };

  return (
    <form className="todo__form" onSubmit={submit}>
      <h2 className="form__title">Add a task</h2>
      <div className="form__item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="title"
          name="title"
          value={title}
          required
          minLength="3"
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Min length of title is 3</p>
      </div>
      <div className="form__item">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          className="text"
          name="text"
          value={text}
          required
          minLength="3"
          onChange={(e) => setText(e.target.value)}
        />
        <p>Min length of text is 3</p>
      </div>
      <button className="form__submit">Add</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(actions.addTask(task)),
});

export default connect(null, mapDispatchToProps)(ToDoForm);
