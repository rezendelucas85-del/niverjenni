// Criar confete ao carregar a página
function criarConfete() {
    const container = document.getElementById('confetti');
    
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.left = Math.random() * 100 + '%';
        confeti.style.top = '-10px';
        confeti.style.width = Math.random() * 10 + 5 + 'px';
        confeti.style.height = confeti.style.width;
        confeti.style.background = gerarCorLila();
        confeti.style.borderRadius = '50%';
        confeti.style.pointerEvents = 'none';
        confeti.style.zIndex = '1';
        confeti.style.opacity = Math.random() * 0.7 + 0.3;
        
        container.appendChild(confeti);
        
        const duration = Math.random() * 2000 + 2000;
        const xMovement = Math.random() * 200 - 100;
        
        animar(confeti, duration, xMovement);
    }
}

function gerarCorLila() {
    const cores = [
        '#c71585',  // Violet medium
        '#9400d3',  // Blue violet
        '#da70d6',  // Orchid
        '#ba55d3',  // Medium Orchid
        '#dda0dd',  // Plum
        '#ee82ee',  // Violet
        '#e0b0ff',  // Light lilac
        '#d4a5ff'   // Lilac
    ];
    return cores[Math.floor(Math.random() * cores.length)];
}

function animar(elemento, duration, xMovement) {
    const inicio = Date.now();
    const altura = window.innerHeight;
    
    function frame() {
        const tempo = Date.now() - inicio;
        const progresso = tempo / duration;
        
        if (progresso < 1) {
            elemento.style.top = (progresso * altura) + 'px';
            elemento.style.left = 'calc(' + (parseFloat(elemento.style.left) + (xMovement * progresso * 0.1)) + 'px)';
            elemento.style.opacity = Math.max(0, 1 - progresso);
            requestAnimationFrame(frame);
        } else {
            elemento.remove();
        }
    }
    
    requestAnimationFrame(frame);
}

// Função para confirmar presença
function confirmarPresenca() {
    // Criar explosion de confete
    explosaoConfete();
    
    // Simular confirmação
    alert('🎉 Que alegria! Sua presença será muito especial nesse dia! 🎉\n\n📅 Quarta-feira, 29 de Abril de 2026\n\nEspero você lá! 💜');
}

// Função para compartilhar
function compartilhar() {
    const titulo = 'Meu 30º Aniversário!';
    const texto = 'Estou convidado para o aniversário de 30 anos no dia 29 de Abril de 2026! Será incrível! 🎉';
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: titulo,
            text: texto,
            url: url
        });
    } else {
        // Fallback para navegadores que não suportam Web Share API
        const mensagem = `${titulo}!\n\n${texto}\n\n${url}`;
        alert('Compartilhe essa mensagem:\n\n' + mensagem);
    }
}

function explosaoConfete() {
    const container = document.getElementById('confetti');
    
    // Criar muitos confetes rapidamente
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            const x = Math.random() * 100;
            const y = Math.random() * 50 + 25; // Aparecer no meio da tela
            
            confeti.style.position = 'fixed';
            confeti.style.left = x + '%';
            confeti.style.top = y + '%';
            confeti.style.width = Math.random() * 8 + 4 + 'px';
            confeti.style.height = confeti.style.width;
            confeti.style.background = gerarCorLila();
            confeti.style.borderRadius = '50%';
            confeti.style.pointerEvents = 'none';
            confeti.style.zIndex = '10';
            confeti.style.opacity = '1';
            
            container.appendChild(confeti);
            
            const velocidadeX = (Math.random() - 0.5) * 800;
            const velocidadeY = Math.random() * 400 + 100;
            
            animarExplosao(confeti, velocidadeX, velocidadeY);
        }, i * 10);
    }
}

function animarExplosao(elemento, velocidadeX, velocidadeY) {
    const inicio = Date.now();
    const gravidade = 400;
    
    function frame() {
        const tempo = (Date.now() - inicio) / 1000;
        
        if (tempo < 3) {
            const x = parseFloat(elemento.style.left) + (velocidadeX * 0.02);
            const y = parseFloat(elemento.style.top) + (velocidadeY * tempo * 0.02 + gravidade * tempo * tempo * 0.01);
            
            elemento.style.left = x + '%';
            elemento.style.top = y + '%';
            elemento.style.opacity = Math.max(0, 1 - tempo / 2);
            
            requestAnimationFrame(frame);
        } else {
            elemento.remove();
        }
    }
    
    requestAnimationFrame(frame);
}

// Iniciar confete quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    criarConfete();
    
    // Recriar confete a cada 15 segundos para efeito contínuo
    setInterval(() => {
        if (Math.random() > 0.5) {
            criarConfete();
        }
    }, 15000);
});

// Adicionar interatividade ao passar o mouse no banner
document.addEventListener('mousemove', (e) => {
    const pointerX = e.clientX / window.innerWidth;
    const pointerY = e.clientY / window.innerHeight;
    
    const elements = document.querySelectorAll('.balloon, .number-30 span');
    
    elements.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        const elemX = rect.left + rect.width / 2;
        const elemY = rect.top + rect.height / 2;
        
        const distX = (e.clientX - elemX) * 0.1;
        const distY = (e.clientY - elemY) * 0.1;
        
        if (Math.abs(distX) < 50 && Math.abs(distY) < 50) {
            elem.style.transform = `translate(${distX}px, ${distY}px)`;
        }
    });
});