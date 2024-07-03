// Modale

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navModal = document.getElementById('nav-modal');
    const closeModal = document.querySelector('.nav-modal .close');
    const modalLinks = document.querySelectorAll('.nav-modal-content a');

    // Ouverture de la modale au clic sur l'icône du menu
    menuIcon.addEventListener('click', () => {
        navModal.classList.add('active');
    });

    // Fermeture de la modale au clic sur le bouton de fermeture
    closeModal.addEventListener('click', () => {
        navModal.classList.remove('active');
    });

    // Fermeture de la modale et redirection au clic sur un lien dans la modale
    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navModal.classList.remove('active');

            // Récupération de l'ancre du lien et défilement vers la section correspondante
            const targetId = link.getAttribute('href').substring(1); // On récupère l'id cible sans le #
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Défilement en douceur vers la section
            }
        });
    });

    // Fermeture de la modale au clic en dehors de celle-ci
    window.addEventListener('click', (e) => {
        if (!navModal.contains(e.target) && e.target !== menuIcon) {
            navModal.classList.remove('active');
        }
    });
});

// Scroll Header
const header = document.querySelector('.header');

// Vérification de la position de scroll et ajout de la classe si nécessaire
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

window.addEventListener('scroll', handleScroll);


