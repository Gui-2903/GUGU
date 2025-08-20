// Inicializando o Zuck.js
window.onload = function () {
    //document.addEventListener('DOMContentLoaded', function() {
    const containerDosStories = document.getElementById('storie');
    var stories = new Zuck(containerDosStories, {
        skin: 'snapgram',   // snapgram, facegram, vemde, swipenight
        avatars: true,
        list: false,
        cubeEffect: true,
        autoFullScreen: false,
        backNative: true,
        previousTap: true,
        localStorage: true,

        stories: [
            {
                id: "user1",
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "Guilherme",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story1",
                        type: "photo",
                        length: 3,
                        src: "https://picsum.photos/400/700?random=1",
                        preview: "https://picsum.photos/100/150?random=1",
                        seen: false,
                        time: Date.now()
                    },
                    {
                        id: "story2",
                        type: "video",
                        length: 0,
                        src: "https://www.w3schools.com/html/mov_bbb.mp4",
                        preview: "https://picsum.photos/100/150?random=2",
                        seen: false,
                        time: Date.now()
                    }
                ]
            },
            {
                id: "user2",
                photo: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Maria",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story3",
                        type: "photo",
                        length: 5,
                        src: "https://picsum.photos/400/700?random=3",
                        preview: "https://picsum.photos/100/150?random=3",
                        seen: false,
                        time: Date.now()
                    }
                ]
            }
        ]
    });
    // });

    // Removido código não utilizado

}

// Removidas funções não utilizadas
function fecharMensagem() {
    const mensagem = document.getElementById('mensagem-bemvindo');
    mensagem.style.opacity = '0'; // Inicia a transição para invisível
    setTimeout(() => {
        mensagem.style.display = 'none'; // Remove do fluxo após a transição
    }, 3000); // Tempo deve corresponder à transição (3 segundos)
}
// Função para criar e animar corações e flores
function criarElementosAnimados() {
    const elementosContainer = document.querySelector('.elementos-animados');
    elementosContainer.classList.add('mostrar');
    
    // Símbolos para corações e flores
    const coracoes = ['❤️', '💕', '💖', '💗', '💓','💙' ];
    const flores = ['🌸', '🌺', '🌻', '🌹'];
    
    // Limpa o container antes de adicionar novos elementos
    elementosContainer.innerHTML = '';
    
    // Variável para controlar o loop
    let loopCount = 0;
    const maxLoops = 8; // 8 loops x 5 segundos = 40 segundos aproximadamente
    const loopInterval = 5100; // 5 segundos por loop
    
    // Função para criar um conjunto de elementos
    function criarConjuntoElementos() {
        // Limpa os elementos anteriores para evitar sobrecarga
        elementosContainer.innerHTML = '';
        
        // Cria apenas 20 elementos por vez para melhorar o desempenho
        for (let i = 0; i < 20; i++) {
            // Decide se é coração ou flor
            const tipo = Math.random() > 0.5 ? 'coracao' : 'flor';
            const simbolos = tipo === 'coracao' ? coracoes : flores;
            
            // Cria o elemento
            const elemento = document.createElement('div');
            // Usa a classe correta para animação (coracao1 ou flor)
            elemento.className = tipo === 'coracao' ? 'coracao1' : 'flor';
            elemento.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
            
            // Posição horizontal aleatória
            elemento.style.left = Math.random() * 100 + '%';
            
            // Atraso aleatório para a animação, mas não muito longo
            elemento.style.animationDelay = (Math.random() * 2) + 's';
            
            // Tamanho aleatório, mas limitado para melhor desempenho
            const tamanho = Math.random() * 1.5 + 0.8; // Entre 0.8 e 2.3
            elemento.style.fontSize = (24 * tamanho) + 'px';
            
            // Adiciona ao container
            elementosContainer.appendChild(elemento);
        }
        
        loopCount++;
        
        // Continua o loop até atingir o tempo máximo (40 segundos)
        if (loopCount < maxLoops) {
            setTimeout(criarConjuntoElementos, loopInterval);
        } else {
            // Finaliza a animação após 40 segundos
            setTimeout(function() {
                elementosContainer.classList.remove('mostrar');
                // Limpa o container após a animação
                setTimeout(function() {
                    elementosContainer.innerHTML = '';
                }, 500);
            }, loopInterval);
        }
    }
    
    // Inicia o primeiro conjunto de elementos
    criarConjuntoElementos();
}

