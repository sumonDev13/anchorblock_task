import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSigninUserMutation } from "../store/api/authApi";
import { setToken } from "../store/state/authSlice";
import { useAppDispatch } from "../store/hook";


interface login {
  name: string;
}
const Login: React.FC<login> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch()

  const [signinUser, { data }] = useSigninUserMutation();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await signinUser({ email, password });
      console.log("Logged in:", data);
      dispatch(setToken({token:data.token}));
      navigate("/users");
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 w-96">
          <div className="flex items-start mb-6">
            <img
              src="/src/assets/icons/signup_logo.svg"
              alt="Logo"
              className="h-8 mr-2"
            />
            <h1 className="text-3xl font-bold text-black">Stack</h1>
          </div>
          <p className="text-lg font-semibold text-customBlack mb-4 text tracking-wide">
            Sign in to continue with Stack
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-4 mt-10">
              <label
                className="block text-levelBlack text-sm font-semibold text tracking-wide mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-80 h-11 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-10 mt-8 ">
              <label
                className="block text-levelBlack text-sm font-semibold mb-2 text tracking-wide"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-80 h-11 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-80 h-11 justify-center rounded-md bg-customPurple px-3 pt-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
              >
                Sign in
              </button>
              <p className="text-sm mb-4 mt-6 text-gray-500 ">
                Don't have any account? {""}
                <a
                  href="/signUp"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
