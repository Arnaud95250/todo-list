import React from "react";

const Form = ({ handleSubmit, handleChange, input }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={input}
        className="hidden_pc"
        onChange={(e) => handleChange(e)}
        placeholder="new task"
      />

      <input value="Add task" type="submit" />
    </form>
  );
};

export default Form;
