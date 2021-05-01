const images = document.querySelectorAll('.main__img')
const ligthBox = document.getElementById('lightbox')
const ArrayImages = ['Photo.jpg','Photo-1.jpg','Photo-2.jpg','Photo-3.jpg','Photo-4.jpg','Photo-5.jpg']
images.forEach(img=>{
  img.addEventListener('click',()=>ligthBox.classList.add('ligthBox--show'))
})
ligthBox.addEventListener('click',()=>ligthBox.classList.remove('ligthBox--show'))