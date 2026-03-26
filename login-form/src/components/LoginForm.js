import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (value) => {
    if (!value) return "이메일을 입력해주세요";
    if (!value.includes("@")) return "올바른 이메일 형식이 아닙니다";
  };

  const validatePassword = (value) => {
    if (!value) return "비밀번호를 입력해주세요";
    if (value.length < 6) return "6자 이상 입력해주세요";
  };

  const handleChange = (field, value) => {
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);

    setErrors((prev) => ({
      ...prev,
      [field]:
        field === "email" ? validateEmail(value) : validatePassword(value),
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isValid = !validateEmail(email) && !validatePassword(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    alert("로그인 성공");
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px" }}>
      <div>
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
        />
        {touched.email && errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => handleChange("password", e.target.value)}
          onBlur={() => handleBlur("password")}
        />
        {touched.password && errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>
      <button type="submit" disabled={!isValid}>
        확인
      </button>
    </form>
  );
};

export default LoginForm;
