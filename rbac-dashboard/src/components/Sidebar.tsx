import { FaBars, FaUsers, FaShieldAlt, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-4">
      <div className="text-purple-400 text-xl font-bold mb-8">🛡️ SP Admin</div>
      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaBars /> Dashboard</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaUsers /> Users</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaShieldAlt /> Roles</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaCog /> Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;