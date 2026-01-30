import React, { useState, useRef, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="container">
      <form>
        <div className="radio_buttons">
          <ul className="radio_button_list">
            <li>
              <input
                id="income"
                type="radio"
                value="income"
                name="select_income"
              />
              <label for="income">수입</label>
            </li>
            <li>
              <input
                id="outcome"
                type="radio"
                value="outcome"
                name="select_income"
              />
              <label for="outcome">지출</label>
            </li>
          </ul>
        </div>
        <div className="text_and_submit">
          <input type="text" value="" />
          <button className="submit_button">등록하기</button>
        </div>
      </form>
      <div className="in_outcome_list">
        <ul>
          <li>
            <span className="type">지출</span>
            <span className="text">30000원</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
