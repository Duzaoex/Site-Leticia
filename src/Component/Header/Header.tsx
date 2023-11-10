import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <h1>LETICIA NERIS</h1>
                <h1>CARNEIRO</h1>
                <h2>PSICÓLOGA</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicos" >
                            Serviços
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/localizacao" >
                            Localização
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;