import style from './SobreMim.module.css';
import { Link } from "react-router-dom";
import logo from '../../Util/Images/logo.png';

function SobreMim() {
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
            <div className={style.apresentacao}>
                <h1>Conheça a Psicóloga Letícia Neris Carneiro CRP 08/3351O</h1>
                <h3>
                    Olá, me chamo Letícia, atuo como psicóloga clínica.
                </h3>
                <p>
                    Minha dedicação e trabalho em ofertar
                    um serviço de saúde mental acontecem porque acredito que o cuidado, o acolhimento, à
                    escuta, as técnicas da teoria da psicanálise podem proporcionar tratamento aos
                    sofrimentos, queixas e sintomas que causam adoecimento.
                </p>
                <p>
                    Atendo adolescentes, jovens e adultos que se encontram em sofrimento e incômodo com
                    questões que vêm passando.
                </p>
                <p>
                    Além da graduação em Psicologia, estou em constante formação através de Grupos de
                    Estudos, Supervisão e Estudo Teórico que conduzem ao processo de análise.
                </p>
            </div>
        </>
    )
}

export default SobreMim;