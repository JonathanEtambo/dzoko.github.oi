window.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slideshow img');
    const news = document.querySelector('.news');
    let currentImageIndex = 0;
    let currentNewsIndex = 0;
    
    // Affiche la première image et la première news
    images[currentImageIndex].style.display = 'block';
    
    setInterval(function() {
        // Cache l'image et la news actuelles
        images[currentImageIndex].style.display = 'none';
        news.style.display = 'none';
        
        // Passe à l'image suivante et à la news suivante
        currentImageIndex = (currentImageIndex + 1) % images.length;
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
        
        // Affiche la nouvelle image et la nouvelle news
        images[currentImageIndex].style.display = 'block';
        news.style.display = 'block';
        news.querySelector('h2').textContent = newsItems[currentNewsIndex].title;
        news.querySelector('p').textContent = newsItems[currentNewsIndex].description;
    }, 5000);
});

// Tableau de news
const newsItems = [
    { title: 'Nouvelle construction terminée', description: 'Nous sommes fiers d\'annoncer la finition de notre dernier projet de construction.' },
    { title: 'Nouveau partenariat avec une entreprise de design', description: 'Nous nous sommes associés à une entreprise de design réputée pour offrir des projets de construction innovants et esthétiques.' },
    { title: 'Expansion de nos services', description: 'Nous avons élargi notre gamme de services pour inclure la rénovation de bâtiments existants.' },
];