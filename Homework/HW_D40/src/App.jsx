import { QuizProvider } from './Provider/Quiz/quizContent.jsx';
import QuizApp from './Provider/Quiz/QuizApp';



function App() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}

export default App;
