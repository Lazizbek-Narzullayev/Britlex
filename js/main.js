const menuBtn = document.querySelector("#nav__btn")
const menuBtn1 = document.querySelector("#nav__btn1")
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal__btn")
const navbar = document.querySelector(".navbar")
const header = document.querySelector(".header")
const hero = document.querySelector(".hero")
const addition = document.querySelector(".addition")
const content = document.querySelector(".content")
const contact = document.querySelector(".contact")
const footer = document.querySelector(".footer")
const body = document.querySelector("body");
menuBtn.addEventListener("click", function(){
    modal.style.display = "block"; 
    navbar.style.opacity = "0.5";
    header.style.opacity = "0.5";
    hero.style.opacity = "0.5";
    addition.style.opacity = "0.5";
    content.style.opacity = "0.5";
    contact.style.opacity = "0.5";
    footer.style.opacity = "0.5";
})
menuBtn1.addEventListener("click", function(){
    modal.style.display = "block"; 
    navbar.style.opacity = "0.5";
    header.style.opacity = "0.5";
    hero.style.opacity = "0.5";
    addition.style.opacity = "0.5";
    content.style.opacity = "0.5";
    contact.style.opacity = "0.5";
    footer.style.opacity = "0.5";
})
modalBtn.addEventListener("click", function(){
    modal.style.display = "none";
    navbar.style.opacity = "1";
    header.style.opacity = "1";
    hero.style.opacity = "1";
    addition.style.opacity = "1";
    content.style.opacity = "1";
    contact.style.opacity = "1";
    footer.style.opacity = "1";


})
const homeBtn=document.querySelector("#home")
const skillsBtn=document.querySelector("#skills")
const aboutBtn=document.querySelector("#about")
const pricingBtn=document.querySelector("#pricing")
const contactsBtn=document.querySelector("#contacts")

homeBtn.addEventListener("click", function(){
    modal.style.display="none";
    navbar.style.opacity = "1";
    header.style.opacity = "1";
    hero.style.opacity = "1";
    addition.style.opacity = "1";
    content.style.opacity = "1";
    contact.style.opacity = "1";
    footer.style.opacity = "1";
})
skillsBtn.addEventListener("click", function(){
    modal.style.display="none";
    navbar.style.opacity = "1";
    header.style.opacity = "1";
    hero.style.opacity = "1";
    addition.style.opacity = "1";
    content.style.opacity = "1";
    contact.style.opacity = "1";
    footer.style.opacity = "1";
})
aboutBtn.addEventListener("click", function(){
    modal.style.display="none";
    navbar.style.opacity = "1";
    header.style.opacity = "1";
    hero.style.opacity = "1";
    addition.style.opacity = "1";
    content.style.opacity = "1";
    contact.style.opacity = "1";
    footer.style.opacity = "1";
})
pricingBtn.addEventListener("click", function(){
    modal.style.display="none";
    navbar.style.opacity = "1";
    header.style.opacity = "1";
    hero.style.opacity = "1";
    addition.style.opacity = "1";
    content.style.opacity = "1";
    contact.style.opacity = "1";
    footer.style.opacity = "1";
})
contactsBtn.addEventListener("click", function(){
    modal.style.display="none";
    navbar.style.opacity = "1";
    header.style.opacity = "1";
    hero.style.opacity = "1";
    addition.style.opacity = "1";
    content.style.opacity = "1";
    contact.style.opacity = "1";
    footer.style.opacity = "1";
})