// set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// smooth anchor scrolling (offset for fixed header)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const target = document.querySelector(href);
      const offset = 76; // header height
      if(target){
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({top, behavior: 'smooth'});
      }
    }
  });
});

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('inview');
  });
},{threshold: 0.12});

document.querySelectorAll('.section, .project-card, .skill-card, .timeline-item, .cert-card').forEach(el => io.observe(el));
// new blockkk 
 