import Header from "../../Component/Header/Header";
import style from './Home.module.css';
import consultorio from '../../Util/Images/home7.jpeg';

function Home() {

    const whatsappMessage = "Olá, gostaria de agendar uma consulta.";

    // Função para redirecionar para o WhatsApp
    const handleButtonClick = () => {
        const phoneNumber = "44991273068"; // Número de telefone
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
    };

    return (
        <div className={style.body}>
            <Header />
            <div className={style.container}>
                <div className={style.textoContainer}>
                    <h1 className={style.h1}>Clínica de Psicologia e Psicanálise em Maringá</h1>
                    <h3 className={style.h3}>Psicóloga em constante formação em Psicanálise Lacaniana. Atendimento a adolescentes,
                        jovens e adultos.</h3>
                    <button className={style.button} onClick={handleButtonClick}>
                        Agendar consulta
                    </button>
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
