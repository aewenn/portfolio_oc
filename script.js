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

    // Scroll Header
    const header = document.querySelector('.header');

    function handleScroll() {
        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json') // Requête pour récupérer le fichier 'projects.json'
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.querySelector('.projects-content'); // Sélectionne le conteneur des projets
            projectsContainer.innerHTML = ''; // Vide le contenu actuel de l'élément

            // Associe les compétences aux icônes correspondantes
            const skillIconMap = {
                "HTML": "bx bxl-html5",
                "CSS": "bx bxl-css3",
                "JavaScript": "bx bxl-javascript",
                "Sass": "bx bxl-sass",
                "React": "bx bxl-react",
                "Redux": "bx bxl-redux",
                "Git": "bx bxl-git",
                "GitHub": "bx bxl-github",
                "Figma": "bx bxl-figma",
                "SEO": "bx bxs-chart",
                "WAVE": "bx bxs-wrench",
                "Google Rich Snippets": "bx bxs-file",
                "Gestion de projet": "bx bxs-briefcase",
                "Veille technique": "bx bxs-bulb",
                "Notion": "bx bxs-file",
                "Trello": "bx bxl-trello",
                "Swagger": "bx bxs-network-chart",
            };

            data.projects.forEach(project => { // On parcourt chaque projet dans les données JSON
                const projectItem = document.createElement('div');
                projectItem.className = 'project-item';

                // On définit le contenu HTML de chaque projet
                projectItem.innerHTML = `
                    <img src="${project.image}" alt="${project.alt}" title="Image du projet ${project.title}">
                    <h3>${project.title}</h3>
                    <div class="project-skills">
                        ${project.skills.map(skill => {
                            const iconClass = skillIconMap[skill] || 'bx bxs-help-circle';
                            return `<span title="${skill}"><i class='${iconClass}'></i></span>`;
                        }).join('')}
                    </div>
                    <p>${project.description.part1}</p>
                    <p>${project.description.part2}</p>
                    <div class="project-links">
                        ${project.links.github ? `<a href="${project.links.github}" target="_blank" title="Lien vers le code du projet ${project.title}" class="social-icon"><span><i class='bx bxl-github'></i></span></a>` : ''}
                        ${project.links.live ? `<a href="${project.links.live}" target="_blank" title="Lien vers le site du projet ${project.title}" class="social-icon"><span><i class='bx bx-link-external'></i></span></a>` : ''}
                        ${project.links.presentation ? `<a href="${project.links.presentation}" target="_blank" title="Lien vers la présentation du projet ${project.title}" class="social-icon" target="_blank"><span><i class='bx bx-slideshow'></i></span></a>` : ''}
                        ${project.links.report ? `<a href="${project.links.report}" target="_blank" title="Lien vers le rapport d'optimisation pour le projet ${project.title}" class="social-icon" target="_blank"><span><i class='bx bxs-file-pdf'></i></span></a>` : ''}
                    </div>
                `;
                // On ajoute le projet au conteneur de projets
                projectsContainer.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});
