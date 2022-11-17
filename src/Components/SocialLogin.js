import { app } from "../Firebase/FirebaseApp";
import { getAuth, signInWithPopup, linkWithPopup } from "firebase/auth";
import { GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";

export default function SocialLogin (props) {

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider()

    function doLogin(provider) {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then( (credentials) => {
            const firebase_user = credentials.user;
            console.log(firebase_user);
        })
        .catch( (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        } );
    }

    return (
        <>
            <button onClick={ ()=> doLogin(googleProvider) }>
                Sign in with Google
            </button>
        </>
    );
}