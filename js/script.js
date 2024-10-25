const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Corrigido o nome da classe
    navbar.classList.toggle('active');
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });

    const header = document.querySelector('header'); // "documento" corrigido para "document"
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when clicking on a section */
    menuIcon.classList.remove('bx-x'); // Corrigido para "bx-x"
    navbar.classList.remove('active');
};
/*-----------ScrollReveal--------*/
ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200


});
ScrollReveal().reveal('.home-content, heading', { origin: "top" });
ScrollReveal().reveal('.home-img, services-content, .portfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, about-img', { origin: "left" });
ScrollReveal().reveal('.home-content h1, about-img', { origin: "right" });

/*--Typed JS*/

/*--Typed JS*/

const typed = new Typed(".multiple-text", {
    strings: ["Front-End Developer", "Desenvolvedora Wordpress", "Analista de SEO", " Gestora de trafego Meta-ADS"," Gestora de trafego Google ADS"],
    typeSpeed: 100,
    backSpeed: 100, // "BackSpeed" corrigido para "backSpeed"
    backDelay: 1000, // "Backdelay" corrigido para "backDelay"
    loop: true
});
const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Janice_Web Designer.pdf'; 
  link.download = 'Janice_Web Designer.pdf'; 
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}); // funcao para baixar o curriculo 


