const starWarsCharacters = [
    { name: "Luke Skywalker", role: "coordinator" },
    { name: "Darth Vader", role: "shaper" },
    { name: "Princess Leia", role: "completerFinisher" },
    { name: "Han Solo", role: "resourceInvestigator" },
    { name: "Yoda", role: "plant" },
    { name: "R2-D2", role: "specialist" },
    { name: "C-3PO", role: "implementer" },
    { name: "Obi-Wan Kenobi", role: "monitorEvaluator" },
    { name: "Chewbacca", role: "teamworker" }];

const belbinRoles = {
    plant: { name: "Plant", description: "Creative, imaginative, and generates new ideas." },
    resourceInvestigator: { name: "Resource Investigator", description: "Outgoing, explores opportunities, and develops contacts." },
    coordinator: { name: "Coordinator", description: "Mature, confident, and clarifies goals." },
    shaper: { name: "Shaper", description: "Challenging, dynamic, and thrives on pressure." },
    monitorEvaluator: { name: "Monitor Evaluator", description: "Sober, strategic, and discerning." },
    teamworker: { name: "Teamworker", description: "Cooperative, mild, and perceptive." },
    implementer: { name: "Implementer", description: "Disciplined, reliable, and turns ideas into action." },
    completerFinisher: { name: "Completer Finisher", description: "Painstaking, conscientious, and delivers on time." },
    specialist: { name: "Specialist", description: "Single-minded, self-starting, and provides knowledge." }
};


createApp();


function createApp() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>Hvilken Star Wars Character er du?</h1>
    <button onclick="startQuiz()">Start Quiz</button>
    <div id="test"></div>
    `;
}



function calculateScore()
{
    const form = document.getElementById('test');
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