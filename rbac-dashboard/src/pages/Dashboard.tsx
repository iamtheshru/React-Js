import React, { useState } from "react";
import { FaEdit, FaTrash, FaSignOutAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import UserModal from "../components/UserModal";
import AdminRoleCard from "../components/AdminRoleCard";
import type { User, Role } from "../types/User";

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active" },
    ]);

    const [roles, setRoles] = useState<Role[]>([
        {
            id: 1,
            name: "John Doe",
            role: "Admin",
            permissions: [
                "users_create",
                "users_read",
                "users_update",
                "users_delete",
                "content_create",
                "content_read",
                "content_update",
                "content_delete",
                "settings_read",
                "settings_update",
            ],
        },
    ]);

    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [showUserModal, setShowUserModal] = useState<boolean>(false);
    const [editingRole, setEditingRole] = useState<Role | null>(null);
    const [showRoleModal, setShowRoleModal] = useState<boolean>(false);

    const [searchUser, setSearchUser] = useState("");
    const [searchRole, setSearchRole] = useState(""); // NEW state for role search

    const handleUserChange = (field: keyof User, value: string) => {
        if (!editingUser) return;
        setEditingUser({ ...editingUser, [field]: value });
    };

    const openAddUserModal = () => {
        setEditingUser({ id: 0, name: "", email: "", role: "Viewer", status: "active" });
        setShowUserModal(true);
    };

    const openEditUserModal = (user: User) => {
        setEditingUser(user);
        setShowUserModal(true);
    };

    const handleUserSubmit = () => {
        if (!editingUser) return;

        let updatedUser = { ...editingUser };

        if (editingUser.id === 0) {
            updatedUser.id = Date.now();
            setUsers([...users, updatedUser]);
        } else {
            setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
        }

        const roleExists = roles.some(
            (r) => r.name.toLowerCase() === editingUser.name.toLowerCase()
        );

        if (!roleExists) {
            const newRole: Role = {
                id: Date.now(),
                name: editingUser.name,
                role: editingUser.role,
                permissions: [],
            };
            setRoles([...roles, newRole]);
        }

        setShowUserModal(false);
    };

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    const openEditRoleModal = (role: Role) => {
        setEditingRole(role);
        setShowRoleModal(true);
    };

    const handleRoleChange = (field: keyof Role, value: any) => {
        if (!editingRole) return;
        setEditingRole({ ...editingRole, [field]: value });
    };

    const handleTogglePermission = (perm: string) => {
        if (!editingRole) return;
        const hasPermission = editingRole.permissions.includes(perm);
        console.log(`Toggling permission: ${perm}, currently has: ${hasPermission}`);

        const newPermissions = hasPermission ? editingRole.permissions.filter((p) => p !== perm) : [...editingRole.permissions, perm];

        setEditingRole({ ...editingRole, permissions: newPermissions });
    };

    const handleRoleSubmit = () => {
        if (!editingRole) return;
        if (editingRole.id === 0) {
            setRoles([...roles, { ...editingRole, id: Date.now() }]);
        } else {
            setRoles(roles.map((r) => (r.id === editingRole.id ? editingRole : r)));
        }
        setShowRoleModal(false);
    };

    const deleteRoleModal = (id: number) => {
        setRoles(roles.filter((r) => r.id !== id));
    };

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(searchUser.toLowerCase())
    );

    const filteredRoles = roles.filter((r) =>
        r.name.toLowerCase().includes(searchRole.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <Sidebar />
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="text-sm text-gray-400">Manage your system access control</p>
                    </div>
                    <button className="bg-purple-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-purple-700">
                        <FaSignOutAlt /> Logout
                    </button>
                </header>

                {/* Search & Add User */}
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                        value={searchUser}
                        onChange={(e) => setSearchUser(e.target.value)}
                    />
                    <button
                        onClick={openAddUserModal}
                        className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
                    >
                        + Add User
                    </button>
                </div>

                {/* Users Table */}
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-8">
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
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-gray-400 text-sm">{user.email}</p>
                                    </td>
                                    <td>
                                        <span className="px-3 py-1 rounded-full text-sm">{user.role}</span>
                                    </td>
                                    <td>
                                        <span className={`px-3 py-1 text-sm ${user.status === "active" ? "bg-green-600" : "bg-red-600"}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="flex gap-3 text-xl text-gray-400">
                                        <button onClick={() => openEditUserModal(user)}>
                                            <FaEdit className="hover:text-white" />
                                        </button>
                                        <button onClick={() => handleDeleteUser(user.id)}>
                                            <FaTrash className="hover:text-red-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Role Search Bar */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Roles</h2>
                    <input
                        type="text"
                        placeholder="Search roles..."
                        className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                        value={searchRole}
                        onChange={(e) => setSearchRole(e.target.value)}
                    />
                </div>

                {/* Roles Table */}
                <div className="bg-gray-800 rounded-lg p-4">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-sm">
                                <th>Name</th>
                                <th>Role</th>
                                <th>Permissions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRoles.map((role) => (
                                <tr key={role.id} className="border-t border-gray-700">
                                    <td className="py-3 font-semibold">{role.name}</td>
                                    <td>{role.role}</td>
                                    <td>
                                        <div className="flex flex-wrap gap-2">
                                            {role.permissions.map((p) => (
                                                <span
                                                    key={p}
                                                    className="bg-purple-600 px-2 py-1 rounded text-xs"
                                                >
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="flex gap-3 text-xl text-gray-400">
                                        <button onClick={() => openEditRoleModal(role)}>
                                            <FaEdit className="hover:text-white" />
                                        </button>
                                        <button onClick={() => deleteRoleModal(role.id)}>
                                            <FaTrash className="hover:text-red-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* User Modal */}
                {showUserModal && editingUser && (
                    <UserModal
                        user={editingUser}
                        onChange={handleUserChange}
                        onClose={() => setShowUserModal(false)}
                        onSubmit={handleUserSubmit}
                        editing={editingUser.id !== 0}
                    />
                )}

                {/* Role Modal */}
                {showRoleModal && editingRole && (
                    <AdminRoleCard
                        role={editingRole}
                        onChange={handleRoleChange}
                        onTogglePermission={handleTogglePermission}
                        onClose={() => setShowRoleModal(false)}
                        onSubmit={handleRoleSubmit}
                        editing={editingRole.id !== 0}
                    />
                )}
            </main>
        </div>
    );
};

export default Dashboard;
