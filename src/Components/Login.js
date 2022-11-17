import { useContext } from "react";
import { MainContext } from "../Context/MainContext"; 
import { LANGUAGES } from "../languaje";
import { app } from "../Firebase/FirebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SocialLogin from "./SocialLogin";

export default function Login() {

    let { current_language } = useContext(MainContext);

    function placeHolderFunction ( event) {
        event.preventDefault(); // evitar la propagacion del evento..
        const email = "test@test.com";
        const password = "test1234";
        const auth = getAuth(app);
        const user = signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
            // Si llegamos aca... es porque se logeo..
            const firebase_user = credentials.user;
            console.log(firebase_user);
        })
        .catch( (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        } );

        console.log("placeholder");
    }

    return (
    <>
        <form onSubmit={ (event) =>  placeHolderFunction(event)}>
            <div >
                <label>{ LANGUAGES[current_language].REGISTER.INPUT_EMAIL }</label>
                <input
                    type="text"
                    aria-label="Email field"
                    name="email"
                    onChange={() =>  placeHolderFunction()}
                />
            </div>
            <div >
                <label >{ LANGUAGES[current_language].REGISTER.INPUT_PASS }</label>
                <input
                    type="password"
                    aria-label="Password field"
                    name="password"
                    onChange={() =>  placeHolderFunction()}
                />
            </div>
            <div >
                <button type="submit">
                    { LANGUAGES[current_language].LOGIN.HEADING_LOGIN }
                </button>
            </div>
        </form>
        <SocialLogin></SocialLogin>
    </>
    );
}