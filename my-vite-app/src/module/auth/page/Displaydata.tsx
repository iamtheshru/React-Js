import type { UserType } from "../auth-user/@type";


type _getData = Pick<UserType, "_id" | "name" | "email">

type Props = {
    userData: _getData[];
    onDelete: (id: string) => void;
    onEdit: (user: _getData) => void;
};
const Displaydata = ({ userData = [], onDelete, onEdit }: Props) => {
    return (
        <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                    <tr>
                        <th className="px-4 py-3">User</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 ? (
                        userData.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{user.name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td><button onClick={(() => onDelete(user._id))}>Delete</button></td>
                                <td><button onClick={(() => onEdit(user))}>Edit</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center py-5 text-gray-500">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Displaydata;
