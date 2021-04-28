import React from "react";

const HabitAddForm = (props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="habit-input"
        placeholder="habit?"
      ></input>
      <button className="habit-submit">ADD</button>
    </form>
  );
};

export default HabitAddForm;
