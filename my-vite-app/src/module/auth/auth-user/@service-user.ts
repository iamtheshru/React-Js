import axios from "axios";
const accesskey = import.meta.env.VITE_ACCESSKEY;
const baseUrl = import.meta.env.VITE_API;

export const registerUser = async (fromData: { username: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${baseUrl}/register`, fromData, {
            headers: {
                accessKey: `${accesskey}`,
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "error");
    }
}

//-----------------loginUser-----------------------------------
export const loginUser = async ({ email, password }: { email: string, password: string }) => {
    try {
        const response = await axios.post(
            `${baseUrl}/login`,
            { email, password },
            {
                headers: {
                    accessKey: `${accesskey}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Login failed");
    }
}
//-----------------getUser-----------------------------------
export const getUser = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
        const response = await axios.get(`${baseUrl}/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
                accessKey: `${accesskey}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error: any) {
        // console.error("Error details:", error);
        const errorMessage = error.response?.data?.error || "Something went wrong while fetching users";
        throw new Error(errorMessage);
    }
};

//-----------------postUser-----------------------------------

export const postUser = async (userData: FormData) => {
    console.log(`${baseUrl}/create`);

    try {
        const response = await axios.post(`${baseUrl}/create`, userData, {
            headers: {
                "Content-Type": "application/json",
                accessKey: `${accesskey}`,
            }
        });
        return response.data

    } catch (error: any) {
        throw new Error(error);
    }
}

//-----------------DeleteUser-----------------------------------

export const deleteUser = async (id: string) => {
    console.log(`${baseUrl}/delete/${id}`);
    const token = localStorage.getItem("token");

    try {
        const response = await axios.delete(`${baseUrl}/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                accessKey: `${accesskey}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || error.message);
    }
};

//-----------------------------getidUser---------------------------------------
export const getidUser = async (id: string) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(`${baseUrl}/get/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                accessKey: `${accesskey}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error fetching user");
    }
};


//-----------------EditUser-----------------------------------

export const editUser = async (id: string) => {
    console.log(`${baseUrl}/update/${id}`);
    const token = localStorage.getItem("token");

    try {
        const response = await axios.put(`${baseUrl}/update/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                accessKey: `${accesskey}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "error");
    }
};





