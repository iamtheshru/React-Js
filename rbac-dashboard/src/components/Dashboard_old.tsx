import React, { useState } from "react";
import {
  FaUsers,
  FaShieldAlt,
  FaCog,
  FaBars,
  FaSignOutAlt,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Shraddha Patel",
      email: "shraddhapatel@gmail.com",
      role: "Admin",
      status: "active",
    },
  ]);

  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    role: "Viewer",
    status: "active",
  });

  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user: User) => {
    setNewUser(user);
    setEditingUserId(user.id);
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (editingUserId) {
      setUsers(users.map((u) => (u.id === editingUserId ? { ...newUser, id: editingUserId } : u)));
    } else {
      setUsers([...users, { ...newUser, id: Date.now() }]);
    }

    setNewUser({ id: 0, name: "", email: "", role: "Viewer", status: "active" });
    setEditingUserId(null);
    setShowModal(false);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="text-purple-400 text-xl font-bold mb-8">🛡️ SP Admin</div>
        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaBars /> Dashboard</li>
          <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaUsers /> Users</li>
          <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaShieldAlt /> Roles</li>
          <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaCog /> Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-gray-400">Manage your system access control</p>
          </div>
          <button className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700 flex items-center gap-2">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Search and Add */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setNewUser({ id: 0, name: "", email: "", role: "Viewer", status: "active" });
              setEditingUserId(null);
              setShowModal(true);
            }}
            className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
          >
            + Add User
          </button>
        </div>

        {/* Table */}
        <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="py-2">User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-700">
                  <td className="py-3">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td>
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      {user.status}
                    </span>
                  </td>
                  <td className="flex items-center gap-3 text-xl text-gray-400 mt-3">
                    <button onClick={() => handleEdit(user)}>
                      <FaEdit className="hover:text-white" />
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      <FaTrash className="hover:text-red-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-[90%] md:w-[500px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{editingUserId ? "Edit User" : "Add User"}</h2>
                <button onClick={() => setShowModal(false)}>
                  <FaTimes className="text-white hover:text-red-500" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-700 px-4 py-2 rounded text-white"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700 px-4 py-2 rounded text-white"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <select
                  className="bg-gray-700 px-4 py-2 rounded text-white"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
                <button
                  onClick={handleSubmit}
                  className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
                >
                  {editingUserId ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
