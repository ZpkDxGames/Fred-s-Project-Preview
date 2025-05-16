document.addEventListener('DOMContentLoaded', function() {
    const viewNotesButton = document.getElementById('viewNotesButton');
    const creditsLink = document.getElementById('creditsLink');

    // Adiciona a classe fade-in no carregamento inicial
    document.body.classList.add('fade-in');

    function navigateWithTransition(targetUrl) {
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 250); // Tempo da animação (0.25s)
    }

    if (viewNotesButton) {
        viewNotesButton.addEventListener('click', function() {
            navigateWithTransition('notes.html');
        });
    }

    if (creditsLink) {
        creditsLink.addEventListener('click', function(event) {
            event.preventDefault();
            navigateWithTransition('credits.html');
        });
    }

    // Handle return button functionality
    const returnButton = document.getElementById('returnButton');
    if (returnButton) {
        returnButton.addEventListener("click", (event) => {
            event.preventDefault(); // Previne comportamento padrão
            window.location.href = "index.html"; // Redireciona para a página inicial
        });
    }
});

