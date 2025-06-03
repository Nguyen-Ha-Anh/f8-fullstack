import {questions} from "./const.js";
import {questionRef} from "./referances.js";

// todo: need to get next question / first question
let curQuestion = questions[0]
let currentIndex = 0
let timeRef = document.getElementById('time')
let countdown = 30
let itv

itv = setInterval(() => {
  timeRef.innerText = countdown;
  countdown--;
  if (countdown < 0) {
    clearInterval(itv);
    alert("het code!");
    moveToNext();
  }
}, 1000);

const onShowQuestion = () => {
  // console.log(curQuestion)

  const titleRef = questionRef.querySelector('.question-title')
  titleRef.innerText = curQuestion.question

  ['a', 'b', 'c', 'd'].forEach(key => {
    const option = questionRef.querySelector(`.question-option[value="${key}"]`)
    option.innerText = `${key.toUpperCase()}: ${curQuestion[key]}`
  }) 

  resetBackground()
  startTimer()
  
}

const resetBackground = () => {
  questionRef.querySelectorAll('.question-option').forEach(ref => {
    ref.style.backgroundColor = '#a6bccf'
  })
}

const moveToNext = () => {
  currentIndex++
  if (currentIndex < questions.length) {
    curQuestion = questions[currentIndex]
    onShowQuestion()
    resetBackground()
  }
  else {
    alert('Done')
  }
}

const addEvent = () => {
  for (const key of ['a', 'b', 'c', 'd']) {
    const answerRef = questionRef.querySelector(`.question-option[value="${key}"]`)
    answerRef.addEventListener('click', () => {
      console.log('click',key)
      curQuestion.userAns = key
      curQuestion.isCorrect = curQuestion.userAns === curQuestion.correctAns

      resetBackground()
      answerRef.style.backgroundColor = ' rgb(222, 130, 10)'
      console.log(curQuestion)
    })
  }

  const checkBtn = document.querySelector('.check-btn');
  checkBtn.addEventListener('click', () => {
    if (!curQuestion.userAns) return alert("Chon dap an di!");

    const allOptions = questionRef.querySelectorAll('.question-option');
    allOptions.forEach(option => {
      const key = option.getAttribute('value');
      if (key === curQuestion.correctAns) {
        option.style.backgroundColor = 'green';
      } else if (key === curQuestion.userAns) {
        option.style.backgroundColor = 'red';
      } else {
        option.style.backgroundColor = '#a6bccf';
      }
    });

    setTimeout(() => {
      moveToNext();
    }, 3000);
  });
}

addEvent()
onShowQuestion()

const ansers = document.querySelectorAll('.answer')
const checkBtn = document.getElementById('checkBtn')
const result = document.getElementById('result')

let correctAns = 'C'

addEvent()

onShowQuestion()

// let currentQuestionIndex = 0

// function updateMilestone() {
//   const listItems = document.querySelectorAll('#milestone-list li')
//   listItems.forEach(li => {
    
//   })
// }

