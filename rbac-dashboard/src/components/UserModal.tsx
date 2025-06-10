import React from "react";
import { FaTimes } from "react-icons/fa";
import type { User } from "../types/User";

interface Props {
  user: User; // user ka data (name, email, role)
  onChange: (field: keyof User, value: string) => void; // input change handler
  onClose: () => void; // modal close karne ke liye function
  onSubmit: () => void; // form submit karne ka function
  editing: boolean; // agar true hai toh edit mode, warna add mode
}


const UserModal: React.FC<Props> = ({ user, onChange, onClose, onSubmit, editing }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-[90%] md:w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{editing ? "Edit User" : "Add User"}</h2>
          <button onClick={onClose}>
            <FaTimes className="text-white hover:text-red-500" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-700 px-4 py-2 rounded text-white"
            value={user.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 px-4 py-2 rounded text-white"
            value={user.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <select
            className="bg-gray-700 px-4 py-2 rounded text-white"
            value={user.role}
            onChange={(e) => onChange("role", e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <button
            onClick={onSubmit}
            className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
          >
            {editing ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;