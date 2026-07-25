const homebutton = document.getElementById("home-link")
const aboutbutton = document.getElementById("about-link")
const techbutton = document.getElementById("tech-link")
const stackbutton = document.getElementById("stack-link")
const questsbutton = document.getElementById("quests-link")
const contactbutton = document.getElementById("contact-link")
const viewquestbutton = document.getElementById("view-quests")
const pingmebutton = document.getElementById("ping-me")

const homeSection = document.getElementById("home")
const aboutSection = document.getElementById("about")
const techSection = document.getElementById("tech");
const stackSection = document.getElementById("stack");
const questsSection = document.getElementById("quests")
const contactSection = document.getElementById("contact");

homebutton.addEventListener("click", function(e) {
    e.preventDefault();

    homeSection.scrollIntoView({
        behavior : "smooth"
    });
});
aboutbutton.addEventListener("click", function(e){
    e.preventDefault();

    aboutSection.scrollIntoView({
        behavior : "smooth"
    });
});
techbutton.addEventListener("click", function(e){
    e.preventDefault();

    techSection.scrollIntoView({
        behavior : "smooth"
    });
});

stackbutton.addEventListener("click", function(e){
    e.preventDefault();

    stackSection.scrollIntoView({
        behavior : "smooth"
    });
});
viewquestbutton.addEventListener("click", function(e){
    e.preventDefault();

    questsSection.scrollIntoView({
        behavior : "smooth"
    });
});
questsbutton.addEventListener("click", function(e){
    e.preventDefault();

    questsSection.scrollIntoView({
        behavior : "smooth"
    });
});
pingmebutton.addEventListener("click", function(e){
    e.preventDefault();

    contactSection.scrollIntoView({
        behavior:"smooth"
    });
});
contactbutton.addEventListener("click", function(e){
    e.preventDefault();

    contactSection.scrollIntoView({
        behavior : "smooth"
    });
});
