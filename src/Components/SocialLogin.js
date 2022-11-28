import { app, db } from "../Firebase/FirebaseApp";
import { collection, getDocs, query, where } from "firebase/firestore";
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
            // Aca hacemos una query de la collection Pokemons
            const pokemonsRef = collection(db, "Pokemons");
            const q = query(pokemonsRef, where("name", "==", "pikachu"));

            // Obtenemos los datos de la collecion entera o de lo filtrado por la query
            const docs = getDocs(pokemonsRef)
            .then( (result ) => {
                  console.log(result);
                  result.docs.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                  });
    
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            } );
           
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