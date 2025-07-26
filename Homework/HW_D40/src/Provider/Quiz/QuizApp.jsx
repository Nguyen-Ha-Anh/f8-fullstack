import { useContext } from 'react';
import { QuizContext } from './quizContent.jsx';
import { questions } from './question';
import {moneyList} from '../Result/moneyList';
import './QuizApp.css';

const QuizApp = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { index, selected, score, showAnswer, finished } = state;
  const current = questions[index];

  const handleSelect = (option) => {
    if (!showAnswer) {
      dispatch({ type: 'SELECT_OPTION', payload: option });
    }
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT' });
  };

  const handleRestart = () => {
    dispatch({ type: 'RESTART' });
  };

  if (finished) {
    return (
      <div className="quiz">
        <h2>Kết quả: {score} / {questions.length}</h2>
        <button onClick={handleRestart}>Làm lại</button>
      </div>
    );
  }

  return (
    <div className="main">
        <div className="left">
        {finished ? (
            <div className="quiz">
            <h2>Kết quả: {score} / {questions.length}</h2>
            <button onClick={handleRestart}>Làm lại</button>
            </div>
        ) : (
            <div className="quiz">
            <div className="question-header">
                <h3>Câu {index + 1}/{questions.length}</h3>
                <p>{current.question}</p>
            </div>

            <div className="options">
                {current.options.map((option, idx) => {
                let className = 'option';
                if (showAnswer) {
                    if (option === current.answer) className += ' correct';
                    else if (option === selected) className += ' incorrect';
                } else if (option === selected) className += ' selected';

                return (
                    <button
                        key={idx}
                        className={className}
                        onClick={() => handleSelect(option)}
                        disabled={showAnswer}
                        >
                        {option}
                    </button>
                )
                })}</div>

            {showAnswer && (
                <button onClick={handleNext}>Câu tiếp theo</button>
            )}
            </div>
        )}
        </div>

        <div className="right">
            <ul className="money-list">
                {moneyList.map((item) => (
                <li
                    key={item.id}
                    className={index + 1 === item.id ? "money-item active" : "money-item"}
                >
                    <span className="number">{item.id}</span>
                    <span className="amount">{item.amount}</span>
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default QuizApp
