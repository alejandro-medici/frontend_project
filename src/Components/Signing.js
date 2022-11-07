
export default function Signing() {

    function placeHolderFunction (){
        console.log("placeholder");
    }

    return (
        <>
            <form onSubmit={ () => placeHolderFunction()}>
            <div >
                <label>Email</label>
                <input
                    type="text"
                    aria-label="Email field"
                    name="email"
                    onChange={() => placeHolderFunction()}
                />
            </div>
            <div >
                <label >Password</label>
                <input
                    type="password"
                    aria-label="Password field"
                    name="password"
                    onChange={() => placeHolderFunction()}
                />
            </div>
            <div >
                <label >Confirm Password</label>
                <input
                    type="password"
                    aria-label="Confirm password field"
                    name="confirmPassword"
                    onChange={() => placeHolderFunction()}
                />
            </div>
            <div >
                <button type="submit">
                    Register
                </button>
            </div>
        </form>
        </>
    );
}