import { MenuBar } from "../components/MenuBar";
import { Galeria } from "../components/Galeria";

function Fotos() {
    return (
        <>
            <MenuBar />
            <Galeria url="https://jsonplaceholder.typicode.com/photos" size={20} />
        </>
    );
}

export default Fotos;
