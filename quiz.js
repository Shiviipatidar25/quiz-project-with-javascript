document.addEventListener('DOMContentLoaded' , ()=>{

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");


    const questions = [
        {
            question:"what is the capital of france",
            choices:["paris" , "london" , "berlin" , "madrid"],
            answer:"paris",
        },
        {
            question:"what is the capital of italy",
            choices:["Rome" , "newyork" , "berlin" , "madrid"],
            answer:"Rome",
        },
        {
            question:"what is the capital of india",
            choices:["paris" , "london" , "berlin" , "Delhi"],
            answer:"Delhi",
        }
    ];

    let currrentQuestionIndex = 0
    let score = 0


    startBtn.addEventListener('click' , startQuiz);

    nextBtn.addEventListener('click' , () =>{
        currrentQuestionIndex++
        if(currrentQuestionIndex < questions.length){
            showQuestion()

        }else{
            showResult()
        }
    })

    restartBtn.addEventListener('click' ,()=>{
        currrentQuestionIndex = 0
        score = 0
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        startQuiz();
        showQuestion();
    });


    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currrentQuestionIndex].question;
        choicesList.innerHTML = "" ;// clear previous question
        questions[currrentQuestionIndex].choices.forEach(choice =>{
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click' , () => selectAnswer(choice));
            choicesList.appendChild(li);


        });

    }

    function selectAnswer(choice){
        const correctAnswer = questions[currrentQuestionIndex].answer;
        if (choice === correctAnswer){
            score++;

        }
        nextBtn.classList.remove("hidden");


    }

    function showResult(){
        questionContainer.classList.add("hidden")
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;

    }


});