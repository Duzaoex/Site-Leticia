import { Link, NavLink } from "react-router-dom";
import style from './Header.module.css';
import logo from '../../Util/Images/logo.png';

function Header() {
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo} alt="logo psicologia" />
            <div className={style.texto}>
                <h2 className={style.nome}>LETICIA NERIS CARNEIRO</h2>
                <h3 className={style.titulo}>PSICÓLOGA</h3>
            </div>
            <nav className={style.nav}>
                <div className={style.ul}>
                    <button className={style.buttonStyle}>
                        <Link to="/">Home</Link>
                    </button>
                    <button className={style.buttonStyle}>
                        <Link to="/SobreMim">Sobre Mim</Link>
                    </button>
                    <button className={style.buttonStyle}>
                        <Link to="/Servicos">Servicos</Link>
                    </button>
                    <button className={style.buttonStyle}>
                        <Link to="/Localizacao">Localizacao</Link>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
