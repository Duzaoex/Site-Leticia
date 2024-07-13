import Header from "../../Component/Header/Header";
import style from './Home.module.css';
import consultorio from '../../Util/Images/frase.jpeg';

function Home() {
    return (
        <div className={style.body}>
            <Header />
            <div className={style.container}>
                <div className={style.textoContainer}>
                    <h1 className={style.h1}>Clínica de Psicologia e Psicanálise em Maringá</h1>
                    <h3 className={style.h3}>Psicóloga em constante formação em Psicanálise Lacaniana. Atendimento a adolescentes,
                        jovens e adultos.</h3>
                    <button className={style.button}>Agendar consulta</button>
                </div>
                <img className={style.consultorio} src={consultorio} alt="logo psicologia" />
            </div>
            <footer className={style.footer}>
                <p>© 2024 Psicologia e Psicanálise em Maringá. Todos os direitos reservados.</p>
                <p>Contato: (44) 99127-3068 | Email: leticianeriscarneiro165@gmail.com</p>
                <p className={style.credit}>Criado por Eduardo Neris Carneiro</p>
            </footer>
        </div>
    );
}

export default Home;
