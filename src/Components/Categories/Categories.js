import { useParams } from "react-router-dom";

const Categorias = () => {
    
    const { categoria } = useParams();

    return (
        <>
            <h1>Categorias</h1>
            <span>
                { (categoria ==='terror')?"Invalido, no hay peliculas de terror":categoria }
            </span>
        </>
    );
    
} 

export default Categorias;
