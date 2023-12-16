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
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Import
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
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
