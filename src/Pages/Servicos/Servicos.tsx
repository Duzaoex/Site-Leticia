import style from './Servicos.module.css';
import { Link } from "react-router-dom";
import logo from '../../Util/Images/logo.png';

function Servicos() {
    return (
        <>
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
                            <Link to="/Servicos">Serviços</Link>
                        </button>
                        <button className={style.buttonStyle}>
                            <Link to="/Localizacao">Localização</Link>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Servicos;