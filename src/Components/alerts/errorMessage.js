import "./error.css";

export default function ErrorMessage(props) {
    const message = props.message;

    // definir style para que sea un error
    return (
        <>
        <label className="loginError">
        { message }
        </label>
        </>
    );
}