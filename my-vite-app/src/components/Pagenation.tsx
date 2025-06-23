type Props = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalUsers: number;
    totalPages: number;
    limit: number;
};

const Pagination = ({ page, setPage, totalUsers, totalPages, limit }: Props) => {
    return (
        <div className="flex justify-between items-center text-sm mt-4 px-2">
            <span>
                Showing {(page - 1) * limit + 1} - {Math.min(page * limit, totalUsers)} of {totalUsers} users
            </span>
            <div className="flex gap-1">
                <button
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100"
                >
                    &lt;
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setPage(idx + 1)}
                        className={`px-3 py-1 border rounded ${page === idx + 1 ? "bg-teal-600 text-white" : "hover:bg-gray-100"}`}
                    >
                        {idx + 1}
                    </button>
                ))}
                <button
                    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Pagination;
