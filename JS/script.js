const explanationTemplate = '<a class="dot-container"><img class="dot"/></a><div class="explanation"><div class="title-container"><div class="title"></div><div class="subtitle"></div></div><div class="description"></div></div><div class="skills reduced"></div>';

const timelineSteps = [
    {
        img: "ET2.png",
        link: "https://smanio.itch.io/end-times",
        git: "https://github.com/nicsmaniotto/SpecializationP",
        doc: "./Doc/SP_TechnicalOverview.pdf",
        skills: ["UE5", "C++", "Blueprints"],
        title: "End Times",
        date: "jul 2025",
        txt: "Specialization work for my final year at Event Horizon School.<br>An Outer Wilds Tribute.",
        long: "This project represents the specialization work for my final year at Event Horizon School. Developed over the course of approximately two months, it is focused on the domain of gameplay programming. The goal was to replicate within Unreal Engine 5 the core movement mechanics of the well-known game Outer Wilds, by implementing components that leverage the engine’s built-in physics system to apply forces and impulses to objects.Furthermore, the project integrates additional components for environmental interaction and for representing specific gameplay behaviors through simple and intuitive UI interfaces.",
        did: "<li>Physics based land/air movement</li><li>Custom gravity system</li><li>Possession logic</li><li>Interactables</li><li>Planet rotation/revolution movement</li><li>UI</li>",
        screens: ["ET1.png", "ET2.png", "ET3.png", "ET4.png", "ET5.png", "ET6.png"],
        video: "okrj4g1hwqY"
    },
    {
        img: "pq.png",
        link: "https://eventhorizonschool.itch.io/pizza-quest-tales-of-an-absolutely-normal-pizzeria",
        skills: ["UE5", "C++", "Blueprints"],
        title: "Pizza Quest",
        date: "may 2025",
        txt: "Delivery game with a soft narrative and combat gameplay where I focused on gameplay programming.",
        long: "<b>Pizza Quest</b> is a delivery game with a soft narrative and combat gameplay. The player plays as a pizza delivery girl who works at night when funny demons plague the city.<br> In this project, I focused on gameplay programming, developing everything that is not linked to UI. Main challenges were creating a satisfying movement feed with the help of an input buffer; creating a scalable system of combat behaviors and power up addition.",
        did: "<li>Player movement (<i>i.e.</i> dash, custom jump, custom acceleration)</li><li>Input buffer</li><li>Combat system</li><li>Power ups (<i>i.e.</i> Wall jump, double jump, grappling hook)</li><li>Level loading/unloading</li><li>Enemy IA</li><li>Enemy spawn behavior</li><li>Minimap</li>",
        screens: ["pq6.png", "pq2.png", "pq3.png", "pq4.png", "pq1.png", "pq5.png", "pq7.png"],
        video: "dl9RPDRIjiY"
    },
    {
        img: "tarocchi.jpg",
        link: "https://smanio.itch.io/demon-in-me",
        skills: ["UE5", "Blueprints"],
        title: "Demon in me",
        date: "jul 2024",
        txt: "UE5 school open-map project: the goal of the game is to defeat demons you encounter along the path while collecting different cards that acts as weapons.",
        long: "<b>Demon in me</b> is a school project made in Unreal Engine 5 through the use of blueprints. <br> In this project we approached the potentiality of the engine and created an open-map with the loading/unloading of the levels with the level streaming system. The protagonist can make use of different weapons which interacts with the enemies in several ways (i.e. wind knockback, fire burn, enemies becoming friends). ",
        did: "<li>Level loading/unloading system</li><li>Enemies AI</li><li>Inventory system</li><li>Save system</li><li>UI</li><li>Consumables</li><li>Power ups</li><li>Environmental scripts</li><li>Dialogue system</li>",
        screens: ["tarocchi.jpg", "dim1.png", "dim3.png","dim4.png","dim5.png"],
        video: "V2IqAoej2CM"
    },
    {
        img: "pushy.png",
        link: "https://smanio.itch.io/pushy-cat",
        skills: ["Unity", "C#"],
        title: "Pushy Cat",
        date: "nov 2023",
        txt: "Mobile school project where I implemented the main core of the game mechanics.<br>(Also made the soundtrack :-P)",
        long: "<b>Pushy cat</b> is a mobile game developed in Unity. The game is a <i>push sushi</i> remake with a gameplay twist: the player can change its direction during the level through the use of specific tunnels.<br>This is a school project where we faced one of the biggest critical issue of a mobile game development: the heterogeneous size of mobile devices. Moreover, it is also necessary to take into serious account game optimization.",
        did: "<li>Character movement</li><li>Level loading/unloading system</li><li>Environmental scripts</li><li>UI</li><li>Reward system</li><li style='font-size: 15px'>Soundtrack</li>",
        screens: []
    },
    {
        img: "deadc.png",
        link: "https://smanio.itch.io/dead-cat-bounce",
        skills: ["Unity", "C#"],
        title: "Dead Cat Bounce",
        date: "jun 2023",
        txt: "Implemented several rooms and power-ups of this soft rogue-like project.",
        long: "<b>Dead cat bounce</b> is a rogue-like 2.5D game made in Unity. This is a two-week school project made at the end of my first year. Challenges in this project where almost all dictated by the progression of the game and the necessity to bring all the power-ups accumulated during the single run.",
        did: "<li>5/6 loadable maps</li><li>All power ups</li><li>UI</li>",
        screens: ["dcb1.png", "dcb2.png", "dcb3.png", "dcb4.png", "dcb5.png"],
        video: "jY2HRORcemc"
    },
    {
        img: "kidds.png",
        link: "https://smanio.itch.io/kidds-treasure",
        skills: ["Unity", "C#"],
        title: "Kidd's Treasure",
        date: "may 2023",
        txt: "Worked to create the core mechanics of this delivery narrative game.",
        long: "<b>Kidd's treasure</b> is a Unity narrative pirate game developed during the latest period of my first year of education. <br>Challenges I found while working on this project are: creating a modular and scalable quest system; creating an organic transition between the main scene and the minigame scenes.",
        did: "<li>Boat movement</li><li>Level loading/unloading system (main scene/mini-games)</li><li>Environmental scripts</li><li>UI</li><li>Reward system</li><li>Dialogue system</li><li>Final minigame</li>",
        screens: ["kidds1.png", "kidds2.png", "kidds3.png"],
        video: "ozZp52Zbmv4"
    },
    {
        img: "dontclick.png",
        link: "https://smanio.itch.io/dont-click-me-or-else",
        skills: ["Unity", "C#"],
        title: "Don't Click Me Or Else...",
        date: "apr 2023",
        txt: "One week jam-like project. Solo-programmer experience.",
        long: `<b>Don't click me or else...</b> is a Unity made jam-like project. It revolves around the idea of being annoyed and stressed. <br> This is a solo-programmer jam project made in 3/4 days; the system is very scalable as to introduce new "mission" or "spam" mails is a matter of clicks. The save system is very primitive as it uses the <i>PlayerPrefs</i> storage.`,
        did: "<li>Mail system</li><li>Environmental scripts</li><li>UI</li>",
        screens: ["dcm1.png", "dcm2.png", "dcm3.png",],
        video: "ydpCpt7Ntug"
    },
]
let isOpening = false;
let bodyContainer = document.getElementById("body-container");
let bg = document.getElementById("bg");

