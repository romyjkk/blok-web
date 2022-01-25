// JavaScript Document

/* navigatie balk wishlist hartje */

/* laten zien */

var wishlistOne = document.querySelector("header nav:first-of-type ul:first-of-type li:nth-of-type(3) img");
var wishlistTwo = document.querySelector("header nav:first-of-type ul:nth-of-type(2) li img");

function showTwo() {
    wishlistTwo.classList.add("show");
}

wishlistOne.addEventListener("click", showTwo);

/* weghalen */

function hideTwo() {
    wishlistTwo.classList.remove("show");
}

wishlistTwo.addEventListener("click", hideTwo);

/* hamburger menu */

/* uitklappen */

var buttonHamburgerMenu = document.querySelector("header nav:first-of-type ul:first-of-type li:first-of-type button");
var hamburgerMenu = document.querySelector("header nav:first-of-type ul:nth-of-type(3)");

function showMenu() {
    hamburgerMenu.classList.add("menu");
}

buttonHamburgerMenu.addEventListener("click", showMenu);

/* inklappen */

var sluitHamburgerMenu = document.querySelector("header nav:first-of-type ul:nth-of-type(3) li:first-of-type button");

function hideMenu() {
    hamburgerMenu.classList.remove("menu");
}

sluitHamburgerMenu.addEventListener("click", hideMenu);

/* music!!!! :)))))) */

/* muziek wanneer je over Rammstein schoenen hovert */

var playRammstein1 = document.querySelector("main section:nth-of-type(3) a:first-of-type article ul li:nth-of-type(2) img");
var engel = new Audio("sounds/engel.mp3");

playRammstein1.addEventListener('mouseover', function() {
    engel.play();
})

playRammstein1.addEventListener('mouseleave', function() {
    engel.pause();
    engel.currentTime = 0;
})

/* n.2 */

var playRammstein2 = document.querySelector("main section:nth-of-type(3) a:first-of-type article ul li:nth-of-type(3) img");
var deutschland = new Audio("sounds/deutschland.mp3");

playRammstein2.addEventListener('mouseover', function() {
    deutschland.play();
})

playRammstein2.addEventListener('mouseleave', function() {
    deutschland.pause();
    deutschland.currentTime = 0;
})

/* muziek wanneer je over SLipknot shirt hovert */

var playSlipknot = document.querySelector("main section:nth-of-type(3) a:last-of-type article ul li:nth-of-type(3) img");
var vermillion = new Audio("sounds/vermillion.mp3");

playSlipknot.addEventListener('mouseover', function() {
    vermillion.play();
})

playSlipknot.addEventListener('mouseleave', function() {
    vermillion.pause();
    vermillion.currentTime = 0;
})

/* muziek wanneer je over Slayer shirt hovert */

var playSlayer = document.querySelector("main section:nth-of-type(3) a:last-of-type article ul li:nth-of-type(2) img");
var rainingBlood = new Audio("sounds/rainingblood.mp3");

playSlayer.addEventListener('mouseover', function() {
    rainingBlood.play();
})

playSlayer.addEventListener('mouseleave', function() {
    rainingBlood.pause();
    rainingBlood.currentTime = 0;
})

/* muziek wanneer je over Korn shirt hovert */

var playKorn = document.querySelector("main section:nth-of-type(5) a:nth-of-type(2) article ul li:first-of-type img");
var freakOnLeash = new Audio("sounds/freakonaleash.mp3");

playKorn.addEventListener('mouseover', function() {
    freakOnLeash.play();
})

playKorn.addEventListener('mouseleave', function() {
    freakOnLeash.pause();
    freakOnLeash.currentTime = 0;
})

/* muziek wanneer je over Iron Maiden x Marvel hovert */

var playIronMaiden = document.querySelector("main section:nth-of-type(7) a:first-of-type article");
var fearOfTheDark = new Audio("sounds/fearofthedark.mp3");

playIronMaiden.addEventListener('mouseover', function() {
    fearOfTheDark.play();
})

playIronMaiden.addEventListener('mouseleave', function() {
    fearOfTheDark.pause();
    fearOfTheDark.currentTime = 0;
})

/* muziek wanneer je over harry potter hovert */

var playHarryPotter = document.querySelector("main section:nth-of-type(7) a:nth-of-type(2) article");
var hedwigsTheme = new Audio("sounds/hedwigstheme.mp3");

playHarryPotter.addEventListener('mouseover', function() {
    hedwigsTheme.play();
})

playHarryPotter.addEventListener('mouseleave', function() {
    hedwigsTheme.pause();
    hedwigsTheme.currentTime = 0;
})
