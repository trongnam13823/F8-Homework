import { useState } from "react";

const styles = {
  container: {
    padding: "30px",
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "80%",
    padding: "10px",
    margin: "8px 0",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  buttonGroup: {
    marginTop: "15px",
  },
  button: {
    padding: "10px 20px",
    margin: "6px",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "6px",
    transition: "background-color 0.3s",
  },
  clearButton: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#f44336",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#222",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

const parseNumber = (value) => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
};

const validateInputs = (num1, num2) => {
  if (num1 === null || num2 === null) {
    return "Vui lòng nhập đầy đủ hai số hợp lệ.";
  }
  return null;
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) return "Không thể chia cho 0.";
      return num1 / num2;

    default:
      return "Phép toán không hợp lệ.";
  }
};

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("Chưa có kết quả");

  const handleOperation = (operator) => {
    const num1 = parseNumber(firstNumber);
    const num2 = parseNumber(secondNumber);

    const validationError = validateInputs(num1, num2);
    if (validationError) {
      setResult(validationError);
      return;
    }

    const res = calculate(num1, num2, operator);
    setResult(res);
  };

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult("Chưa có kết quả");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

      <input
        type="number"
        placeholder="Số thứ nhất"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Số thứ hai"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => handleOperation("+")}>
          +
        </button>
        <button style={styles.button} onClick={() => handleOperation("-")}>
          −
        </button>
        <button style={styles.button} onClick={() => handleOperation("*")}>
          ×
        </button>
        <button style={styles.button} onClick={() => handleOperation("/")}>
          ÷
        </button>
      </div>

      <div style={styles.result}>
        <strong>Kết quả:</strong> <span>{result}</span>
      </div>

      <button style={styles.clearButton} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default Calculator;
