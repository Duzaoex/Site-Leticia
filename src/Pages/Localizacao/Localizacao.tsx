import style from './Localizacao.module.css';
import fachadaDoLocal from '../../Util/Images/fachada.jpeg'
import Header from '../../Component/Header/Header';

function Localizacao() {
    return (
        <>
            <Header />
            <div className={style.container}>
                <img className={style.foto} src={fachadaDoLocal} alt="fachada Do Local" />
                <div className={style.text}>
                    <h1>Atendimento Presencial</h1>
                    <p>O Atendimento Presencial é realizado em Maringá-PR.</p>
                    <p>As sessões são feitas uma vez por semana com duração de aproximadamente 50 minutos.</p>
                    <p>O Atendimento Online é ofertado àqueles que não conseguem se dirigir à clínica e/ou que
                        não residem em Maringá-PR.</p>
                    <p>Ele ocorre através do Google Meet.</p>
                </div>
                <div className={style.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.051897251795!2d-51.94666172393514!3d-23.42249237889552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd7293ad76cab%3A0xa6aa6032096dd69d!2sR.%20N%C3%A9o%20Alves%20Martins%2C%203120%20-%20Zona%2003%2C%20Maring%C3%A1%20-%20PR%2C%2087013-060!5e0!3m2!1spt-BR!2sbr!4v1719612148622!5m2!1spt-BR!2sbr"
                        width="500"
                        height="350"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <h2>Endereço:</h2>
                    <p>Centro Médico Ouro Preto</p>
                    <p>Rua Néo Alves Martins, 3120 Zona 3</p>
                    <p>2º andar Sala 21</p>
                    <p>CEP 87013-060</p>
                    <p>Maringá-PR</p>
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

export default Localizacao;