const explanationTemplate = '<a class="dot-container"><img class="dot"/></a><div class="explanation"><div class="title-container"><div class="title"></div><div class="subtitle"></div></div><div class="description"></div></div>';

const timelineSteps = [
    {
        img: "./IMGS/tarocchi.jpg",
        link: "https://smanio.itch.io/demon-in-me",
        title: "Demon in me",
        date: "jul 2024",
        txt: "Play as Vudu, a medium possessed by the demon Ad'yes, and switch forms at will! Explore an open world, collect tarot cards for powerful attacks and defenses, and battle deadly monsters. Will you master the balance between spirit and darkness?",
    },
    {
        img: "./IMGS/domandino.PNG",
        link: "https://smanio.itch.io/domandinos-adventure",
        title: "Domandino's Adventure",
        date: "dec 2023",
        txt: "Join Domandino, the curious dino, in a fun quiz adventure! Test your knowledge of nature and animals across different levels, with Domandino offering hints and fun facts along the way. Can you become a true nature expert?",
    },
    {
        img: "./IMGS/pushy.png",
        link: "https://smanio.itch.io/pushy-cat",
        title: "Pushy Cat",
        date: "nov 2023",
        txt: "Guide a hungry cat through a cozy room, moving furniture to clear its path to lunch! Slide obstacles, plan your moves, and enjoy a relaxing, purr-filled puzzle adventure. Can you help the kitty reach its meal?"
    },
    {
        img: "./IMGS/deadc.png",
        link: "https://smanio.itch.io/dead-cat-bounce",
        title: "Dead Cat Bounce",
        date: "jun 2023",
        txt: "Abandoned in the end again for the last time, an old cat wanders the dark and narrow hallways of his mind fighting against his inner fears. Face different challenges to help him overcome his trauma: will he be able to overcome this battle against himsel or is his fate written for good?"
    },
    {
        img: "./IMGS/kidds.png",
        link: "https://smanio.itch.io/kidds-treasure",
        title: "Kidd's Treasure",
        date: "may 2023",
        txt: "Set sail as a helpful pirate, ferrying islanders between lands to complete their tasks! Along the way, solve simple puzzles and engage in quirky, fun dialogues with the people you assist. Each successful journey earns you a key—collect enough to unlock the legendary final treasure. Can you navigate the seas, help those in need, and claim the ultimate reward?"
    },
    {
        img: "./IMGS/dontclick.png",
        link: "https://smanio.itch.io/dont-click-me-or-else",
        title: "Don't Click Me Or Else...",
        date: "apr 2023",
        txt: "Survive the chaos of a toxic workplace in DON'T CLICK ME OR ELSE! As a stressed office employee, you must complete tasks sent via email—but beware! Spam emails with misleading instructions lurk in your inbox, waiting to trip you up. Follow the right orders, avoid mistakes, and keep your job as long as possible. But if you mess up too often, your furious boss will fire you! How long can you withstand the pressure and rack up the highest score?"
    },
    {
        img: "./IMGS/tcrossing.png",
        link: "https://smanio.itch.io/tomato-crossing",
        title: "Tomato Crossing",
        date: "feb 2023",
        txt: "In this fast-paced game, you control a tomato on a mission to collect points by dodging naturalistic obstacles. The further you go, the higher your score climbs! Use quick reflexes to navigate through challenging environments, and see how long you can keep your tomato running!"
    },
    {
        img: "./IMGS/eh.png",
        link: "https://www.eventhorizonschool.com/",
        title: "Event Horizon School",
        date: "oct 2021",
        txt: "started to study event horizon"
    },
    {
        img: "./IMGS/cfoscari.png",
        link: "https://www.unive.it/",
        title: "Ca' Foscari University",
        date: "2014 - 2021",
        txt: "studies informatics / japanese "
    },
]

let container = document.getElementById("timeline");

for(let i = 0; i < timelineSteps.length; i++){

    let elem = document.createElement("a");

    elem.href = timelineSteps[i].link;
    elem.target = "_blank";

    elem.className = "explanation-container";
    elem.innerHTML = explanationTemplate;

    let dotContainers = elem.getElementsByClassName("dot-container");

    if(dotContainers.length > 0){
        dotContainers[0].href = timelineSteps[i].link;
        dotContainers[0].target = "_blank";
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
        descriptions[0].innerText = timelineSteps[i].txt;
    }

    container.appendChild(elem);
}

let expContainers = container.getElementsByClassName("explanation-container");