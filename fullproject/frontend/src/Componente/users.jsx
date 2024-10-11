// import { useEffect, useState } from "react";
// import { API_URL } from "../config";
// import EditPage from "./Edit"

// function Listing() {
//     const [open, setOpen] = useState(false);
//     const [title, setTitle] = useState('');
//     const [description, setdescription] = useState('');
//     const [list, setList] = useState([]);
//     const [editData, setEditData] = useState([]);
//     const [editOpen, setEditOpen] = useState(false);

//     const handleopen = () => {
//         setOpen(true);
//         console.log("hrll");

//     }

//     const handlegetdata = async (e) => {

//         const responceget = await fetch(`${API_URL}/api/v1/todos?query=reactjs&complete=false`)

//         try {
//             if (responceget.status === 200) {
//                 const getdata = await responceget.json()
//                 setList(getdata?.data);
//             }
//         } catch (error) {
//             console.log(error);
//         }

//     }

//     useEffect(() => {
//         handlegetdata()
//     }, []);

//     const handlesubmit = async (e) => {
//         e.preventDefault();

//         const postInput = {
//             title: title,
//             description: description,
//         }

//         const responce = await fetch(`${API_URL}/api/v1/todos/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(postInput),
//         });

//         const PostData = await responce.json();
//         console.log(PostData);
//         setTitle('');
//         setdescription('');
//         setOpen(false);
//     }

//     const handleDelete = async (data) => {
//         const responce = await fetch(`${API_URL}/api/v1/todos/${data._id}`);
//         try {
//             if (responce.status === 200) {
//                 const deleteData = await responce.json();
//                 setList(list.filter((item) => item._id !== deleteData?.data?._id));
//             }
//         } catch (error) {
//             console.log(error);

//         }
//     }

//     const handleEdit = async (getId) => {
//         const responceget = await fetch(`${API_URL}/api/v1/todos/${getId}`);
//         try {

//             if (responceget.status === 200) {
//                 const getEdit = await responceget.json();
//                 const datagetEdit = getEdit.data;
//                 console.log(datagetEdit);
//                 setEditData(datagetEdit);

//             }
//         } catch (error) {
//             console.log(error);

//         }
//         setEditOpen(true);

//     }

//     // const handleEdit = async (getId) => {
//     //     const response = await fetch(`${API_URL}/api/v1/todos/${getId}`)
//     //     try {
//     //         if (response.status === 200) {
//     //             const getEdit = await response.json();
//     //             const datagetEdit = getEdit.data;
//     //             setEditData(datagetEdit)


//     //         }

//     //     } catch (error) {

//     //     }

//     //     setEditOpen(true);
//     // };

//     return (<>
//         <button onClick={handleopen} className="p-2 bg-blue-700 rounded-md m-2">Add data</button>

//         <div class="relative overflow-x-auto">
//             <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr>

//                         <th scope="col" class="px-6 py-3">
//                             ID
//                         </th>
//                         <th scope="col" class="px-6 py-3">
//                             Title
//                         </th>
//                         <th scope="col" class="px-6 py-3">
//                             Description
//                         </th>
//                         <th scope="col" class="px-6 py-3">
//                             created data
//                         </th>
//                         <th scope="col" class="px-6 py-3">
//                             updated data
//                         </th>
//                         <th scope="col" class="px-6 py-3">
//                             Action
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {list?.map((item) => (
//                         <>
//                             < tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
//                                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                     {item?._id}
//                                 </th>
//                                 <td class="px-6 py-4">
//                                     {item?.title}
//                                 </td>
//                                 <td class="px-6 py-4">
//                                     {item?.description}
//                                 </td>
//                                 <td class="px-6 py-4">
//                                     {item?.createdAt}
//                                 </td>
//                                 <td class="px-6 py-4">
//                                     {item?.updatedAt}
//                                 </td>
//                                 <td class="flex items-center px-6 py-4">
//                                     <div
//                                         href="#"
//                                         class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
//                                         onClick={() => handleEdit(item?._id)}  >
//                                         Edit
//                                     </div>
//                                     <div
//                                         href="#"
//                                         class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 cursor-pointer"
//                                         onClick={() => handleDelete(item)} >
//                                         Remove
//                                     </div>
//                                 </td >
//                             </tr>
//                         </>
//                     ))}
//                 </tbody>
//             </table >
//         </div >

//         {open === true && (

//             <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
//                 <form className="space-y-6" action="#" onSubmit={handlesubmit}>
//                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                             Add Data
//                         </h3>
//                         <button
//                             type="button"
//                             className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                             onClick={() => setOpen(false)}
//                         >
//                             <svg
//                                 className="w-3 h-3"
//                                 aria-hidden="true"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 14 14"
//                             >
//                                 <path
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                                 />
//                             </svg>
//                             <span className="sr-only">Close modal</span>
//                         </button>
//                     </div>
//                     <div>
//                         <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input type="title" name="title" id="title" onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title" required />
//                     </div>
//                     <div>
//                         <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//                         <input type="description" name="description" id="description" placeholder="description" onChange={(e) => setdescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
//                     </div>

//                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add data</button>
//                 </form>
//             </div>
//         )};

//         {editOpen &&
//             < EditPage editOpen={editOpen} setEditOpen={setEditOpen} editData={editData} list={list} setList={setList} />
//         }

//     </>);
// }

// export default Listing;