const starWarsCharacters = [
    { name: "Luke Skywalker", role: "Coordinator", image:'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3oxeDc5ZjdkdXhndXBucDVvNHMydGpmN2FncW52NWs3bjB5M3ZhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8ZGtiCgA91i6Y/giphy.gif', line:"I am a Jedi, like my father before me." },
    { name: "Darth Vader", role: "Shaper", image:'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczBobzVxcnJpMHQxMGZra2Rtb3hqMGVvazhhNnB5N3VxOHYzMml1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9DPpf0zTqRASyzTi/giphy.gif', line:"Be careful not to choke on your aspirations."},
    { name: "Princess Leia", role: "Completerfinisher", image:'https://giphy.com/gifs/starwars-star-wars-princess-leia-3ohuP7Udt4UXEYjhQY', line:"Someone has to save our skins. Into the garbage chute, flyboy!"},
    { name: "Han Solo", role: "Resourceinvestigator", image:'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGl2enZlYTVkNGpncmdnejdydTVnMWlvYXU3MTBhcWtqdjE1NXA2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rHR8qP1mC5V3G/giphy.gif', line:"Never tell me the odds!"},
    { name: "Yoda", role: "Plant", image:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXY2cm9wYzhucmJsMjN4czN4YndjZ3R6ajV1MTg0M3h3eTkyMGIxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KZocN3LfuqktW/giphy.gif', line:"Do, or do not. There is no try."},
    { name: "R2-D2", role: "Specialist", image:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVhdzM1enc5ZGpsejY3NzJ0dThnYTR4bnJ4d2dmMDdreDlkeWViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Khurh5g5bBIkg/giphy.gif' , line: "bee-boop-bee-bee-boop" },
    { name: "C-3PO", role: "Implementer", image:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxib2twaTN0dWZpeDRmYmw5bWMzMHZzNWlkdjZ6MWF0OGtoMmg4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KukV0se1IbeyMX6/giphy.gif' , line: "We're doomed!" },
    { name: "Obi-Wan Kenobi", role: "Monitorevaluator", image:'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGpiYTl2cHhqZDZzbmEydzlpbzlxbGsweXJwcXZ6ZjNpeHZ1YzgxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12Gyz2J1b9SjD2/giphy.gif', line: "Hello there" },
    { name: "Chewbacca", role: "Teamworker", image:'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHp2cXdoZHp3czQxbGg0aGJtMzNxcjVlaHNidHQzNm9pbnRxb3N1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1J3DEiWcZxrje4Za/giphy.gif', line:"RRAARGHH!" }
];


const belbinRoles = {
    plant: { name: "Plant", description: "Creative, imaginative, and generates new ideas.", score:0 },
    resourceinvestigator: { name: "Resource Investigator", description: "Outgoing, explores opportunities, and develops contacts.", score:0 },
    coordinator: { name: "Coordinator", description: "Mature, confident, and clarifies goals.", score:0 },
    shaper: { name: "Shaper", description: "Challenging, dynamic, and thrives on pressure.", score:0 },
    monitorevaluator: { name: "Monitor Evaluator", description: "Sober, strategic, and discerning.", score:0 },
    teamworker: { name: "Teamworker", description: "Cooperative, mild, and perceptive." , score:0},
    implementer: { name: "Implementer", description: "Disciplined, reliable, and turns ideas into action." , score:0},
    completerfinisher: { name: "Completer Finisher", description: "Painstaking, conscientious, and delivers on time." , score:0},
    specialist: { name: "Specialist", description: "Single-minded, self-starting, and provides knowledge." , score:0}
};


createApp();
                               

function createApp() {
    
    document.getElementById("app").innerHTML = /*HTML*/`
    <div id="container" class="container">
        <h1 class="header">Which Star Wars character are you?</h1>
        <button onclick="startQuiz()" class="startQuiz">Start</button>
    </div>
    <div id="test"></div>
    <label for="volumeSlider">Volume</label>
    <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="0.2" onchange="setVolume(this.value)">
    <audio id="backgroundMusic" src="audio/music.mp3" autoplay loop></audio>`
    initializeBackgroundMusic();
}

function initializeBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.volume = 0.2;
    document.querySelector(".startQuiz").addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.error("Failed to play background music:", error);
            });
        }
    });
}

function setVolume(volume) {
    const backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic) {
        backgroundMusic.volume = volume;
    }
}

function toggleMute() {
    const muteButton = document.querySelector(".muteButton");
    const backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteButton.textContent = "Mute";
    } else {
        backgroundMusic.muted = true;
        muteButton.textContent = "Unmute";
    }
}



function submitQuiz() {
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach(radio => {
        const role = radio.getAttribute("data-role").toLowerCase();
        const score = parseInt(radio.value);
        if (belbinRoles[role]) {
            belbinRoles[role].score += score;
        }
    });

    let highestScoreRole = '';
    let highestScore = 0;
    let myStarWarsCharacter;
    for (const role in belbinRoles) {
        if (belbinRoles[role].score > highestScore) {
            highestScoreRole = role;
            highestScore = belbinRoles[role].score;
        }
    }

    myStarWarsCharacter = starWarsCharacters.filter(c => c.role.toLowerCase() === highestScoreRole)[0];
    const resultContainer = document.getElementById("app");
    if (myStarWarsCharacter) {
        resultContainer.innerHTML = `
            <div class='result'>
                <h2>Your Belbin Role: ${belbinRoles[highestScoreRole].name}</h2>
                <p>${belbinRoles[highestScoreRole].description}</p>
                <h3>Your Star Wars Character Match: ${myStarWarsCharacter.name}</h3>
                <h4>${myStarWarsCharacter.line}</h4>
                <div class="character-container">
                    <img src="${myStarWarsCharacter.image}" alt="${myStarWarsCharacter.name}">
                </div>
                <button onclick="createApp()" class="startQuiz">New Quiz</button>
            </div>
        `;
    } else {
        resultContainer.innerHTML = `
            <div class='result'>
                <div class="character-container">
                <img class="img" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJzdXV5dWkzY3dtNjNhemczdzBraXlxa3ozOWFuaGw4eXE0cjRjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M4iOAkEAPwAnK/giphy.gif" />
                </div>
                <button onclick="createApp()" class="startQuiz">Start Quiz</button>
            </div>
        `;
    }
}



function startQuiz() {
    for (const role in belbinRoles) {
        belbinRoles[role].score = 0;
    }
    document.getElementById("container").innerHTML = '';
    const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
    let quizHTML = '';
    questions.forEach((q, index) => {
        quizHTML += `<div class="question">
            <p data-role=${q.role}>${index + 1}. ${q.question}</p>`;
        labels.forEach((label, i) => {
            quizHTML += `<label><input type="radio" name="q${index}" value="${i + 1}" data-role="${q.role}"> ${label}</label>`;
        });
        quizHTML += `</div>`;
    });

    document.getElementById("test").innerHTML = quizHTML + `<button onclick="submitQuiz()" class="submit">Submit</button>`;
}