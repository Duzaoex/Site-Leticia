import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <p>© 2024 Psicologia e Psicanálise em Maringá. Todos os direitos reservados.</p>
            <p>Contato: (44) 9127-3068 | Email: exemplo@psicologia.com</p>
            <p className={style.credit}>Criado por Eduardo Neris Carneiro</p>
        </footer>
    );
}

export default Footer;
