import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    const Home = () => <h1>Home</h1>;
    const Pets = () => <h1>Pet List</h1>;
    const Layout = () => <h1>Layout</h1>;
    const Productos = () => <h1>Productos</h1>;
    const Categorias = () => <h1>Categorias</h1>;
    const ItemDetailContainer = () => <h1>ItemDetailContainer</h1>;
    const Cart = () => <h1>Cart</h1>;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<h2>404 - Pagina no encontrada</h2>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/listadoproductos" element={<Productos />} />
                    <Route path="/category/:categoria" element={<Categorias />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/" element={<Layout />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/pets" element={<Pets />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router