// Variáveis de estado globais para melhor performance
let tocando = false;
let imgPretaAberta = false;
let icone, container, audio, imgPreta, imgPretaContainer, fecharImgPreta;

// Inicializa os elementos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa os elementos uma única vez para melhor performance
    icone = document.getElementById('icone-gif');
    container = icone.parentElement.parentElement; // Container é o avô do ícone
    audio = document.getElementById('audio-animado');
    imgPreta = document.querySelector('.img-preta');
    imgPretaContainer = document.querySelector('.img-preta-container');
    fecharImgPreta = document.querySelector('.fechar-img-preta');
    
    // Define o caminho do arquivo de áudio
    audio.src = 'img/Belo - Reinventar (Áudio Oficial).mp3';
    
    // Função para fechar a imagem preta - otimizada para ser mais rápida
    function fecharImagemPreta() {
        // Remove a classe renderizada imediatamente para esconder o botão de fechar
        imgPretaContainer.classList.remove('renderizada');
        
        // Adiciona a classe de encolhimento imediatamente
        imgPreta.classList.add('encolhendo');
        imgPreta.classList.remove('crescer');
        
        // Aguarda apenas o tempo necessário para a animação de encolhimento
        setTimeout(function() {
            // Remove todas as classes de animação de uma vez
            imgPreta.classList.remove('pre-crescer');
            imgPreta.classList.remove('encolhendo');
            imgPretaContainer.classList.remove('mostrar');
            imgPretaAberta = false;
        }, 700); // Tempo reduzido para apenas 500ms
    }
    
    // Adiciona evento de clique ao botão X
    fecharImgPreta.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique se propague para elementos pai
        fecharImagemPreta();
       
        const destino = document.getElementById('destino');
        const inicio = window.scrollY;
        const fim = destino.getBoundingClientRect().top + window.scrollY;
        const duracao = 4090; // Duração em milissegundos (1 segundo, ajuste para mais lento, ex.: 2000 para 2 segundos)
        let inicioTempo = null;
        function animarScroll(tempoAtual) {
            if (!inicioTempo) inicioTempo = tempoAtual;
            const progresso = Math.min((tempoAtual - inicioTempo) / duracao, 1);
            window.scrollTo(0, inicio + (fim - inicio) * progresso);
            if (progresso < 1) {
            requestAnimationFrame(animarScroll);
            }
        }

        requestAnimationFrame(animarScroll);

        
    });
    
    icone.addEventListener('click', function () {
        // Se a imagem preta estiver aberta, feche-a imediatamente
        if (imgPretaAberta) {
            fecharImagemPreta();
            audio.pause();
            
            // Reduzir o ícone mais rapidamente
            setTimeout(function() {
                icone.classList.remove('crescendo');
                container.classList.remove('crescendo');
            }, 300); // Tempo reduzido drasticamente
            
            tocando = false;
            return;
        }
        
        if (!tocando) {
            // Se não estiver tocando, inicia a reprodução e adiciona as classes
            audio.play();
            icone.classList.add('crescendo');
            container.classList.add('crescendo');
            tocando = true;
            
            // Mostra a imagem preta mais rapidamente
            setTimeout(function() {
                // Torna a imagem visível e inicia a animação de crescimento
                imgPretaContainer.classList.add('mostrar');
                imgPreta.classList.add('pre-crescer');
                
                // Força um reflow e adiciona a classe de crescimento imediatamente
                void imgPreta.offsetWidth;
                imgPreta.classList.add('crescer');
                imgPretaAberta = true;
                
                // Chama a função para criar e animar corações e flores
                criarElementosAnimados();
                // Adiciona a classe 'renderizada' após um tempo reduzido
                setTimeout(function() {
                    imgPretaContainer.classList.add('renderizada');
                }, 3000); // Tempo para aparecer botão x
            }, 1000); // Tempo reduzido

        } else {
            // Se estiver tocando, pausa a reprodução
            audio.pause();
            fecharImagemPreta();
            
            // Reduzir o ícone mais rapidamente
            setTimeout(function() {
                icone.classList.remove('crescendo');
                container.classList.remove('crescendo');
            }, 300); // Tempo reduzido drasticamente
            
            tocando = false;
        }
    });
});
