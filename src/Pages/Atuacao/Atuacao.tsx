
import style from './Atuacao.module.css';
import fotoConsultorio from '../../Util/Images/fotoconsultorio.jpeg';
import Header from '../../Component/Header/Header';

function Atuacao() {
    return (
        <>
            <Header />
            <div className={style.container}>
                <img className={style.foto} src={fotoConsultorio} alt="foto consultorio psicologia" />
                <div className={style.text}>
                    <h1>Análise</h1>
                    <p>
                        A análise é um lugar de fala e de escuta. Quando Freud estava fundando a Psicanálise, ele escreveu sobre dar destaque à Associação Livre (falar livremente o que vier à cabeça).
                    </p>
                    <p>
                        Ao chegar para o primeiro atendimento com a(o) analista, você será convidado a apresentar a sua queixa. O que tem te incomodado, de qual sintoma deseja se livrar, o que tem te atrapalhado a produzir (estudos/trabalho) e o que tem prejudicado sua relação consigo e com o outro.
                    </p>
                    <p>
                        O espaço é pra você e o tempo é pra você. Nessa caminhada, provavelmente, você pode perceber que, o que esteve sempre ali e apesar de saber que sabe, você se esforçou muito para não saber ou não se deixar saber que sabe.
                    </p>
                    <p>
                        Você pode se dar conta de quanta coisa se repete na sua vida, mas você não tem uma resposta lógica pra isso e não sabe o que fazer conscientemente para deixar de repetir.
                    </p>
                    <p>
                        Desejo que encontre tempo para trabalhar a verdade de si mesma. Que a prioridade esteja em ser verdadeira consigo mesma, porque você é uma casa em que vai sempre morar. Por que não cuidar dela?
                    </p>
                </div>
            </div>
            <footer className={style.footer}>
                <p>© 2024 Psicologia e Psicanálise em Maringá. Todos os direitos reservados.</p>
                <p>Contato: (44) 99127-3068 | Email: leticianeriscarneiro165@gmail.com</p>
                <p className={style.credit}>Criado por Eduardo Neris Carneiro</p>
            </footer>
        </>
    );
}

export default Atuacao;