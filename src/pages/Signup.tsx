import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupUserMutation } from "../store/api/authApi";

interface ISignup {
  email: string;
  password: string;
}

const SignUp: React.FC<ISignup> = () => {


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signupUser] = useSignupUserMutation();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      const { data } = await signupUser({ email, password });
      console.log("Signed up:", data);
      navigate("/"); 
    } catch (error) {
      console.error("Signup failed:", error);
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
            Sign up to join with Stack
          </p>
          <form onSubmit={handleSignup}>
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
                Sign up
              </button>
              <p className="text-sm mb-4 mt-6 text-gray-500 ">
                Already have an account? {""}
                <a
                  href="/"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
