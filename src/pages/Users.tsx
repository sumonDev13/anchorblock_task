import Navbar from "../components/Navbar";
import { useFetchUsersQuery } from "../store/api/userApi";

interface IUsers {
  name: string;
}

const Users: React.FC<IUsers> = () => {

const {data:userData}=useFetchUsersQuery()

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
            <th className="py-2 px-2 text-left">Checkbox</th>
            <th className="py-2 px-2 text-left">UserInfo</th>
            <th className="py-2 px-2 text-left">About</th>
            <th className="py-2 px-2 text-left">Status</th>
            
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          {userData?.data.map((user: IUser) => (
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4">
              <input type="checkbox" />
            </td>
            <td className="py-2 px-2 flex flex-1">
            <img
                    className=" w-auto"
                    src="/src/assets/icons/Delete_Button.svg"
                    alt="Your Company"
                  />
              <h2 className="pt-2">{user.first_name} {user.last_name}</h2>
              </td>
            <td className="py-2 px-2">About User 1</td>
            <td className="py-2 px-2">Active</td>
            <td className="py-2 px-2 end-0">
              <button className=" text-white font-bold py-1 px-2 rounded mr-2">
              <img
                    className="h-8 w-auto"
                    src="/src/assets/icons/Delete_Button.svg"
                    alt="Your Company"
                  />
              </button>
              <button className=" text-white font-bold py-1 px-2 rounded">
              <img
                    className="h-8 w-auto"
                    src="/src/assets/icons/Edit_Button.svg"
                    alt="Your Company"
                  />
              </button>
            </td>
          </tr>
         ))}
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
