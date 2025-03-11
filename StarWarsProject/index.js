const url = 'https://swapi.dev/api/people/'
let characters = [];
const traits = {
    resourceInvestigator: 0,
    teamWorker: 0,
    co_ordinator: 0,
    plant: 0,
    monitor_Evaluator: 0,
    specialist:0,
    shaper:0,
    implementer:0,
    complete_Finisher:0,
};


createApp();
//fetchCharacters();


function createApp() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>Hvilken Star Wars Character er du?</h1>
    <button onclick="startQuiz()">Start Quiz</button>
    <div id="test"></div>
    `;
}



async function fetchCharacters() {
    while (characters.length < 5) {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        characters.push(data)
    }
}

function calculateScore()
{
    const form = document.getElementById('test');
    console.log(form)
    traits.resourceInvestigator = parseInt(form.q1.value);
}


function startQuiz() {
    const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
    let quizHTML = '';
    questions.forEach((q, index) => {
        quizHTML += `<div class="question">
            <p>${index + 1}. ${q.question}</p>`;
        labels.forEach((label, i) => {
            quizHTML += `<label><input type="radio" name="q${index + 1}" value="${i + 1}"> ${label}</label>`;
        });
        quizHTML += `</div>`;
    });

    document.getElementById("test").innerHTML = quizHTML + `<button onclick="calculateScore()">Submit</button>`;
}