// =======================
// CREATE STARS
// =======================

const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}


// =======================
// STORY
// =======================

const story = [

"Sometimes...",

"The smallest conversations become the nicest memories.",

"Kaafi time ho gaya na...",

"Life kabhi kabhi itni busy ho jaati hai...",

"Phir bhi...",

"Kuch log important reh jaate hain ❤️"

];

const container = document.querySelector(".container");

const button = document.getElementById("startBtn");

let index = 0;


// =======================
// TYPEWRITER
// =======================

function type(text, callback){

    container.innerHTML = `
    <h1 id="typing"></h1>
    `;

    const typing = document.getElementById("typing");

    let i = 0;

    const timer = setInterval(()=>{

        typing.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

            setTimeout(callback,2400);

        }

    },45);

}


// =======================
// NEXT MESSAGE
// =======================

function next(){

    if(index >= story.length){

        showLetter();

        return;

    }

    type(story[index],()=>{

        index++;

        next();

    });

}


// =======================
// START
// =======================

button.onclick=()=>{

container.style.opacity="0";

setTimeout(()=>{

container.style.opacity="1";

next();

},800);

}


// =======================
// LETTER
// =======================

function showLetter() {

    container.innerHTML = `
        <div class="letter">
            <h2>Dear Jill 🌙</h2>
            <p id="typingLetter"></p>
        </div>
    `;

    const lines = [

        "Pata nahi kyun...",

        "Aaj achanak tumhari yaad aa gayi.",

        "Socha message karu...",

        "Phir laga...",

        "Shayad busy hoge. 😊",

        "Isliye socha...",

        "Ek chhoti si website bana deta hoon.",

        "Waise bhi...",

        "Normal message toh koi bhi bhej deta. 😄",

        "Bas itna bolna tha...",

        "Khud ka khayal rakhna.",

        "Aur agar kabhi...",

        "Life thodi si heavy lage...",

        "Ya bas kisi apne se baat karni ho...",

        "Toh bina soche message kar dena.",

        "Reply zaroori nahi hai.",

        "Bas smile aa gayi ho toh kaafi hai. 😊",

        "🌙",

        "Some people don't need daily conversations...",

        "to stay important.",

        "❤️",

        "Milte hain jaldi."

    ];

    const target = document.getElementById("typingLetter");

    let line = 0;

    function typeLine() {

        if (line >= lines.length) return;

        let text = lines[line];
        let i = 0;

        const span = document.createElement("div");
        span.className = "line";
        target.appendChild(span);

        const timer = setInterval(() => {

            span.textContent += text.charAt(i);

            i++;

            // Auto-scroll inside the card
            container.scrollTop = container.scrollHeight;

            if (i >= text.length) {

                clearInterval(timer);

                line++;

                setTimeout(typeLine, 700);

            }

        }, 35);

    }

    typeLine();

}

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize=(20+Math.random()*15)+"px";

heart.style.opacity=".8";

heart.style.zIndex="999";

heart.style.transition="5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.bottom="110vh";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5200);

},2500);

// Shooting star every 10-18 seconds

const shootingStar=document.getElementById("shootingStar");

function shoot(){

shootingStar.classList.remove("shoot");

void shootingStar.offsetWidth;

shootingStar.classList.add("shoot");

}

setInterval(()=>{

shoot();

},10000+Math.random()*8000);