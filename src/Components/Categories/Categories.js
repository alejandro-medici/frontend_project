import { useParams, useSearchParams } from "react-router-dom";

const Categorias = () => {
    
    const { categoria } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const params = [];

    for(let entry of searchParams.entries()) {
        params.push(entry);
    }

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
