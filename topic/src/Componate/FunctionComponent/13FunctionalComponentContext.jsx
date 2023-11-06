import { createContext, useState } from "react";
// import One1 from "./One1";
import Login from "./Login.jsx";
import User from "./User.jsx";

// const Fname = createContext();
const AppContext = createContext(null)
function ContextTutorial() {
    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Login /> <User />
        </AppContext.Provider>
    );
}

// // const UseContext = () => {
// //     return (
// //         <>
// //             {/* <div className="row">
// //                 <div className="col-6 offset-6">
// //                     <Fname.Provider value="Shraddha">
// //                         <One1 />
// //                     </Fname.Provider>
// //                 </div>
// //             </div> */}
// //         </>

// //     );
// }


export default ContextTutorial;
// export default UseContext;
export { AppContext };
// export { Fname };