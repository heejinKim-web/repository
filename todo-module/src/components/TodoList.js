import React, { useState, useRef } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const onSelect = (e) => {
    setValue(e.target.value);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    setTodos([...todos, { value: value, text: text }]);
    setText("");
    ref.current.focus();
  };

  return (
    <div className="container">
      <div className="radio_buttons">
        <ul className="radio_button_list">
          <li>
            <input
              id="income"
              type="radio"
              value="수입"
              name="select_income"
              checked={value === "수입"}
              onChange={onSelect}
            />
            <label for="income">수입</label>
          </li>
          <li>
            <input
              id="outcome"
              type="radio"
              value="지출"
              name="select_income"
              checked={value === "지출"}
              onChange={onSelect}
            />
            <label for="outcome">지출</label>
          </li>
        </ul>
      </div>
      <div className="text_and_submit">
        <input type="text" value={text} onChange={onTextChange} ref={ref} />
        <button className="submit_button" onClick={onSubmit}>
          등록하기
        </button>
      </div>
      <div className="in_outcome_list">
        <ul>
          {todos.map((todo) => (
            <li>
              <span
                className="type"
                style={{ color: todo.value === "지출" ? "red" : "green" }}
              >
                {todo.value}
              </span>
              <span className="text">{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
