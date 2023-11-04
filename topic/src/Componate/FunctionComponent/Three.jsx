import { useContext } from "react";
import { Fname } from "./13FunctionalComponentContext";
const Three = () => {
    const data = useContext(Fname);
    return (<>
        <h1 className="text-success">Hello {data}</h1>
    </>);
}

export default Three;