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
          <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="border-b border-gray-300">
            
            <th className="text-left py-2 px-4">UserInfo</th>
            <th className="text-left py-2 px-4">About</th>
            <th className="text-left py-2 px-4">Status</th>
            <th className="text-left py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4">
              <input type="checkbox" />
            </td>
            <td className="py-2 px-4">User 1 Info</td>
            <td className="py-2 px-4">About User 1</td>
            <td className="py-2 px-4">Active</td>
            <td className="py-2 px-4">
              <button className=" text-white font-bold py-1 px-2 rounded">
                Edit
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4">
              <input type="checkbox" />
            </td>
            <td className="py-2 px-4">User 2 Info</td>
            <td className="py-2 px-4">About User 2</td>
            <td className="py-2 px-4">Inactive</td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                Edit
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </>
  );
};

export default Users;
