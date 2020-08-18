import "./style.css";

const carouselContainer = document.createElement("div");
carouselContainer.classList.add("carousel-container");
const carouselPositions = ["dblPrev", "prev", "view", "next", "dblNext"];
const carouselWindows = Array(5).fill(null).map(createCarouselWindow);
const advanceButton = document.createElement("div");
advanceButton.classList.add("advance-button");
advanceButton.classList.add("nav-button");
advanceButton.addEventListener("click", advanceCarousel);
const regressButton = document.createElement("div");
regressButton.classList.add("regress-button");
regressButton.classList.add("nav-button");
regressButton.addEventListener("click", regressCarousel);
let viewIndex = 2;

const images = [];

function importImages(r) {
	r.keys().forEach((key) =>
		images.push("url(." + r(key).default.match(/(?<=^\/dist).+/)[0] + ")")
	);
}

importImages(require.context("./images", false, /\.(png|jpe?g|svg)$/));
console.log(images);

carouselWindows.map((carouselWindow, index) => {
	carouselContainer.appendChild(carouselWindow);
	carouselWindow.setAttribute("carousel-position", carouselPositions[index]);
	carouselWindow.style.backgroundImage = images[index];
});
document.body.appendChild(carouselContainer);
carouselContainer.appendChild(regressButton);
carouselContainer.appendChild(advanceButton);

function createCarouselWindow() {
	const carouselWindow = document.createElement("div");
	carouselWindow.classList.add("carousel-window");
	return carouselWindow;
}

function advanceCarousel() {
	viewIndex = mod(viewIndex + 1, images.length);
	carouselWindows.map(advanceWindowPosition);
}

function regressCarousel() {
	viewIndex = mod(viewIndex - 1, images.length);
	carouselWindows.map(regressWindowPosition);
}

function regressWindowPosition(carouselWindow) {
	let positionIndex =
		carouselPositions.indexOf(
			carouselWindow.getAttribute("carousel-position")
		) + 1;
	if (positionIndex > 4) {
		positionIndex = 0;
		updateBackground(carouselWindow, "advancing");
	}
	carouselWindow.setAttribute(
		"carousel-position",
		carouselPositions[positionIndex]
	);
}

function advanceWindowPosition(carouselWindow) {
	let positionIndex =
		carouselPositions.indexOf(
			carouselWindow.getAttribute("carousel-position")
		) - 1;
	if (positionIndex < 0) {
		positionIndex = 4;
		updateBackground(carouselWindow, "regressing");
	}
	carouselWindow.setAttribute(
		"carousel-position",
		carouselPositions[positionIndex]
	);
}

function updateBackground(carouselWindow, direction) {
	const imageIndex =
		direction === "advancing"
			? mod(viewIndex - 2, images.length)
			: mod(viewIndex + 2, images.length);
	carouselWindow.style.backgroundImage = images[imageIndex];
}

function mod(n, m) {
	return ((n % m) + m) % m;
}
