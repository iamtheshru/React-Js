import { useEffect, useState } from "react";

const Addtocard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {  // Check if running in the browser
            const storedCards = localStorage.getItem('card');
            console.log("Stored Cards:", storedCards);  // Log the raw value from localStorage

            // If data is found, parse it
            if (storedCards) {
                try {
                    const parsedCards = JSON.parse(storedCards);  // Parse the JSON string to an object
                    console.log("Parsed Cards:", parsedCards);  // Log the parsed data

                    if (Array.isArray(parsedCards)) {
                        setCards(parsedCards);  // If it's an array, set it as the state
                    } else {
                        console.log("Data is not an array. Resetting cards.");
                        setCards([]);  // Reset if data is not an array
                    }
                } catch (error) {
                    console.error("Error parsing localStorage data:", error);  // Log any errors during parsing
                    setCards([]);  // Reset cards if error occurs
                }
            } else {
                setCards([]);  // No data in localStorage, set empty array
            }
        }
    }, []);

    const handleDecrease = (id) => {
        const updatedCards = cards.map((item) => {
            if (item.id === id) {
                const newQty = (item.quantity || 1) - 1;
                return { ...item, quantity: newQty > 1 ? newQty : 1 };
            }
            return item;
        });
        localStorage.setItem("card", JSON.stringify(updatedCards));
        setCards(updatedCards);
    }

    const handleIncrease = (id) => {
        const updatedCards = cards.map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item);
        setCards(updatedCards);
        localStorage.setItem("card", JSON.stringify(updatedCards));
    }

    const handledelete = (item) => {
        const updatedCards = cards.filter((card) => card.id !== item.id)
        setCards(updatedCards);
        localStorage.setItem("card", JSON.stringify(updatedCards));
    }


    return (
        <div className="p-4">
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Size</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.length > 0 ? (
                        cards.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td><img src={item.img} alt={item.name} className="w-20 h-20" /></td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.size}</td>
                                <td>{item.category}</td>
                                <td>₹{item.price}</td>
                                <td>{item.quantity ?? 1}</td>
                                <td className="flex items-center space-x-2">
                                    <button
                                        className="px-2 bg-gray-300 rounded"
                                        onClick={() => handleDecrease(item.id)}
                                    >−</button>
                                    <span>{item.quantity ?? 1}</span>
                                    <button
                                        className="px-2 bg-gray-300 rounded"
                                        onClick={() => handleIncrease(item.id)}
                                    >+</button>
                                </td>
                                <td><button className="bg-red-500 text-white px-4 py-1 rounded" onClick={() => handledelete(item)}>Remove</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center py-4 text-gray-500">No items in cart</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Addtocard;
