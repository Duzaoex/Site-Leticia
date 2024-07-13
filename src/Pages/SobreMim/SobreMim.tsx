import style from './SobreMim.module.css';
import foto from '../../Util/Images/leticiaperfilbom.jpeg'
import Header from '../../Component/Header/Header';

function SobreMim() {
    return (
        <>
            <Header />
            <div className={style.sobreMim}>
                <img className={style.foto} src={foto} alt="foto da psicologia" />
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
            </div>
            <footer className={style.footer}>
                <p>© 2024 Psicologia e Psicanálise em Maringá. Todos os direitos reservados.</p>
                <p>Contato: (44) 99127-3068 | Email: leticianeriscarneiro165@gmail.com</p>
                <p className={style.credit}>Criado por Eduardo Neris Carneiro</p>
            </footer>
        </>
    )
}

export default SobreMim;