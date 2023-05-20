const addQuestion = document.querySelector(".addQuestion");
const question_card = document.querySelector(".question-card");
const closeBtn = document.querySelector(".close");
const qInput = document.querySelector(".questionInput");
const aInput = document.querySelector(".answerInput");
const save = document.querySelector(".save");
const question_session = document.querySelector(".question-session-container");

let data = [];

addQuestion.addEventListener("click", function() {
question_card.classList.remove("question-card");
})

closeBtn.addEventListener("click", function() {
question_card.classList.add("question-card");
})


save.addEventListener("click",function functionName() {
  var questionValue =qInput.value;
  var answerValue =aInput.value;

  if (questionValue ==='' || answerValue ==='') {
    console.log("not valid");
  }else {
    const question = new Question(questionValue, answerValue);
     data.push(question);
     setLocalStorage(data);
  }
})

function setLocalStorage(data) {
  let dataString = JSON.stringify(data);
  localStorage.setItem("q&a",dataString);
  showLS();
}

function showLS() {
  let savedItems = localStorage.getItem("q&a");
  let savedItemsParsed = JSON.parse(savedItems);
  savedItemsParsed.forEach((item) => {
    question_session.insertAdjacentHTML("beforeend",
    `<div class="">
      <p>${item.question}</p>
      <p>${item.answer}</p>
    </div>`)
  });
}

function Question(question, answer){
  this.question = question;
  this.answer = answer;
}

document.addEventListener('DOMContentLoaded', function(){
    showLS();
})
