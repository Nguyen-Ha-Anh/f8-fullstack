import { useState } from "react";

function App() {
    const [score, setScore] = useState('')

    let message = 'nhap diem'
    const numericScore = parseFloat(score)

    if (score) {
        if (isNaN(numericScore)|| numericScore > 10 || numericScore < 0) {
            message = 'khong hop le'
        } 
        else if (score < 5) {
            message = 'yeu'
        }
        else if (5 <= score <= 6) {
            message = 'trung binh'
        }
        else if (7 <= score <= 8) {
            message = 'kha'
        }
        else if (9 <= score <= 10) {
            message = 'gioi'
        }
    }

    return (
        <div>
            <input 
            type="number"
            placeholder="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            />
            <div>{message}</div>
        </div>
    )
    
}

export default App
