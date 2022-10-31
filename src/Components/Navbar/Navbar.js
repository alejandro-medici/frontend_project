import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/home">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/pets">Pets</Link>
                <Link to="/category">Category</Link>
            </nav>
        </>
    );
}