import React, { useState, useRef, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const ref = useRef(null);

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onSelect = (e) => {
    setValue(e.target.value);
  };

  const onCateSelect = (e) => {
    setCategory(e.target.value);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    setTodos([
      ...todos,
      { date: date, value: value, category: category, text: text },
    ]);
    console.log(typeof todos.text);
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
      <div className="category_select_frame">
        <select className="category_select_box" onChange={onCateSelect}>
          <option value="">선택해주세요</option>
          <option value="식비">식비</option>
          <option value="주거비">주거비</option>
          <option value="고정비">고정비</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div className="text_and_submit">
        <input
          type="text"
          value={date}
          onChange={onDateChange}
          ref={ref}
          placeholder="날짜 입력"
        />
        <input
          type="text"
          value={text}
          onChange={onTextChange}
          placeholder="금액을 숫자만 입력"
        />
        <button className="submit_button" onClick={onSubmit}>
          등록하기
        </button>
      </div>
      <div className="in_outcome_list">
        <ul>
          {todos.map((todo) => (
            <li>
              <span className="date">{todo.date}</span>
              <span
                className="type"
                style={{ color: todo.value === "지출" ? "red" : "green" }}
              >
                {todo.value}
              </span>
              <span className="category">{todo.category}</span>
              <span className="text">{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
