import React, { useEffect, useState } from "react";
import { API_URL } from "../config";

function TodoListing() {
    const [open, setOpen] = useState(false);  // State for modal
    const [description, setDescription] = useState("");  // State for description input
    const [title, setTitle] = useState("");  // State for title input
    const [list, setList] = useState([]);  // State for todo list

    // Function to handle opening the modal
    const handleOpen = () => {
        setOpen(true);
    }
    // Function to fetch the todo list from the API when the component mounts
    useEffect(() => {
        todolistingApi();
    }, []);

    const todolistingApi = async () => {
        try {
            const response = await fetch(`${API_URL}/api/v1/todos?query=reactjs&complete=false`);
            if (response.status === 200) {
                const getlist = await response.json();
                setList(getlist?.data);  // Set the fetched data in the list state
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const todoData = {
            title: title,
            description: description
        };

        try {
            const response = await fetch(`${API_URL}/api/v1/todos/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todoData),
            });
            const getCreate = await response.json();
            console.log(getCreate);
            setOpen(false);  // Close the modal
            setTitle("");  // Clear the title input
            setDescription("");  // Clear the description input
            setList([...list, getCreate.data]);  // Add the newly created todo to the list
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="text-center flex flex-col justify-center items-center mt-2">
            {/* Button to open the modal */}
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleOpen}
            >
                Add Data
            </button>

            {/* Table to display the list of todos */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4"></th>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Created Date</th>
                            <th scope="col" className="px-6 py-3">Updated Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list?.map((item) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item?._id}>
                                <td className="w-4 p-4"></td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item?._id}
                                </th>
                                <td className="px-6 py-4">{item?.title}</td>
                                <td className="px-6 py-4">{item?.description}</td>
                                <td className="px-6 py-4">{item?.createdAt}</td>
                                <td className="px-6 py-4">{item?.updatedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal to add new todo */}
            {open && (
                <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full mx-auto mt-[139x]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add Data</h3>
                                <button
                                    type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setOpen(false)}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Title"
                                            required
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            placeholder="Description"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoListing;
