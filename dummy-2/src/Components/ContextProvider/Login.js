import { useState, useContext } from "react";
import AuthContext from "./Context";

function Login() {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const verifyCrendentials = () => {
    if (user.name === "kabir" && user.password === "kabir@123") {
      login();
    } else {
      alert("Please Enter Proper Credentials");
    }
  };

  return (
    <div>
      <h2>Login Component</h2>
      <div
        style={{
          width: "500px",
          boxShadow: "0 0 10px black",
          padding: "50px",
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        <div style={{ margin: "10px auto" }}>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(event) => {
              setUser({
                ...user,
                name: event.target.value,
              });
            }}
          />
        </div>

        <div style={{ margin: "10px auto" }}>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setUser({
                ...user,
                password: event.target.value,
              });
            }}
          />
        </div>
        <button onClick={verifyCrendentials}>Login</button>
      </div>
    </div>
  );
}

export default Login;
