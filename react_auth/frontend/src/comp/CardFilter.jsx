import React from "react";

const CardFilter = ({ filters, setFilters }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-full md:w-1/4">
            <h2 className="text-xl font-semibold mb-4 text-center">Filter</h2>

            {/* Size Filter */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Size:</label>
                <select
                    className="w-full border rounded p-2"
                    value={filters.size}
                    onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                >
                    <option value="">All</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Category:</label>
                <select
                    className="w-full border rounded p-2 "
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                >
                    <option value="">All</option>
                    <option value="Books">Books</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Price Range:</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        className="w-1/2 border rounded p-2"
                        name="minprice"
                        value={filters.minprice}
                        onChange={(e) => setFilters({ ...filters, minprice: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        className="w-1/2 border rounded p-2"
                        name="maxprice"
                        value={filters.maxprice}
                        onChange={(e) => setFilters({ ...filters, maxprice: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardFilter;
