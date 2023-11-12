import Header from "../../Component/Header/Header";
import style from './Home.module.css';

function Home() {
    return (
        <body className={style.body}>
            <Header />
            <section className={`${style.section} ${style.fundo}`} />
            <div className={style.textoContainer}>
                <h1>Psicologia e Psicanálise em Maringá</h1>
                <h3>Psicóloga em constante formação em Psicanálise Lacaniana. Atendimento a adolescentes,
                    jovens e adultos.</h3>
                <button className={style.button}>Agendar consulta</button>
            </div>
        </body>
    );
}

export default Home;