import Navbar from "../components/Navbar";

interface IUsers {
  name: string;
}

const Users: React.FC<IUsers> = () => {
  return (
    <>
      <Navbar name={""} />
      <div className="max-w-[1240px] mx-auto p-4">
      <div className="max-h-[500px] relative ">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            <h2 className="text-2xl text-levelBlack font-bold">Users</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-white text-customBlack border border-gray-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            <img
                    className="mr-2"
                    src="/src/assets/icons/upload-cloud.svg"
                    alt="Your Company"
                  />
              Import
            </button>
            <button className="flex items-center px-4 py-2 bg-customPurple text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
            <img
                    className="mr-2"
                    src="/src/assets/icons/plus.svg"
                    alt="Your Company"
                  />
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Users;
