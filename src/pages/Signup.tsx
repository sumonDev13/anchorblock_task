interface signup {
  name: string;
}

const Signup: React.FC<signup> = () => {
  return (
    <>
<div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="flex items-start mb-6">
          <img src="/src/assets/icons/signup_logo.svg" alt="Logo" className="h-8 mr-2" />
          <h1 className="text-3xl font-bold text-black">Stack</h1>
        </div>
        <p className="text-lg font-bold text-customBlack mb-4">Sign up to join with Stack</p>
        <form>
          <div className="mb-4 mt-10">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-6 mt-8 mb-14">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-customPurple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              <p className="text-sm mb-4 mt-6">Already have an account? {''}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
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

export default Signup;
