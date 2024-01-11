import { useSelector } from "react-redux";

const AccessStorePage = () => {
    const products = useSelector((state) => state);
    return (<>
        <div className="container">
            <div className="row">
                <div className="col">
                    AccessStorePage
                    {JSON.stringify(products)}
                </div>
            </div>
        </div>
    </>);
}

export default AccessStorePage;