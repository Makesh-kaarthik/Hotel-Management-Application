import React, { useState } from "react";

function Login({ onLogin, loginError, goToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login">
      <h2>Login to Web Restaurant</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />
        </div>

        {loginError && (
          <p className="error">{loginError}</p>
        )}

        <button type="submit">Login</button>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Don't have an account?{" "}
          
          <span
            onClick={goToRegister}
            style={{
              color: "#ff6200",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register Here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;