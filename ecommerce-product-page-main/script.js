// overlay

const heroImage = document.querySelectorAll(".hero-image")[4];

heroImage.addEventListener("click", function () {
	document.querySelector(".overlay").style.display = "block";
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function () {
	document.querySelector(".overlay").style.display = "none";
});

// carousel

const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const secondaryImages = document.querySelectorAll(
	".carousel + .secondary-images img"
);

document
	.getElementById("carousel-button-next")
	.addEventListener("click", moveToNextSlide);
document
	.getElementById("carousel-button-prev")
	.addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
	for (let slide of slides) {
		slide.classList.remove("carousel-item-visible");
	}
	for (let secondaryImage of secondaryImages) {
		secondaryImage.classList.remove("carousel-border");
	}
}

function moveToNextSlide() {
	console.log("thisis working");
	hideAllSlides();

	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}

	slides[slidePosition].classList.add("carousel-item-visible");
	secondaryImages[slidePosition].classList.add("carousel-border");
}

function moveToPrevSlide() {
	hideAllSlides();

	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}

	slides[slidePosition].classList.add("carousel-item-visible");
	secondaryImages[slidePosition].classList.add("carousel-border");
}

// mobile navigation

const menu = document.querySelector(".mobile-nav-menu");
const menuClose = document.querySelector(".mobile-nav-menu-close");
const navigation = document.querySelector("nav ul");

menu.addEventListener("click", function () {
	menu.style.display = "none";
	menuClose.style.display = "block";
	navigation.classList.add("mobile-nav");
});

menuClose.addEventListener("click", function () {
	menuClose.style.display = "none";
	menu.style.display = "block";
	navigation.classList.remove("mobile-nav");
});

// Add to cart

const remove = document.querySelector(".remove");
const add = document.querySelector(".add");
const addToCart = document.querySelector(".add-to-cart");
let quantity = document.querySelector(".quantity");

let items = 0;

add.addEventListener("click", function () {
	items++;
	quantity.textContent = items;
});

remove.addEventListener("click", function () {
	if (items != 0) {
		items--;
		quantity.textContent = items;
	}
});

addToCart.addEventListener("click", function () {
	items++;
	quantity.textContent = items;
});

// for making the secondary image come on top by clicking on it
// not working
const subImages = document.querySelectorAll("main .secondary-images img");
const mainImage = document.querySelector("main .hero-image img");

function hideAllBorder() {
	for (let subImage of subImages) {
		subImage.classList.remove("sub-images-border");
	}
}
const tinyImgAddClickEven = (img, i) => {
	hideAllBorder();
	console.log("testing");
	img.classList.add("sub-images-border");

	mainImage.src = `images/image-product-${i}.jpg`;
};
subImages[0].addEventListener(
	"click",
	tinyImgAddClickEven.bind(this, subImages[0], 1)
);
subImages[1].addEventListener(
	"click",
	tinyImgAddClickEven.bind(this, subImages[1], 2)
);
subImages[2].addEventListener(
	"click",
	tinyImgAddClickEven.bind(this, subImages[2], 3)
);
subImages[3].addEventListener(
	"click",
	tinyImgAddClickEven.bind(this, subImages[3], 4)
);

// add to cart feature

let cart = document.querySelector(".profile .cart");
let cartContainer = document.querySelector(".cart-container");
let cartItems = document.querySelector(".profile .cart-items");
cartContainer.style.display = "none";

cart.addEventListener("click", function () {
	if (cartContainer.style.display === "none") {
		cartContainer.style.display = "block";

		cartContainer.focus();
		cartContainer.addEventListener("focusin", () => {
			console.log("focus out ");
		});
		console.log("display");
		let amount = 125 * items;
		if (items === 0) {
			cartItems.innerHTML = `
            <p class="cart-empty">Your cart is empty</p>
            `;
		} else {
			cartItems.innerHTML = `
                <img src="images/image-product-1-thumbnail.jpg">
                <div class="cart-content">
                    <p class="cart-description">Fall limited edition sneakers</p>
                    <p class="cart-amount">$125 x ${items} <span class="bold">$${amount}.00</span></p>
                </div>
                <img src="images/icon-delete.svg">
            `;
			let checkoutBtn = document.createElement("button");
			checkoutBtn.textContent = "Checkout";
			cartContainer.appendChild(checkoutBtn);
		}
	} else {
		cartContainer.style.display = "none";
	}
});
