import { useCallback, useEffect, useState } from "react";

const LatestCollection = () => {
    const [user, setUser] = useState([]);
    const [page, setPage] = useState(1);
    const fetchData = useCallback(async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const nextData = await response.json();
        setUser((currentdata) => [...currentdata, ...nextData])
    }, [page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div>
                {product.map((product, index) => (
                    index < 3 && (
                        <div key={index}>
                            <h2>{product.id}</h2>
                            {product.id < 3 ? (
                                <>
                                    <h3>{product.title}</h3>
                                    <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                                    <p>{product.price}</p>
                                </>
                            ) : (
                                <a href="">many more</a>
                            )}
                        </div>
                    )
                ))}
            </div>
        </>
    )
}
export default LatestCollection;


