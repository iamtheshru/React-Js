import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from '../Action/index.jsx';


const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    return (<>
        <h2>HomePage</h2>
    </>);
}

export default HomePage;