import { useState } from "react";
import Login from "./Login";
import Signing from "./Signing";

export default function Anonymous(props) {
    const [user, setUser] = useState({
        isLoggedin: false,
        user: null
    });
    const isLoggedin = user.isLoggedin;
    // Esto es una variable que guarda un bool
    const isRegistered = props.isRegistered;
    const anonymous = (isRegistered ?
        <>
            <Login />
        </> :
        <>
            <Signing />
        </>);

    return (isLoggedin?<></>: anonymous);
}