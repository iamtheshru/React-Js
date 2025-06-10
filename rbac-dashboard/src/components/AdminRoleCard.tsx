import React from "react";
import type { Role } from "../types/User";

interface RoleModalProps {
    role: Role;
    onChange: (field: keyof Role, value: any) => void;
    onTogglePermission: (perm: string) => void;
    onClose: () => void;
    onSubmit: () => void;
    editing: boolean;
}

const permissionGroups = {
    Users: ["users_create", "users_read", "users_update", "users_delete"],
    Content: ["content_create", "content_read", "content_update", "content_delete"],
    Settings: ["settings_create", "settings_read", "settings_update", "settings_delete"],
};

const permissionLabels: Record<string, string> = {
    users_create: "Create",
    users_read: "Read",
    users_update: "Update",
    users_delete: "Delete",
    content_create: "Create",
    content_read: "Read",
    content_update: "Update",
    content_delete: "Delete",
    settings_create: "Create",
    settings_read: "Read",
    settings_update: "Update",
    settings_delete: "Delete",
};

const RoleModal: React.FC<RoleModalProps> = ({
    role,
    onChange,
    onTogglePermission,
    onClose,
    onSubmit,
    editing,
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
            <div className="bg-[#1e1e2f] p-6 rounded-md w-[500px] text-white max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">{editing ? "Edit" : "Add"} Role</h2>

                <label className="block mb-2">Name</label>
                <input
                    type="text"
                    className="w-full bg-[#2b2b40] p-2 rounded mb-4"
                    value={role.name}
                    onChange={(e) => onChange("name", e.target.value)}
                />

                {/* <input
                    type="text"
                    className="w-full bg-[#2b2b40] p-2 rounded mb-4"
                    value={role.description}
                    onChange={(e) => onChange("description", e.target.value)}
                /> */}
                <label className="block mb-2">Role</label>
                <select
                    className="w-full bg-[#2b2b40] p-2 rounded mb-4"
                    value={role.role}
                    onChange={(e) => onChange("role", e.target.value)}
                >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                </select>
                <div>
                    <h3 className="text-sm font-semibold mb-2">Permissions</h3>
                    {Object.entries(permissionGroups).map(([group, perms]) => (
                        <div key={group} className="mb-4">
                            <h4 className="text-sm font-bold text-gray-300 mb-1">{group}</h4>
                            <div className="flex gap-4 flex-wrap">
                                {perms.map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={role.permissions.includes(perm)}
                                            onChange={() => onTogglePermission(perm)}
                                            className="accent-purple-500"
                                        />
                                        {permissionLabels[perm]}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <button onClick={onClose} className="bg-gray-700 px-4 py-2 rounded">Cancel</button>
                    <button onClick={onSubmit} className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Update</button>
                </div>
            </div>
        </div>
    );
};

export default RoleModal;
