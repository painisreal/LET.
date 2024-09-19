const questions = [
    {
        question: "What is the full form of HTML?",
        answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "Hyper Text Machine Language", correct: false },
          { text: "Hyper Text Meta Language", correct: false },
          { text: "Hyper Text Media Language", correct: false },
      ]
    },
    {
      question: "What is the most popular front-end framework?",
      answers: [
        { text: "React", correct: true },
        { text: "Angular", correct: false },
        { text: "Vue.js", correct: false },
        { text: "Ember.js", correct: false },
      ]
    },
    {
      question: "What is the purpose of the `<head>` tag in HTML?",
      answers: [
        { text: "To define the body of the HTML document", correct: false },
        { text: "To define the header of the HTML document", correct: true },
        { text: "To define the footer of the HTML document", correct: false },
        { text: "To define the navigation menu", correct: false },
      ]
    },
    {
      question: "What is the difference between HTTP and HTTPS?",
      answers: [
        { text: "HTTP is for secure connections, HTTPS is for non-secure connections", correct: false },
        { text: "HTTPS is for secure connections, HTTP is for non-secure connections", correct: true },
        { text: "HTTP is for fast connections, HTTPS is for slow connections", correct: false },
        { text: "HTTPS is for fast connections, HTTP is for slow connections", correct: false },
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("ans-btns");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("qbtn");
      answerButton.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

  function restState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }

  }
  startQuiz()