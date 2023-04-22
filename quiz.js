
let score = 0;
let questionsAsked = [];


const questions = [
    {
        question: "What year was the first Earth Day celebrated?",
        choices: ["1960", "1970", "1980", "1990"],
        answer: "1970",
    },
    {
        question: "A single tree produces enough air to supply in its lifetime for how many people for a year?",
        choices: ["1", "2", "3", "4"],
        answer: "4",
    },
    {
        question: "Approximately, How many years does it take for a plastic bottle to break down?",
        choices: ["100", "200", "300", "400"],
        answer: "400",
    },
    {
        question: "Approximately how many people participate in Earth Day each year?",
        choices: ["1 million", "100 million", "500 million", "1 billion"],
        answer: "1 billion",
    },
    {
        question: "When did Google introduce their first Earth Day doodle?",
        choices: ["2001", "2003", "1998", "2015"],
        answer: "2001",
    },
    {
        question: "What is the theme of Earth Day 2023?",
        choices: ["Protect Our Species", "Invest In Our Planet", "End Plastic Pollution", "Climate Action"],
        answer: "Invest In Our Planet",
    },
    {
        question: "So far, how many mass extinction events have there been in earth’s history?",
        choices: ["1", "3", "5", "7"],
        answer: "5",
    },
    {
        question: "Up to how many times can paper be recycled?",
        choices: ["1", "3", "5", "7"],
        answer: "7",
    },
    {
        question: "24 trees create how much paper?",
        choices: ["100 Kg", "50 Kg", "1000 Kg", "700 Kg"],
        answer: "1000 Kg",
    },
    {
        question: "Which of the following is a greenhouse gas?",
        choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
    },
    {
        question: "What region on Earth produces 20% of the planet’s oxygen?",
        choices: ["The Amazon Rainforest", "The Sahara Desert", "The Arctic", "The Antarctic"],
        answer: "The Amazon Rainforest",
    },
    {
        question: "Most of Earth’s breathable air comes from where?",
        choices: ["The ocean", "The rainforest", "The desert", "The mountains"],
        answer: "The ocean",
    },
    {
        question: "Which country is the largest emitter of carbon dioxide in the world?",
        choices: ["China", "USA", "India", "Russia"],
        answer: "China",
    },
    {
        question:"What is the term for a large mass of ice that moves slowly over land or sea?",
        choices: ["Iceberg", "Glacier", "Ice shelf", "Ice cap"],
        answer: "Glacier",
    },
    {
        question: "What is the term for the natural phenomenon that keeps the Earth’s surface warm by trapping some of the sun’s energy in the atmosphere?",
        choices: ["Greenhouse warming", "Greenhouse gas", "Greenhouse", "Greenhouse effect"],
        answer: "Greenhouse effect",
    },


    // Add more questions here
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const messageContainer = document.getElementById("message-container");



function getRandomQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (questionsAsked.includes(randomIndex));
    questionsAsked.push(randomIndex);
    return questions[randomIndex];
}

function displayQuestion() {
    messageContainer.innerText = "";
    document.getElementById("score").innerText = "Score: " + score;

    if (questionsAsked.length === questions.length) {
        alert("Quiz completed! Your final score is: " + score);
        score = 0;
        questionsAsked = [];
        return;
    }

    const question = getRandomQuestion();
    questionElement.innerText = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
    
        button.addEventListener("click", () => {
            if (choice === question.answer) {
                messageContainer.innerText = "Correct!";
                score++;
            } else {
                messageContainer.innerText = "Incorrect. The correct answer is: " + question.answer;
            }
            nextButton.style.display = "block";
            choicesElement.style.pointerEvents = "none";
        });
    
        choicesElement.appendChild(button);
    });
    
}


nextButton.addEventListener("click", () => {
    nextButton.style.display = "none";
    choicesElement.style.pointerEvents = "auto";
    displayQuestion();
});

displayQuestion();