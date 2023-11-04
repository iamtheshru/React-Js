import { createContext } from "react";
import One1 from "./One1";

const Fname = createContext();
const UseContext = () => {

    return (
        <div className="row">
            <div className="col-6 offset-6">
                <Fname.Provider value="Shraddha">
                    <One1 />
                </Fname.Provider>
            </div>
        </div>
    );
}

export default UseContext;
export { Fname };