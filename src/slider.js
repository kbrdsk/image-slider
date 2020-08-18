import "./style.css";

const carouselContainer = document.createElement("div");
carouselContainer.classList.add("carousel-container");
const carouselPositions = ["dblPrev", "prev", "view", "next", "dblNext"];
const carouselWindows = Array(5).fill(null).map(createCarouselWindow);

const advanceButton = document.createElement("div");
advanceButton.classList.add("advance-button");
advanceButton.classList.add("nav-button");
advanceButton.addEventListener("click", () => {
	advanceCarousel();
	updateQuickNavHighlight();
});
const regressButton = document.createElement("div");
regressButton.classList.add("regress-button");
regressButton.classList.add("nav-button");
regressButton.addEventListener("click", () => {
	regressCarousel();
	updateQuickNavHighlight();
});

let viewIndex = 2;

const images = [];

function importImages(r) {
	r.keys().forEach((key) =>
		images.push("url(." + r(key).default.match(/(?<=^\/dist).+/)[0] + ")")
	);
}

importImages(require.context("./images", false, /\.(png|jpe?g|svg)$/));

const quickNavContainer = document.createElement("div");
quickNavContainer.classList.add("quick-nav-container");
for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
	const quickNavButton = document.createElement("div");
	quickNavButton.classList.add("quick-nav-button");
	quickNavButton.addEventListener("click", () => {
		jumpToIndex(imageIndex);
		updateQuickNavHighlight();
	});
	quickNavContainer.appendChild(quickNavButton);
}

carouselContainer.appendChild(quickNavContainer);
updateQuickNavHighlight();

function updateQuickNavHighlight() {
	const quickNavIndex = mod(viewIndex - 2, images.length);
	const quickNavButtons = Array.from(
		quickNavContainer.getElementsByClassName("quick-nav-button")
	);
	quickNavButtons.map((button, index) => {
		if (index === quickNavIndex) button.setAttribute("highlighted", true);
		else button.setAttribute("highlighted", false);
	});
}

function jumpToIndex(imageIndex) {
	viewIndex = imageIndex + 2;
	Array.from(carouselContainer.getElementsByClassName("carousel-window")).map(
		(carouselWindow) => {
			const index = carouselPositions.indexOf(
				carouselWindow.getAttribute("carousel-position")
			);
			const carouselIndex = mod(imageIndex + index, images.length);
			carouselWindow.style.backgroundImage = images[carouselIndex];
		}
	);
}

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
