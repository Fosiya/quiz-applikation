
const quizzes = {
    personligaFrågor: [
        {
            question: "När är min födelsedag?",
            options: ["28:e maj", "15:e juni", "1:a april", "5:e oktober"],
            answer: "28:e maj"
        },
        {
            question: "Hur gammal är jag?",
            options: ["22", "24", "26", "30"],
            answer: "24"
        },
        {
            question: "Vilken hobby gillar jag mest?",
            options: ["Måla", "Baka", "Läsa böcker", "Fotografera"],
            answer: "Baka"
        },
        {
            question: "Vilken är min favoritmat?",
            options: ["Sushi", "Pasta", "Pizza", "Sallad"],
            answer: "Pizza" 
        },
        {
            question: "Vilket djur tycker jag mest om?",
            options: ["Hund", "Katt", "Fågel", "Kaniner"],
            answer: "Katt" 
        }
    ],
    somalia: [
        {
            question: "Vad är huvudstaden i Somalia?",
            options: ["Mogadishu", "Hargeisa", "Bosaso", "Kismayo"],
            answer: "Mogadishu"
        },
        {
            question: "Vilket språk talas mest i Somalia?",
            options: ["Somaliska", "Arabiska", "Engelska", "Franska"],
            answer: "Somaliska"
        },
        {
            question: "Vilken valuta används i Somalia?",
            options: ["Somalisk shilling", "Dollar", "Euro", "Pund"],
            answer: "Somalisk shilling"
        },
        {
            question: "Vad heter den stora öknen i Somalia?",
            options: ["Danakil", "Sahara", "Kalahari", "Nubiska öknen"],
            answer: "Danakil"
        },
        {
            question: "Vilket hav ligger vid Somalias kust?",
            options: ["Indiska oceanen", "Medelhavet", "Atlanten", "Karibiska havet"],
            answer: "Indiska oceanen"
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuiz = "";

function startQuiz(subject) {
    selectedQuiz = subject;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizzes[selectedQuiz][currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<button onclick="selectAnswer('${option}')">${option}</button>`;
        optionsList.appendChild(li);
    });
}

function selectAnswer(answer) {
    const currentQuestion = quizzes[selectedQuiz][currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizzes[selectedQuiz].length) {
        showQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = `Du fick ${score} av ${quizzes[selectedQuiz].length} poäng.`;
}
