
const items = document.querySelectorAll('.animate-on-load')
const container=document.querySelector('.container')
const homeBtn=document.querySelector('.home-btn')
const contactLink=document.getElementById('contact-link')
 

  window.addEventListener('load', () => {
   /*observeSections();*/
    items.forEach(item => {
      item.classList.remove('animate-on-load'); // Reset
      void item.offsetWidth; // Force reflow
      item.classList.add('animate-on-load'); // Reapply
    });
  });


// Observe sections for scroll animations
function observeSections() {
  const sections = document.querySelectorAll("section, .gallery, .info, nav");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // trigger animation
      }
    });
  }, { threshold: 0.3 }); // 30% visible triggers

  sections.forEach(section => observer.observe(section));
}

observeSections();
  
  
  
    const scrollBtn=document.querySelector('.scroll')
    scrollBtn.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })

    observeSections()
