import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../store/actionCreator/actionCreator";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    const result = e.target.value;
    setEmail(result);
  };

  const handlePassword = (e) => {
    const result = e.target.value;
    setPassword(result);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    if (payload.email && payload.password) {
      localStorage.setItem("access_token", "access_token");
      dispatch(setLogin(true));
      navigate("/classlist");
    }
  };

  return (
    <div>
      <div className="bg-white min-h-screen">
        <div className="grid place-items-center h-screen">
          <form className="flex flex-col space-y-2" onSubmit={handleSubmitForm}>
            <h1 className="font-bold text-2xl">Sign in to your account</h1>
            <input
              type={"text"}
              placeholder="Email address"
              name="email"
              className="border-2 border-slate-500 rounded-lg py-2 px-6"
              value={email}
              onChange={handleEmail}
            />
            <input
              type={"password"}
              placeholder="Password"
              name="password"
              className="border-2 border-slate-500 rounded-lg py-2 px-6"
              value={password}
              onChange={handlePassword}
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 rounded-md text-sm py-2 text-white drop-shadow-md"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
