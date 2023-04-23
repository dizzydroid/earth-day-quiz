
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
// Add these questions to your existing questions array
{
    question: "What is the most common type of debris that litters our oceans?",
    choices: ["Cigarette butts", "Plastic bags", "Glass bottles", "Aluminum cans"],
    answer: "Cigarette butts",
},
{
    question: "What country consumes the most energy in the world?",
    choices: ["United States", "China", "India", "Russia"],
    answer: "China",
},
{
    question: "What percentage of the world's water is fresh water?",
    choices: ["2.5%", "10%", "25%", "75%"],
    answer: "2.5%",
},
{
    question: "Which of the following energy sources is a renewable resource?",
    choices: ["Natural gas", "Coal", "Solar power", "Nuclear power"],
    answer: "Solar power",
},
{
    question: "Which country produces the most wind energy?",
    choices: ["China", "United States", "Germany", "India"],
    answer: "China",
},
{
    question: "In which year was the United States Environmental Protection Agency (EPA) established?",
    choices: ["1960", "1970", "1980", "1990"],
    answer: "1970",
},
{
    question: "Which gas is the main component of natural gas?",
    choices: ["Methane", "Ethane", "Propane", "Butane"],
    answer: "Methane",
},
{
    question: "What type of waste is generated the most in the United States?",
    choices: ["Food waste", "Paper waste", "Plastic waste", "Metal waste"],
    answer: "Paper waste",
},
{
    question: "What is the world's largest ocean?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
},
{
    question: "What type of energy does the sun produce?",
    choices: ["Chemical energy", "Nuclear energy", "Thermal energy", "Radiant energy"],
    answer: "Radiant energy",
},
// ... Existing questions ...
{
    question: "What percentage of the Earth's surface is covered by water?",
    choices: ["50%", "60%", "70%", "80%"],
    answer: "70%",
},
{
    question: "Which of the following is a renewable energy source?",
    choices: ["Coal", "Natural Gas", "Solar Power", "Nuclear Power"],
    answer: "Solar Power",
},
{
    question: "What type of waste takes up the most space in landfills?",
    choices: ["Paper", "Food", "Plastic", "Glass"],
    answer: "Paper",
},
{
    question: "What is the most common type of debris that litters our oceans?",
    choices: ["Plastic", "Glass", "Metal", "Rubber"],
    answer: "Plastic",
},
{
    question: "Which of the following is not a greenhouse gas?",
    choices: ["Methane", "Ozone", "Water Vapor", "Helium"],
    answer: "Helium",
},
{
    question: "What is the largest source of renewable energy in the United States?",
    choices: ["Solar", "Wind", "Hydropower", "Geothermal"],
    answer: "Hydropower",
},
{
    question: "What is the leading cause of deforestation?",
    choices: ["Logging", "Mining", "Agriculture", "Urban Development"],
    answer: "Agriculture",
},
{
    question: "What is the most common cause of air pollution?",
    choices: ["Industrial Emissions", "Vehicle Emissions", "Agricultural Emissions", "Waste Disposal"],
    answer: "Vehicle Emissions",
},
{
    question: "Which of the following is a major contributor to ozone depletion?",
    choices: ["Methane", "Carbon Dioxide", "Chlorofluorocarbons (CFCs)", "Water Vapor"],
    answer: "Chlorofluorocarbons (CFCs)",
},
{
    question: "Which country is the world's largest producer of wind energy?",
    choices: ["United States", "China", "Germany", "India"],
    answer: "China",
},
{
    question: "Which type of energy source is responsible for the majority of carbon emissions?",
    choices: ["Coal", "Oil", "Natural Gas", "Nuclear"],
    answer: "Coal",
},
{
    question: "Which of the following is a major cause of water pollution?",
    choices: ["Agricultural Runoff", "Solar Radiation", "Wind Erosion", "Lightning"],
    answer: "Agricultural Runoff",
},
{
    question: "What is the world's largest producer of solar energy?",
    choices: ["United States", "China", "Germany", "India"],
    answer: "China",
},
{
    question: "What is the primary cause of ocean acidification?",
    choices: ["Methane", "Carbon Dioxide", "Chlorofluorocarbons (CFCs)", "Nitrous Oxide"],
    answer: "Carbon Dioxide",
},
{
    question: "Which country has the largest area of forest?",
    choices: ["United States", "Brazil", "Russia", "Canada"],
    answer: "Russia",
},
{
    question: "Which of the following is not a fossil fuel?",
    choices: ["Coal", "Oil", "Natural Gas", "Biomass"],
    answer: "Biomass",
},
// ... Existing questions ...

{
    question: "Which of the following is a non-renewable energy source?",
    choices: ["Solar Power", "Wind Power", "Geothermal Power", "Nuclear Power"],
    answer: "Nuclear Power",
},
{
    question: "Which gas is most responsible for global warming?",
    choices: ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Water Vapor"],
    answer: "Carbon Dioxide",
},
{
    question: "Which country has the highest percentage of renewable energy consumption?",
    choices: ["Germany", "Iceland", "Denmark", "Sweden"],
    answer: "Iceland",
},
{
    question: "What is the term used to describe the process of capturing and storing carbon dioxide?",
    choices: ["Carbon Capture", "Carbon Storage", "Carbon Sequestration", "Carbon Reduction"],
    answer: "Carbon Sequestration",
},
{
    question: "What is the most widely recycled material in the world?",
    choices: ["Paper", "Aluminum", "Plastic", "Glass"],
    answer: "Paper",
},
{
    question: "Which country has the highest rate of recycling?",
    choices: ["United States", "Germany", "Japan", "Sweden"],
    answer: "Germany",
},
{
    question: "What is the main source of oxygen in the Earth's atmosphere?",
    choices: ["Plants", "Algae", "Oceans", "All of the above"],
    answer: "All of the above",
},
{
    question: "Which country has the highest biodiversity in the world?",
    choices: ["Brazil", "Indonesia", "Colombia", "Madagascar"],
    answer: "Brazil",
},
{
    question: "What is the most endangered species on Earth?",
    choices: ["Amur Leopard", "Vaquita", "Javan Rhino", "Black-footed Ferret"],
    answer: "Vaquita",
},
{
    question: "What is the term for the variety of life on Earth?",
    choices: ["Ecosystem", "Biosphere", "Biodiversity", "Ecology"],
    answer: "Biodiversity",
},
// ... Add more questions here ...

];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const messageContainer = document.getElementById("message-container");

const playAgainButton = document.getElementById("play-again-button");

playAgainButton.addEventListener("click", () => {
    playAgainButton.style.display = "none";
    score = 0;
    questionsAsked = [];
    displayQuestion(currentLanguage === "en" ? questions : questions_es);
});

function getRandomQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (questionsAsked.includes(randomIndex));
    questionsAsked.push(randomIndex);
    return questions[randomIndex];
}

function displayQuestion() {
    document.getElementById("score").innerText = "Score: " + score;

    // Add a condition to limit the quiz to 15 questions
    if (questionsAsked.length === 15) {
        showResults();
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

function showResults() {
    const playAgain = confirm("Quiz completed! Your final score is: " + score + ". Do you want to play again?");
    if (playAgain) {
        score = 0;
        questionsAsked = [];
        displayQuestion();
    }
}

nextButton.addEventListener("click", () => {
    nextButton.style.display = "none";
    messageContainer.innerText = ""; // Clear the message when the next button is clicked
    choicesElement.style.pointerEvents = "auto";
    displayQuestion();
});

displayQuestion();