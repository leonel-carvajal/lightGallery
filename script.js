const images = document.querySelectorAll(".main__img");
const ligthBoxContainer = document.getElementById("lightbox-container");
const ligthBox = document.querySelector(".ligthBox");
const arrayImages = [
	"Photo-0.jpg",
	"Photo-1.jpg",
	"Photo-2.jpg",
	"Photo-3.jpg",
	"Photo-4.jpg",
	"Photo-5.jpg",
];
const arrowBack = document.querySelector(".arrow__back");
const arrowForward = document.querySelector(".arrow__forward");
const iconClose = document.getElementById("close");
const miniatures = document.querySelectorAll(".miniatures__img");
const imgligthBox = document.querySelector('.ligthBox__img')
let index = 0;

const Begin = () =>  ligthBoxContainer.children[0].src = `assets/img/${arrayImages[index]}`;
imgligthBox.addEventListener('animationend',()=>imgligthBox.classList.remove('ligthBox__img--change'));

const Actualimage = (img) => {
	let actual = parseInt(img.src.substr(-5, 1));
	index = actual;
	Begin();
	ligthBox.classList.add("ligthBox--show");
};

const ChangeImage = (arrow) => {
	if (arrow === "back") {
		index--;
		if (index < 0) {
			index = arrayImages.length - 1;
		}
		miniatures[index].classList.add('miniatures__img--active')
		Begin();
	} else if (arrow === "forward") {
		index++;
		if (index >= arrayImages.length) {
			index = 0;
		}
		miniatures[index].classList.add('miniatures__img--active')
		Begin();
	}
	
};


images.forEach((img) => {
	img.addEventListener("click", () => {
		miniatures[parseInt(img.src.substr(-5,1))].classList.add('miniatures__img--active')
		Actualimage(img);
	});
});
iconClose.addEventListener("click", () => {
	ligthBox.classList.remove("ligthBox--show")
	miniatures.forEach(item=>item.classList.remove('miniatures__img--active'))
});

miniatures.forEach((miniature) => {
	miniature.addEventListener("click", () => {
		miniatures.forEach(item=>item.classList.remove('miniatures__img--active'))
		imgligthBox.classList.add('ligthBox__img--change')
		miniature.classList.add('miniatures__img--active')
		Actualimage(miniature);
	});
});




arrowBack.addEventListener("click", () => {
	miniatures[index].classList.remove('miniatures__img--active')
	imgligthBox.classList.add('ligthBox__img--change')
	ChangeImage("back");
});
arrowForward.addEventListener("click", () => {
	miniatures[index].classList.remove('miniatures__img--active')
	imgligthBox.classList.add('ligthBox__img--change')
	ChangeImage("forward");
});

