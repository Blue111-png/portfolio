const items = document.querySelectorAll('.animate-on-load')


  window.addEventListener('load', () => {
   /*observeSections();*/
    items.forEach(item => {
      item.classList.remove('animate-on-load'); // Reset
      void item.offsetWidth; // Force reflow
      item.classList.add('animate-on-load'); // Reapply
    });
  });
  
     const scrollBtn = document.querySelector('.scroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });} 
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
const text = `I’ve always believed that creativity is less about talent and more about curiosity. My journey started with a simple spark: wanting to turn everyday ideas into something people could feel, whether through design, words, or experiences. Growing up, I was the person who asked why a little too often—why things looked the way they did, why people connected with certain colors or stories, why small details mattered. That curiosity pushed me to experiment, to learn, and to build. Over time, it became clear that my passion wasn’t just about creating—it was about helping others see the world differently.`;

let index = 0;
const speed = 5; // typing speed in ms

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;