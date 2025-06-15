import { useState } from 'react'
import './App.css'

const styles = {
    container: {
      padding: '30px',
      maxWidth: '400px',
      margin: '50px auto',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '80%',
      padding: '10px',
      margin: '8px 0',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '6px',
    },
    buttonGroup: {
      marginTop: '15px',
    },
    button: {
      padding: '10px 20px',
      margin: '6px',
      fontSize: '18px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '6px',
      transition: 'background-color 0.3s',
    },
    clearButton: {
      marginTop: '15px',
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      backgroundColor: '#f44336',
      color: 'white',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    result: {
      marginTop: '20px',
      fontSize: '18px',
      color: '#222',
    },
  };

function App() {

  const [firstNumb, setFirstNumb] = useState('')
  const [secondNumb, setSecondNumb] = useState('')
  const [result, setResult] = useState('no results yet')

  const onChangeFirstNumb = (e) => {
    setFirstNumb(e.target.value)
  }

  const onChangeSecondNumb = (e) => {
    setSecondNumb(e.target.value)
  }

  const sum = (a, b) => a + b
  const minus = (a, b) => a - b
  const times = (a, b) => a * b
  const divided = (a, b) => a / b


  const operator = {
    sum, minus, times, divided
  }

  const onCalculate = (operation) => {
    const a = parseFloat(firstNumb)
    const b = parseFloat(secondNumb)
    // console.log(result)

    if (isNaN(a) || isNaN(b)) {
      setResult('invalid')
      return
    }

    if (operation === 'divided' && b === 0) {
      setResult('error')
      return
    }

    const calc = operator[operation](a, b)
    setResult(calc)
  }

  const onClear = () => {
    setFirstNumb('')
    setSecondNumb('')
    setResult('no results yet')
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

      <input
        type="number"
        placeholder="Số thứ nhất"
        style={styles.input}
        value={firstNumb}
        onChange={onChangeFirstNumb}
      />
      <input
        type="number"
        placeholder="Số thứ hai"
        style={styles.input}
        value={secondNumb}
        onChange={onChangeSecondNumb}
      />

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => onCalculate('sum')}>+</button>
        <button style={styles.button} onClick={() => onCalculate('minus')}>−</button>
        <button style={styles.button} onClick={() => onCalculate('times')}>×</button>
        <button style={styles.button} onClick={() => onCalculate('divided')}>÷</button>
      </div>

      <div style={styles.result}>
        <strong>Kết quả:</strong> <span>{result}</span>
      </div>

      <button style={styles.clearButton} onClick={onClear}>Clear</button>
    </div>
  );
}

export default App
