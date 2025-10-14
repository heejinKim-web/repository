import React, { useState, useRef, useEffect, useMemo } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  //로컬 스토리지에서 초기값 가져오기
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  //todos가 바뀔 때 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
    inputRef.current.focus();
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  //완료된 할 일 수
  const completedCount = useMemo(
    () => todos.filter((todo) => todo.done).length,
    [todos]
  );

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>할 일 목록</h1>
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 입력"
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "8px 0" }}>
            <span
              onClick={() => handleToggle(index)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(index)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      <p>
        전체 : {todos.length} / 완료 : {completedCount}
      </p>
    </div>
  );
};

export default TodoApp;
