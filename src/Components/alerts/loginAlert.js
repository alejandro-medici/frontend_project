import ErrorMessage from "./errorMessage";

export default function LoginAlert(props) {

    // Esto es una variable que guarda un bool
    const displayError = props.displayError;
    return (
        <>
        { displayError?<ErrorMessage message="Error de credenciales"></ErrorMessage>:<></> }
        </>
    );
}
