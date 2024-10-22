const form = document.getElementById('contact-form');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                confirmation.style.display = 'block';
                form.reset(); // Limpa o formulário após o envio
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
            }
        }).catch(error => {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
        });
    });


    function toggleInfo(infoId) {
        const infoDiv = document.getElementById(infoId);
        if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
            infoDiv.style.display = 'block';
        } else {
            infoDiv.style.display = 'none';
        }
    }
    
    window.onload = function() {
        document.getElementById('info1').style.display = 'none';
        document.getElementById('info2').style.display = 'none';
        document.getElementById('info3').style.display = 'none'; // Inicializa a terceira caixa
    };

    function toggleInfo(infoId) {
        const infoDiv = document.getElementById(infoId);
        
        if (infoDiv.classList.contains('show')) {
            infoDiv.classList.remove('show'); // Remove a classe show para esconder
            setTimeout(() => {
                infoDiv.style.display = 'none'; // Esconde a div após a animação
            }, 500); // Espera a duração da animação antes de esconder
        } else {
            infoDiv.style.display = 'block'; // Exibe a div
            setTimeout(() => {
                infoDiv.classList.add('show'); // Adiciona a classe show para animar
            }, 10); // Um pequeno atraso para permitir a exibição
        }
    }

    function toggleInfo(infoId) {
        // Seleciona todas as divs com a classe 'info'
        const infoDivs = document.querySelectorAll('.info');
        
        // Fecha todas as divs
        infoDivs.forEach(div => {
            if (div.id !== infoId) { // Verifica se não é a div que está sendo clicada
                div.classList.remove('show');
                setTimeout(() => {
                    div.style.display = 'none'; // Esconde a div após a animação
                }, 0);
            }
        });
    
        // Seleciona a div que será aberta
        const infoDiv = document.getElementById(infoId);
        
        if (infoDiv.classList.contains('show')) {
            infoDiv.classList.remove('show'); // Remove a classe show para esconder
            setTimeout(() => {
                infoDiv.style.display = 'none'; // Esconde a div após a animação
            }, 100); // Espera a duração da animação antes de esconder
        } else {
            infoDiv.style.display = 'block'; // Exibe a div
            setTimeout(() => {
                infoDiv.classList.add('show'); // Adiciona a classe show para animar
            }, 10); // Um pequeno atraso para permitir a exibição
        }
    }
    




document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Checa imediatamente ao carregar a página

    // Função para verificar se o elemento está visível na tela
    function isElementVisible(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para verificar e adicionar classe 'animate-visible' quando o elemento entra na tela
    function handleScroll() {
        document.querySelectorAll('.section-title').forEach(title => {
            if (isElementVisible(title)) {
                title.classList.add('animate-visible');
            }
        });

        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (isElementVisible(item)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
});
