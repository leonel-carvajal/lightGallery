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

const image = (img) => {
	let actual = parseInt(img.src.substr(-5, 1));
	index = actual;
	Begin();
	ligthBox.classList.add("ligthBox--show");
};
images.forEach((img) => {
	img.addEventListener("click", () => {
		image(img);
	});
});
iconClose.addEventListener("click", () => ligthBox.classList.remove("ligthBox--show"));

miniatures.forEach((miniature) => {
	miniature.addEventListener("click", () => {
		imgligthBox.classList.add('ligthBox__img--change')
		image(miniature);
	});
});

const ChangeImage = (arrow) => {
	if (arrow === "back") {
		index--;
		if (index < 0) {
			index = arrayImages.length - 1;
		}
		Begin();
	} else if (arrow === "forward") {
		index++;
		if (index >= arrayImages.length) {
			index = 0;
		}
		Begin();
	}
};
imgligthBox.addEventListener('animationend',()=>imgligthBox.classList.remove('ligthBox__img--change'))
arrowBack.addEventListener("click", () => {
	imgligthBox.classList.add('ligthBox__img--change')
	ChangeImage("back");
	
});
arrowForward.addEventListener("click", () => {
	imgligthBox.classList.add('ligthBox__img--change')
	ChangeImage("forward");
});

const Begin = () => {
	ligthBoxContainer.children[0].src = `assets/img/${arrayImages[index]}`;
};
window.addEventListener("DOMContentLoaded", Begin);
