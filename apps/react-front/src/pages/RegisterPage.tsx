import { ReactElement } from "react";
import Register from "../components/Register";

export default function RegisterPage(): ReactElement {
    return(
        <>
            
            {/* este header es para mostrar algo en la pagina de registro, puede ser borrado en un futuro */}
            <header>
                <h1>Soy la pagina de registro</h1>
            </header>

            <main>
                <h2>Cree su usuario</h2>
                <Register />
            </main>

            {/* este footer es para mostrar algo en la pagina de registro, puede ser borrado en un futuro */}
            <footer>Este es el footer</footer>
        </>
    )
}