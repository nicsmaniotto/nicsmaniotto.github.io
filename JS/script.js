const explanationTemplate = '<a class="dot-container"><img class="dot"/></a><div class="explanation"><div class="title-container"><div class="title"></div><div class="subtitle"></div></div><div class="description"></div></div><div class="skills reduced"></div>';

const timelineSteps = [
    {
        img: "./IMGS/tarocchi.jpg",
        link: "https://smanio.itch.io/demon-in-me",
        skills: ["UE5", "Blueprints"],
        title: "Demon in me",
        date: "jul 2024",
        txt: "UE5 school open-map project: the goal of the game is to defeat demons you encounter along the path while collecting different cards that acts as weapons.",
        long: "Demon in me is a school project made in Unreal Engine 5 through the use of blueprints. <br> In this project we approached the potentiality of the engine and created an open-map with the loading/unloading of the levels with the level streaming system. The protagonist can make use of different weapons which interacts with the enemies in several ways (i.e. wind knockback, fire burn, enemies becoming friends). ",
        did: "<li>Level loading/unloading system</li><li>Enemies AI</li><li>Inventory system</li><li>Save system</li><li>UI</li><li>Consumables</li>",
        screens: ["./IMGS/tarocchi.jpg", "./IMGS/pushy.png", "./IMGS/deadc.png", "./IMGS/kidds.png"]
    },
    {
        img: "./IMGS/pushy.png",
        link: "https://smanio.itch.io/pushy-cat",
        skills: ["Unity", "C#"],
        title: "Pushy Cat",
        date: "nov 2023",
        txt: "Mobile school project where I implemented the main core of the game mechanics.<br>(Also made the soundtrack :-P)",
        long: "",
        did: "",
        screens: [""]
    },
    {
        img: "./IMGS/deadc.png",
        link: "https://smanio.itch.io/dead-cat-bounce",
        skills: ["Unity", "C#"],
        title: "Dead Cat Bounce",
        date: "jun 2023",
        txt: "Implemented several rooms and power-ups of this soft rogue-like project.",
        long: "",
        did: "",
        screens: [""]
    },
    {
        img: "./IMGS/kidds.png",
        link: "https://smanio.itch.io/kidds-treasure",
        skills: ["Unity", "C#"],
        title: "Kidd's Treasure",
        date: "may 2023",
        txt: "Worked to create the core mechanics of this delivery narrative game.",
        long: "",
        did: "",
        screens: [""]
    },
    {
        img: "./IMGS/dontclick.png",
        link: "https://smanio.itch.io/dont-click-me-or-else",
        skills: ["Unity", "C#"],
        title: "Don't Click Me Or Else...",
        date: "apr 2023",
        txt: "One week jam-like project. Solo-programmer experience.",
        long: "",
        did: "",
        screens: [""]
    },
    {
        img: "./IMGS/tcrossing.png",
        link: "https://smanio.itch.io/tomato-crossing",
        skills: ["Unity", "C#"],
        title: "Tomato Crossing",
        date: "feb 2023",
        txt: "Worked to create the procedural experience and gameplay of a crossy road-like game.",
        long: "",
        did: "",
        screens: [""]
    },
    {
        img: "./IMGS/eh.png",
        link: "https://www.eventhorizonschool.com/",
        skills: [],
        title: "Event Horizon School",
        date: "oct 2021 - present",
        txt: "Years of education of Game Programming at Event Horizon School in Padua.",
        long: "",
        did: "",
        screens: [""]
    },
    {
        img: "./IMGS/cfoscari.png",
        link: "https://www.unive.it/",
        skills: [],
        title: "Ca' Foscari University",
        date: "2014 - 2021",
        txt: "Years of education at Ca' Foscari University: started with the highly beloved japanese culture focused bachelor degree ended with graduation. Moved on with a data-science bachelor degree.<br> <a class='link' href='./IMGS/eh.png' target='_blank' download>IT Thesis</>",
        long: "",
        did: "",
        screens: [""]
    },
]
let isOpening = false;
let bodyContainer = document.getElementById("body-container");
let bg = document.getElementById("bg");

let container = document.getElementById("timeline");
let focusContainer = document.getElementById("focusContainer");

