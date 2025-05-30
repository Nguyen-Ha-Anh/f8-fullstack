import {questions} from "./const.js";
import {questionRef} from "./referances.js";

// todo: need to get next question / first question
const curQuestion = questions[0]

const onShowQuestion = () => {
  // console.log(curQuestion)

  const titleRef = questionRef.querySelector('.question-title')
  titleRef.innerText = curQuestion.question

  for (const key of ['a', 'b', 'c', 'd']) {
    questionRef.querySelector(`.question-option[value="${key}"]`).innerText = `${key.toUpperCase()}: ${curQuestion[key]}`
  }
}

const resetBackground = () => {
  questionRef.querySelectorAll('.question-option').forEach(ref => {
    ref.style.backgroundColor = '#fff'
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
    if (!curQuestion.userAns) return alert("Hãy chọn đáp án trước!");

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
      moveToNextQuestion();
    }, 1500);
  });
}

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

