/*
Quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, texto e nome do personagem grande selecionado.

OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
Passo 1 = Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles.

Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.

Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

OBJETIVO 2 - Quando passar o mouse em cima do perosnagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.
Passo 1 - Pegar o elemento do personagem grande pra adicionar as informaçõesnele;
Passo 2 -Alterar a imagem do personagem grande;
Passo 3 - Alterar o nome do personagem grande;
Passo 4 - Alterar a descrição do personagem grande;
*/

const personagens = document.querySelectorAll('.personagem');

// passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => { 

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        personagem.classList.add('selecionado');
        //passo 3
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        // passo 3
        const nomePersonagem = document.getElementById('nome')
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        //passo 4
        const descricaoPersonagem = document.getElementById('descricao');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    });
})