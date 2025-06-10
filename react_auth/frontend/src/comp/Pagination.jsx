import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        img: '',
        gender: '',
        hobbies: [],
    });
    const [editIndex, setEditIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // ✅ Load data from localStorage on initial render
    useEffect(() => {
        const storedItems = localStorage.getItem('formDataItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // ✅ Save data to localStorage on update
    // useEffect(() => {
    //     localStorage.setItem('formDataItems', JSON.stringify(items));
    // }, [items]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'img' && type === 'file') {
            const file = e.target.files[0];
            console.log(file);

            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData((prev) => ({ ...prev, img: reader.result }));
                };
                reader.readAsDataURL(file);
            }
            return;
        }

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                hobbies: checked ? [...prev.hobbies, value] : prev.hobbies.filter((hobby) => hobby !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleAdd = () => {
        const { name, gender, img } = formData;
        if (!name || !gender || !img) return;

        if (editIndex !== null) {
            const updated = [...items];
            updated[editIndex] = formData;
            setItems(updated);
            setEditIndex(null);
        } else {
            setItems([...items, formData]);
        }
        localStorage.setItem('formDataItems', JSON.stringify([...items, formData]))
        setFormData({ name: '', img: '', gender: '', hobbies: [] });
    };

    const handleEdit = (index) => {
        setFormData(items[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <>
            {/* <Header /> */}

            <div className="p-6 max-w-xl mx-auto">
                <h2 className="text-xl font-bold mb-4">LocalStorage CRUD with Pagination</h2>

                <div className="space-y-3 mb-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />

                    <input
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />

                    {formData.img && (
                        <img src={formData.img} alt="Preview" className="w-20 h-20 object-cover rounded" />
                    )}

                    <div className="flex gap-4">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                            /> Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                            /> Female
                        </label>
                    </div>

                    <div className="flex gap-4">
                        <label>
                            <input
                                type="checkbox"
                                value="Cricket"
                                checked={formData.hobbies.includes('Cricket')}
                                onChange={handleChange}
                            /> Cricket
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Music"
                                checked={formData.hobbies.includes('Music')}
                                onChange={handleChange}
                            /> Music
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Reading"
                                checked={formData.hobbies.includes('Reading')}
                                onChange={handleChange}
                            /> Reading
                        </label>
                    </div>

                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 text-white px-4 py-1 rounded"
                    >
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>

                <ul className="mb-4">
                    {paginatedItems.map((item, i) => (
                        <li key={startIndex + i} className="border p-3 mb-2 flex gap-4 items-center">
                            <img src={item.img} alt={item.name} className="w-14 h-14 object-cover rounded" />
                            <div className="flex-grow">
                                <p><strong>Name:</strong> {item.name}</p>
                                <p><strong>Gender:</strong> {item.gender}</p>
                                <p><strong>Hobbies:</strong> {item.hobbies.join(', ')}</p>
                            </div>
                            {/* {startIndex + i} */}
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(startIndex + i)} className="text-blue-600">Edit</button>
                                <button onClick={() => handleDelete(startIndex + i)} className="text-red-600">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >Prev</button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={currentPage === i + 1 ? 'font-bold underline' : ''}>
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
                </div>
            </div>
        </>
    );
};

export default Pagination;
