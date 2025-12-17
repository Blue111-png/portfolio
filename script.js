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

  const aboutBtn=document.querySelector('.btn-about')
  aboutBtn.addEventListener('click',()=>{
document.getElementById("contact-link").style.display = "none";

container.innerHTML=` <nav class='navigate'>
        
            <p class="list1 animate-on-load">
            <button class='home-btn anton' onclick="location.href='index.html'">Home</button>
            
            <p class="list2 animate-on-load">
            <button class="btn anton">About&#10003</button></p>
            <p class="list3 animate-on-load">
            <button class='contact-btn anton'>Contact</button></p>
        <p class="list3 animate-on-load">
            <button class='contact-btn anton' onclick="location.href='project.html'">Projects</button></p>
    </nav>
    <div class="info">

    <section class='contact-section'>
    
    </section>

    <section class="scroll-animate">
    <p>Hi I'm blue again😁
    <br>
    I am a passionate Full-Stack Developer
     with strong expertise in building
      functional and visually appealing websites.
       With mastery of HTML and CSS, I create clean,
        responsive, and user-friendly interfaces. On the backend,
         I work confidently with JavaScript and Python,
          developing robust server-side
     solutions that ensure performance and reliability.
    </p>
    <p>I’ve always believed that creativity is less about talent and more about curiosity. My journey started with a simple spark: wanting to turn everyday ideas into something people could feel, whether through design, words, or experiences.
Growing up, I was the person who asked why a little too often—why things looked the way they did, why people connected with certain colors or stories, why small details mattered. That curiosity pushed me to experiment, to learn, and to build. Over time, it became clear that my passion wasn’t just about creating—it was about helping others see the world differently.
Today, I channel that energy into projects that blend imagination with purpose. Whether it’s crafting visuals, writing stories, or solving problems, my goal is always the same: to make something meaningful that leaves a lasting impression.
</p>
    </section>
   

    <section class="important scroll-animate">
      <h1 class="headings">MY SKILLS</h1>

<h3>Frontend Development/Backend</h3>
  <ol>
    <li>React.js</li>
    <li>JavaScript (ES6+)</li>
    <li>Python</li>
    <li>HTML5</li>
    <li>CSS3</li>
  </ol>

  <h3>Database Management</h3>
  <ul>
    <li>Relational Databases (MySQL, PostgreSQL, SQL Server)</li>
  </ul>

    </section>
    
    <section id="location" class="scroll-animate">
  <h2>Location</h2>
  <p>Buea, Cameroon</p>
  <p>Currently based in Buea, Cameroon — delivering modern web solutions with a global perspective.</p>

  <!-- Embedded Google Map -->
  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.646785402073!2d9.241!3d4.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061328f3f0b5b4f%3A0x7c7f0f3e6f7b9d0!2sBuea%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1700000000000"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section> 

    </div>
    <button class='scroll'>↑</button>
   `

   //contact side
   const contactSection=document.querySelector('.contact-section')
const contactBtn=document.querySelector('.contact-btn')


//  Auto-open contact form if requested
if (window.openContact) {
  setTimeout(() => {
    contactBtn.click();
    window.openContact = false;
  }, 0);
}

     const scrollBtn = document.querySelector('.scroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });} 


let contactOpen=false;

contactBtn.addEventListener('click',()=>{
  
if(!contactOpen){
contactSection.innerHTML=`<form id="contactForm" class="contact-form" action="https://formspree.io/f/mdkqpnjg" method="POST">

  <h2>Contact Me</h2>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
<br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for='phone' >Phone:</label>
  <input type='text' id='number' name='phone' required/>
<br>
  <label for="message">Message:<br></label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button type="submit">Send</button>
</form>
<br>
<p>OR</p>
<br>
 <div class="contact-card">
    <h2>Contact Me</h2>
    <p><strong>Address:</strong> Buea, Malingo Street</p>
    <p><strong>Email:</strong> <a href="mailto:my email">Noegl3609@gmail.com</a></p>
    <p><strong>Phone:</strong> 650972593</p>
  </div>

`
 contactBtn.innerHTML = 'Contact&#10003';
contactOpen=true;



}else{
  contactSection.innerHTML=''
  contactBtn.innerHTML='Contact'
  contactOpen=false;
}
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); //  stops page refresh

  const formData = new FormData(form);

  //  Send to Formspree manually
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }

});

})
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
  
  })
  //about event end
  //gallery event start
const galleryBtn=document.querySelector('.gallery-btn')

galleryBtn.addEventListener('click',()=>{
  container.innerHTML=`<nav class='navigate'>
   <p class="list1 animate-on-load">
            <button onclick="location.href='index.html'" class="anton">Home</button></p>
            <p class="list4 animate-on-load"><button class="btn anton">Gallery&#10003</button></p>
        </nav>
        <h1 class="headings">Blue Cat Gallery</h1>
        <div class="gallery">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" loading="lazy">
      <img src="images/blueinorange.jpg" loading="lazy">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg" loading="lazy">
      <img src="images/bluefacecard.jpg" loading="lazy">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg" loading="lazy">
      <img src="images/blue.jpg" loading="lazy">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg" loading="lazy">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg" loading="lazy">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg" loading="lazy">
    
    </div>
    <button class='scroll'>↑</button>`
    const scrollBtn=document.querySelector('.scroll')
    scrollBtn.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })

    observeSections()
})

contactLink.addEventListener('click', () => {
  window.openContact = true;   // tell About page to open contact
  aboutBtn.click();            // load About page dynamically
});