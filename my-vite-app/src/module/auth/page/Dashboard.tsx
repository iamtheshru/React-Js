import React, { useEffect, useState } from "react";
import { deleteUser, getidUser, getUser } from "../auth-user/@service-user";
import Displaydata from "./Displaydata";
import UserPostdata from "./UserPostdata";
import type { UserType } from "../auth-user/@type";

const Dashboard = () => {
    const [userData, setUserData] = useState<UserType[]>([]);

    const fetchData = async () => {
        try {
            const res = await getUser();
            setUserData(res.data);
        } catch (error: any) {
            console.error("Error fetching users:", error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteUser(id);
            setUserData(res.data); // Assuming the API returns updated user list
            fetchData();
        } catch (error: any) {
            console.error("Error deleting user:", error.message);
        }
    };

    const [editUserData, setEditUserData] = useState<string>()
    const editUser = async (id: string) => {
        try {
            const res = await getidUser(id);
            setEditUserData(res.data); // Assuming the API returns updated user list
            // fetchData();
        } catch (error: any) {
            console.error("Error deleting user:", error.message);
        }
    };

    return (
        <>
            <UserPostdata setUserData={setUserData} setEditUserData={setEditUserData} editUserData={editUserData} />
            <Displaydata userData={userData} onDelete={handleDelete} onEdit={editUser} />
        </>
    );
};

export default Dashboard;
