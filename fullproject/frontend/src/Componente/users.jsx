import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Listinng() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [list, setList] = useState([]);
    const handalclick = () => {
        setOpen(true);
    }


    const handalgetdata = async () => {

        try {
            const responces = await fetch(`${API_URL}/api/v1/todos?query=reactjs&complete=false`)

            if (responces.status === 200) {
                const getdata = await responces.json();
                setList(getdata?.data);
                console.log(getdata);

            } else {

            }
        } catch (error) {

        }
    }
    useEffect(() => {
        handalgetdata();
    }, [])
    const handalSubmit = async (e) => {
        e.preventDefault();
        try {
            const responce = await fetch(`${API_URL}/api/v1/todos/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
            })
            if (responce.ok) {
                const postdata = await responce.json();
                setTitle("");
                setDescription("");
                setList([...list, postdata.data])

                console.log(postdata);
            } else {
                const errordata = await responce.json();
                console.log(errordata);
            }
        } catch (error) {
            console.log("error network");

        }


    }


    return (<>
        <div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handalclick}>
                Add data
            </button>

            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Created Date</td>
                        <td>Updated Date</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {list?.map((item) => (
                        <tr>
                            <td>{item?._id}</td>
                            <td>{item?.title}</td>
                            <td>{item?.description}</td>
                            <td>{item?.createdAt}</td>
                            <td>{item?.updatedAt}</td>
                            <td>Edit</td>
                            <td>delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {open === true && (
                <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full mx-auto mt-[139x]">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Add Data
                                </h3>
                                <button
                                    type="button"
                                    class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setOpen(false)}
                                >
                                    <svg
                                        class="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div class="p-4 md:p-5">
                                <form class="space-y-4" onSubmit={handalSubmit}>
                                    <div>
                                        <label
                                            for="title"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Title"
                                            required
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            for="description"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            placeholder="Description"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    </>);
}

export default Listinng;