// import { HomeIcon, MailIcon, CalendarIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm ">
      <div className="p-4 text-xl font-bold text-blue-600">sneat</div>
      <ul className="mt-4 space-y-2">
        <li><Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-100">
          Dashboard
        </Link>
        </li>
        <li><Link to="/user" className="flex items-center px-4 py-2 hover:bg-gray-100">
          User</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