for(let i = 0; i < timelineSteps.length; i++){

    let elem = document.createElement("a");

    elem.onclick = function(){
        focusContainer.classList.replace("hidden", "shown");

        focusContainer.focus();

        isOpening = true;

        fillFocus(i);

        setTimeout(function(){
            isOpening = false;

            focusContainer.style.opacity = 1;

            document.body.style.overflow = "clip";

            bg.style.zIndex = 1;
            bg.style.background = "#00000045";

            bodyContainer.style.filter = "blur(3px)"

        }, 100);
    }

    elem.className = "explanation-container";
    elem.innerHTML = explanationTemplate;

    let dotContainers = elem.getElementsByClassName("dot-container");

    if(dotContainers.length > 0){
        dotContainers[0].onclick = elem.onclick;
    }

    let dots = elem.getElementsByClassName("dot");

    if(dots.length > 0){
        dots[0].src = timelineSteps[i].img;
    }

    let titles = elem.getElementsByClassName("title");

    if(titles.length > 0){
        titles[0].innerText = timelineSteps[i].title;
    }

    let subtitles = elem.getElementsByClassName("subtitle");

    if(subtitles.length > 0){
        subtitles[0].innerText = timelineSteps[i].date;
    }

    let descriptions = elem.getElementsByClassName("description");

    if(descriptions.length > 0){
        descriptions[0].innerHTML = timelineSteps[i].txt;
    }

    let skillsContainers = elem.getElementsByClassName("skills");

    if(skillsContainers.length > 0){
        skillsContainers[0].style.height = "200px !important";

        timelineSteps[i].skills.forEach(function(e){
            let skill = document.createElement("div");
            skill.className = "skill reduced";
            skill.innerText = e;

            skillsContainers[0].appendChild(skill);
        })
    }

    container.appendChild(elem);
}

let expContainers = container.getElementsByClassName("explanation-container");

function closeFocus(){
    document.body.style.overflow = "visible";
    bodyContainer.style.filter = "blur(0px)"
    bg.style.zIndex = -1;
    bg.style.background = "#00000000";

    focusContainer.style.opacity = 0;
    
    setTimeout(function(){
            focusContainer.classList.replace("shown", "hidden");

        }, 300);
}

let currentIndex = 0;
let slides;

function fillFocus(i){
    let obj = timelineSteps[i];

    let title = document.getElementById("focusTitle");
    title.innerText = obj.title.toUpperCase();

    let list = focusContainer.getElementsByTagName("div");

    for(let i = 0; i < list.length; i++)
    {
        let elem = list[i];
        switch(elem.id)
        {
            case "about":
                elem.innerHTML = obj.long;
                break;
            case "did":
                elem.innerHTML = obj.did;
                break;
            case "did":
                elem.innerHTML = obj.did;
                break;
            case "date":
                elem.innerHTML = obj.date;
                break;
            case "skills":
                Array.from(elem.children).forEach((e) => e.remove());
                obj.skills.forEach((e) => {
                    let skill = document.createElement("div");
                    skill.innerText = e;
                    skill.className = "skill";
                    elem.appendChild(skill);
                })
                break;
            case "imgs":
                Array.from(elem.children).forEach((e) => e.remove());

                obj.screens.forEach((e) => {
                    
                    let img = document.createElement("img");
                    img.src = e;
                    img.style.width = "100%";
                    img.style.aspectRatio = "inherit";
                    // img.style.scale = "1.2";
                    elem.appendChild(img);
                })

                currentIndex = 0;
                slides = Array.from(elem.children);
                break;
            case "link":
                elem.onclick = function()
                {
                    window.open(obj.link);
                }
                break;
        }
    }
    
}

document.onclick = function(e) {

    if(isOpening)
    {
        isOpening = false;
        return;
    }

    if(focusContainer.style.opacity <= 0) return;

    if(e.target != focusContainer && !focusContainer.contains(e.target)) {
        closeFocus();
    }
}

let isSliding;

function changeSlide(dir){

    if(isSliding) return;

    isSliding = true;

    let i = currentIndex;
    currentIndex = currentIndex + dir;

    if(currentIndex >= slides.length)
    {
        currentIndex = 0;
    }
    else if(currentIndex < 0)
    {
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].style.translate = ((currentIndex * -100) + (dir * 100)).toString() + "%";

    
    setTimeout(function()
    {
        slides[i].style.transition = "0.4s";
        slides[currentIndex].style.transition = "0.4s";

        slides[i].style.translate = (i * -100 + -dir * 100).toString() + "%";
        slides[currentIndex].style.translate = (currentIndex * -100).toString() + "%";
    }, 100);

    setTimeout(function()
    {
        slides[i].style.transition = "0s";
        slides[currentIndex].style.transition = "0s";

        isSliding = false;
    }, 390);


}