import { useContext } from "react";
import { UserContext, UserDispatchContext } from "./UserContextEx1";

function Profile() {
    const userDetailsContext = useContext(UserContext);
    const dispatchContext = useContext(UserDispatchContext);

    const changeName = () => {
        console.log("change Name");
        if (userDetailsContext.change.changeName === true) {
            dispatchContext.setUserDetails({ username: 'shraddha patel' });
            dispatchContext.setChange({ ...userDetailsContext.change, changeName: false });
        } else {
            dispatchContext.setUserDetails({ username: 'shraddha ' });
            dispatchContext.setChange({ ...userDetailsContext.change, changeName: true });
        }
    }

    return (<>
        <button onClick={changeName}> Change Name</button>
        <p>{userDetailsContext.userDetails.username}</p>
    </>)
}
export default Profile;