let container = document.getElementById("timeline-PROJECTS");
let focusContainer = document.getElementById("focusContainer");
let innerFocusContainer = focusContainer.getElementsByClassName("innerFocus");

let urlToLoad;

for(let i = 0; i < timelineSteps.length; i++){

    let elem = document.createElement("a");

    elem.onclick = function(){
        focusContainer.classList.replace("hidden", "shown");

        focusContainer.focus();

        isOpening = true;

        fillFocus(i);

        setTimeout(function(){
            isOpening = false;

            innerFocusContainer[0].scroll({top:0});

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
        dots[0].src = "./IMGS/" + timelineSteps[i].img;
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

    if(isBig) changeSize();

    stopVideo();
    
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
                    img.src = "./IMGS/" + e;
                    img.style.width = "100%";
                    img.style.aspectRatio = "inherit";
                    elem.appendChild(img);
                })

                currentIndex = 0;
                slides = Array.from(elem.children);
                break;
            case "game-link":
                elem.onclick = function()
                {
                    window.open(obj.link);
                }
                break;
            case "git-link":
                if(obj.git)
                {
                    elem.style.display = "block";
                    elem.onclick = function()
                    {
                        window.open(obj.git);
                    }
                }
                else
                {
                    elem.style.display = "none";
                }
                break;
            case "doc-link":
                if(obj.doc)
                {
                    elem.style.display = "block";
                    let a = elem.getElementsByTagName("a");
                    a[0].href = obj.doc;
                }
                else
                {
                    elem.style.display = "none";
                }
            break;
            case "playerContainer":
                if(!!obj.video)
                {
                    elem.style.display = 'block';
                    if(isLoaded)
                    {
                        playVideo(obj.video);
                    }
                    else
                    {
                        urlToLoad = obj.video;
                    }
                }
                else
                {
                    elem.style.display = 'none';
                }
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

let isBig = false;
let parent;

function changeSize(elem)
{
    isBig = !isBig;

    if(!parent) parent = elem.parentNode;

    if(isBig)
    {
        parent.classList.add("big");
    }
    else
    {
        parent.classList.remove("big");
    }

    
}

let educationSteps = [{
        img: "./IMGS/eh.png",
        link: "https://www.eventhorizonschool.com/",
        skills: [],
        title: "Event Horizon School",
        date: "oct 2022 - oct 2025",
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
        txt: "Years of education at Ca' Foscari University: started with the highly beloved japanese culture focused bachelor degree ended with graduation. Moved on with a data-science bachelor degree.<br> <a class='link hoverenlight' href='./IMGS/eh.png' target='_blank' download>IT Thesis</>",
        long: "",
        did: "",
        screens: [""]
    },
]

let educationContainer = document.getElementById("timeline-EDUCATION");

for(let i = 0; i < educationSteps.length; i++){

    let elem = document.createElement("a");

    elem.className = "explanation-container";
    elem.innerHTML = explanationTemplate;

    elem.href = educationSteps[i].link;
    elem.target = "#blank";

    let dotContainers = elem.getElementsByClassName("dot-container");

    if(dotContainers.length > 0){
        dotContainers[0].href = educationSteps[i].link;
        dotContainers[0].target = "#blank";
    }

    let dots = elem.getElementsByClassName("dot");

    if(dots.length > 0){
        dots[0].src = educationSteps[i].img;
    }

    let titles = elem.getElementsByClassName("title");

    if(titles.length > 0){
        titles[0].innerText = educationSteps[i].title;
    }

    let subtitles = elem.getElementsByClassName("subtitle");

    if(subtitles.length > 0){
        subtitles[0].innerText = educationSteps[i].date;
    }

    let descriptions = elem.getElementsByClassName("description");

    if(descriptions.length > 0){
        descriptions[0].innerHTML = educationSteps[i].txt;
    }

    educationContainer.appendChild(elem);
}


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    playerVars: {
    'playsinline': 0,
    'autoplay': 0,
    },
    events: 
    {
    'onReady': onPlayerReady,
    }
});
}

let isLoaded = false;

function onPlayerReady(event) {
    isLoaded = true;

    if(!!urlToLoad)
    {
        playVideo(urlToLoad);
    }
}

function playVideo(url)
{
    player.loadVideoById(url);
    player.mute();
    stopVideo();
}


function stopVideo() {
    player.stopVideo();
}