import axios from "axios";

// export const registerUser = async (formData: string) => {
//     try {
//         const response = await axios.post("http://localhost:5000/register", formData);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

export const registerUser = async (fromData: string) => {
    try {
        const response = await axios.post("http://localhost:5000/register", formData);
        return response.data;
    } catch (error) {
        console.log(error);

    }
}
