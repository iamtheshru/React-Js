import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggedin']);
    const navigate = useNavigate();

    const logoutclearcookie = async () => {
        await removeCookie("loggedin");
        await removeCookie('admin');
        return true
    }

    useEffect(() => {
        console.log("called inside");
        logoutclearcookie()
        // window.location.href="/"
        navigate("/")
    }, [])

    return (<>
        <h2>AAAA</h2>
    </>);
}

export default Logout;