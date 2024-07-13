import Header from "../../Component/Header/Header";
import Footer from "../Home/Footer";
import style from './Home.module.css';
import consultorio from '../../Util/Images/esc1.jpeg';

function Home() {
    return (
        <div className={style.body}>
            <Header />
            <div className={style.container}>
                <div className={style.textoContainer}>
                    <h1 className={style.h1}>Psicologia e Psicanálise em Maringá</h1>
                    <h3 className={style.h3}>Psicóloga em constante formação em Psicanálise Lacaniana. Atendimento a adolescentes,
                        jovens e adultos.</h3>
                    <button className={style.button}>Agendar consulta</button>
                </div>
                <img className={style.consultorio} src={consultorio} alt="logo psicologia" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
