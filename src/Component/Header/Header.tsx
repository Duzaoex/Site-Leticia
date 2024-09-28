import { Link } from "react-router-dom";
import style from './Header.module.css';
import logo from '../../Util/Images/ll.jpeg';

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
                    <Link to="/" className={style.buttonStyle}>
                        Home
                    </Link>
                    <Link to="/SobreMim" className={style.buttonStyle}>
                        Sobre Mim
                    </Link>
                    <Link to="/Atuacao" className={style.buttonStyle}>
                        Área de Atuação
                    </Link>
                    <Link to="/Localizacao" className={style.buttonStyle}>
                        Localização
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
