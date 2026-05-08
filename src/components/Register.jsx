import React, { useState } from "react";

function Register({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (response.ok) {
        setMessage("Registration Successful!");

        setTimeout(() => {
          goToLogin();
        }, 1500);
      }
    } catch (error) {
      setMessage("Registration Failed");
    }
  };

  return (
    <div className="login">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
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

        {message && <p>{message}</p>}

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;