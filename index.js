const starWarsCharacters = [
    { name: "Luke Skywalker", role: "Coordinator", image:'./img/luke.png' },
    { name: "Darth Vader", role: "Shaper", image:'./img/darth.png' },
    { name: "Princess Leia", role: "Completerfinisher", image:'./img/leia.png' },
    { name: "Han Solo", role: "Resourceinvestigator", image:'./img/han.png' },
    { name: "Yoda", role: "Plant", image:'./img/yoda.png' },
    { name: "R2-D2", role: "Specialist", image:'./img/r2d2.png' },
    { name: "C-3PO", role: "Implementer", image:'./img/c3po.png' },
    { name: "Obi-Wan Kenobi", role: "Monitorevaluator", image:'./img/kenobi.png' },
    { name: "Chewbacca", role: "Teamworker", image:'./img/chewie.png' }
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
    <h1 class="header">Hvilken Star Wars Character er du?</h1>
    <button onclick="startQuiz()" class="startQuiz">Start Quiz</button>
    </div>
    <div id="test"></div>
    `;
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
                <div class="character-container">
                    <img src="${myStarWarsCharacter.image}" alt="${myStarWarsCharacter.name}">
                </div>
            </div>
        `;
    } else {
        resultContainer.innerHTML = `
            <div class='result'>
                <h2>No match found</h2>
            </div>
        `;
    }
}



function startQuiz() {
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