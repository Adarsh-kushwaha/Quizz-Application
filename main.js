const quizDB = [{
    question: "Q1) What is your name",
    option1: "abcd",
    option2: "abcdij",
    option3: "abcdgh",
    option4: "abcdeef",
    ans: "ans1"

}, {
    question: "Q2) what is your petname",
    option1: "12abcd",
    option2: "34abcdij",
    option3: "56abcdgh",
    option4: "78abcdeef",
    ans: "ans4"

}

]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector(".submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector(".score");
const hide = document.querySelector(".quiz-body");



let questionCounter = 0;
let score = 0;

const loadQuestion =()=>{

const questionList =quizDB[questionCounter];
question.innerHTML = `<h4>${questionList.question}</h4>`
option1.innerText = questionList.option1
option2.innerText = questionList.option2
option3.innerText = questionList.option3
option4.innerText = questionList.option4 

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAnsEle) => {
        if(currentAnsEle.checked){
            answer = currentAnsEle.id;
        }
    })
    
    return answer;

};

const deselectAll = ()=>{
    answers.forEach ((elem)=>elem.checked=false)
}



submit.addEventListener("click", () => {

    const checkedAnswer = getCheckAnswer()
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCounter].ans){
        score++;
    };

    deselectAll();
    questionCounter++;

    if(questionCounter < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`<h2>${score} outof ${quizDB.length}</h2>
        <button class="btn" onClick="location.reload()">Restart</button>
        `;
        hide.classList.add("final")

    }
})