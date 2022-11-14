import { useContext } from "react";
import { MainContext } from "../Context/MainContext"; 
import { LANGUAGES } from "../languaje";

export default function Login() {

    let { current_language } = useContext(MainContext);

    function placeHolderFunction () {
        console.log("placeholder");
    }

    return (
    <>
        <form onSubmit={ () =>  placeHolderFunction()}>
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
    </>
    );
}