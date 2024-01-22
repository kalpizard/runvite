import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = async (userInfo) => {
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

      if (!response.ok) {
        throw new Error(data.error);
      }

      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      navigate("/navbar/home");
    } catch (error) {
      console.error("Error during login:", error.message);
      // Puedes mostrar un mensaje de error al usuario aquí
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };

    await login(userInfo);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales después de la navegación aquí si es necesario
  }, [setCurrUser]);

  return (
    <div className="divLogin">
      <fieldset className="form-Login">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>Email: </label>
          <input type="email" name="email" placeholder="email" required />
          <br />
          <label>Password: </label>
          <input type="password" name="password" placeholder="password" required />
          <br />
          <input type="submit" value={loading ? "Logging in..." : "Login"} className="start-button" disabled={loading} />
        </form>

        <br />
        <div className="signup center-text">
          <span>Not registered yet,{" "}</span>
          <a href="#signup" className="not-registered" onClick={handleClick}>
            <strong>Signup</strong>
          </a>{" "}
        </div>
      </fieldset>
    </div>
  );
};

export default Login;
