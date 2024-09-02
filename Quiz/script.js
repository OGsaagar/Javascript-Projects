const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Venus", "Mars", "Jupiter"],
        correct: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
        correct: 0
    },
    {
        question: "What is the smallest unit of life?",
        answers: ["Atom", "Molecule", "Cell", "Organ"],
        correct: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Gold", "Oxygen", "Osmium", "Oxide"],
        correct: 1
    },
    {
        question: "What is the square root of 64?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct: 1
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 2
    },
    {
        question: "What is the capital city of Japan?",
        answers: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correct: 2
    }
];

// References to key DOM elements
const questionContainer = document.getElementById('question-container');
const answerContainer = document.getElementById('answer-container');
const submitButton = document.getElementById('submit-btn');

let currentQuestionIndex = 0;
let score = 0;

// Display the current question and possible answers
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Update the question text
    questionContainer.innerText = currentQuestion.question;
    
    // Clear the answer container
    answerContainer.innerHTML = '';

    //  Add the possible answers
    currentQuestion.answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'bg-gray-200 p-2 rounded cursor-pointer hover:bg-blue-300';
        answerElement.textContent = answer;
        answerElement.addEventListener('click', () => handleAnswerClick(index));
        answerContainer.appendChild(answerElement);
    });
}

// Handle when an answer is clicked
function handleAnswerClick(selectedIndex) {
    // Remove the highlight from the previously selected answer
    const previouslySelected = answerContainer.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
        previouslySelected.style.backgroundColor = '';
        previouslySelected.style.color = '';
        previouslySelected.style.border = '';
    }

    // Highlight the selected answer
    const selectedAnswer = answerContainer.children[selectedIndex];
    selectedAnswer.classList.add('selected');
    selectedAnswer.style.backgroundColor = 'blue';
    selectedAnswer.style.color = 'white';
    selectedAnswer.style.border = '2px solid black';
}

// Submit the quiz and move to the next question
function submitQuiz() {
    const selectedAnswer = answerContainer.querySelector('.selected');
    
    if (selectedAnswer) {
       
        const selectedIndex = Array.from(answerContainer.children).indexOf(selectedAnswer);
     
        if (selectedIndex === quizData[currentQuestionIndex].correct) {
            score++;
        }
        
        // Move to the next question
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData.length) {
            // Display the next question
            displayQuestion();
        } else {
            // show the final score
            questionContainer.innerHTML = `Your score is ${score} out of ${quizData.length}`;
            answerContainer.innerHTML = '';
            submitButton.style.display = 'none';
        }
    }
}

// Start the quiz by displaying the first question
displayQuestion();

// Add event listener to the submit button
submitButton.addEventListener('click', submitQuiz);
