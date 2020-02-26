let submitBtn = document.getElementById('submit-btn');
let container = document.querySelector('.container');
let contactLink = document.querySelector('.contact-nav');
let closeBtn = document.querySelector('.closeBtn');
let projectsDiv = document.getElementById('projects');
let contactDiv = document.querySelector('.contact-section');


submitBtn.addEventListener('click', ()=>{
    container.style.display = "none";
    projectsDiv.style.opacity = "";
    contactDiv.style.opacity = "";
});
closeBtn.addEventListener('click', ()=>{
    container.style.display = "none";
    projectsDiv.style.opacity = "";
    contactDiv.style.opacity = "";
});
contactLink.addEventListener('click', openContact());


function openContact(){
    container.style.display = "block";
    projectsDiv.style.opacity = "0.25";
    contactDiv.style.opacity = "0.25";
}

function onStart(){
    container.style.display="none";
    projectsDiv.style.opacity = "";
    contactDiv.style.opacity = "";
}