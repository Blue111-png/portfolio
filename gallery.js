let closebtn=document.getElementById('close-btn')
let lightbox=document.querySelector('.lightbox')
let galleryItem = document.querySelectorAll('.gallery img');
let lightboximg=document.getElementById('lightbox-image')


function thumbnail(imageElement){
  lightbox.style.display='flex'
  lightboximg.src = imageElement.dataset.large || imageElement.src;

  lightboximg.setAttribute('class', imageElement.className.replace("small", "big"))
  
}
Array.from(galleryItem).forEach(img => {
  img.addEventListener('click', () => {
    thumbnail(img);
  });
});

closebtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

    const scrollBtn=document.querySelector('.scroll')
    scrollBtn.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })