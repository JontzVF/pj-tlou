const botoesCarrosel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click' , () => {
        desativarBotaoSelecionado();

        botaoSelecionado(botao);

        esconderImagemativa();

        imagemativa(indice);
    })
})

function imagemativa(indice) {
    imagens[indice].classList.add('ativa');
}

function botaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemativa() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
