document.addEventListener("DOMContentLoaded", function () {
    // Animação de fade-in na seção principal
    const mainSections = document.querySelectorAll("main section");
    mainSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            section.style.opacity = 1;
        }, 300);
    });

    // Mudança de cor suave nos links do menu ao passar o mouse
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.style.transition = "color 0.5s ease-in-out";
        link.addEventListener("mouseover", function () {
            this.style.color = "#ff6f61"; // Tom de vermelho alaranjado
        });
        link.addEventListener("mouseout", function () {
            this.style.color = ""; // Retorna à cor original
        });
    });

    // Alerta ao clicar no link "Contato" com redirecionamento suave
    const contatoLink = document.querySelector("nav a[href='contato.html']");
    if (contatoLink) {
        contatoLink.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Você será redirecionado para a página de contato!");
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // Espera 0.5 segundos antes de redirecionar
        });
    }

    // Funcionalidade do botão "Saiba mais sobre nossa missão e valores"
    const missaoValoresButton = document.querySelector("#missao-valores main button");
    if (missaoValoresButton) {
        missaoValoresButton.addEventListener("click", function () {
            alert("Nossa missão e valores são fundamentais para guiar nossas ações e decisões, garantindo um ambiente de trabalho saudável e produtivo.");
        });
    }

    // Funcionalidade do botão "Saiba mais sobre nossos serviços"
    const servicosButton = document.querySelector("#servico main button");
    if (servicosButton) {
        servicosButton.addEventListener("click", function () {
            alert("Oferecemos uma variedade de serviços personalizados para atender às necessidades da sua empresa. Entre em contato com nossa equipe para maiores informações!");
        });
    }

    // Funcionalidade do botão "Saiba Mais" na página "Sobre Nós"
    const sobreButton = document.querySelector("#sobre main button");
    if (sobreButton) {
        sobreButton.addEventListener("click", function () {
            alert("Nós somos uma equipe apaixonada pelo que fazemos e dedicada a impulsionar o sucesso do seu RH!");
        });
    }

    // Funcionalidade do botão "Conclusão" na página "Vantagens"
    const vantagensButton = document.querySelector("#vantagens main button");
    if (vantagensButton) {
        vantagensButton.addEventListener("click", function () {
            alert("A capacitação de profissionais de RH em programação transforma a função de uma abordagem meramente administrativa para uma função estratégica e orientada por dados.");
        });
    }

    // Função para enviar mensagem no formulário de contato (apenas simulação)
    const contatoForm = document.querySelector("#formulario-contato form");
    if (contatoForm) {
        contatoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            this.reset(); // Limpa o formulário
        });
    }
});