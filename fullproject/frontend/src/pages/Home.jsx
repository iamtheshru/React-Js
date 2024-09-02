import { Link } from "react-router-dom";
function Home() {
    return (<>
        <div className="mt-5">
            <Link to="/login" className="bg-red-700 rounded p-2 m-2 ">Login</Link>
        </div>
    </>);
}

export default Home;