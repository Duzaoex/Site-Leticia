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
                        Sou a Letícia, tenho 29 anos, moro em Maringá-PR.
                        Me formei em Psicologia no ano de 2020. Vejo a minha
                        profissão como uma oportunidade de mudança. Acredito
                        que as coisas não precisam permanecer ruins como estão
                        e de que é possível ver a vida de outra forma. A nossa
                        visão, a nossa leitura, pode ser transformada. Confirmo
                        isso, desde os tempos de estágio ainda na universidade e
                        ainda mais ao longo dos anos com a prática profissional.
                    </p>
                    <h3>
                        Sobre minha Formação
                    </h3>
                    <p>
                        Ingressei no curso de Psicologia com a intenção
                        de adquirir técnicas para ajudar as pessoas em
                        seus sofrimentos. Pude ter uma visão ampliada sobre os sujeitos,
                        seus comportamentos e sobre os principais sintomas de adoecimentos emocionais.
                        Nos estágios, pude ver de perto, o quanto os adoecimentos, as situações traumáticas interferiram na
                        vida das pessoas e do quanto um trabalho em equipe, em grupo e individual
                        foram potentes como recursos para melhora dos sintomas.
                        Em minha atuação profissional, me dedico às técnicas da Psicanálise
                        Lacaniana para realizar uma boa escuta e bom trabalho.
                        Como analisando que continuo sendo, vivo em mim a experiência da análise.
                        Percebo o quanto o inconsciente está no discurso. O quanto é importante pra mim,
                        ter um espaço de escuta, onde o que antes eu não me dava conta, é destacado.
                        Eu acredito na análise.
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