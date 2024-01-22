import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      navigate("/navbar/home");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className="divLogin">
      <fieldset className="form-Login">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>Email: </label>
          <input type="email" name="email" placeholder="email" />
          <br />
          <label>Password: </label>
          <input type="password" name="password" placeholder="password" />
          <br />
          <input type="submit" value="Login" className="start-button" />
        </form>

      <br />
      <div className="signup center-text">
  <span>Not registered yet,{" "}</span>
  <a href="#signup" className="not-registered" onClick={handleClick}>
    <strong>Signup</strong>
  </a>{" "}
</div>


    </div>
  );
};

export default Login;
