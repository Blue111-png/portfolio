
    const scrollBtn=document.querySelector('.scroll')
    scrollBtn.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })