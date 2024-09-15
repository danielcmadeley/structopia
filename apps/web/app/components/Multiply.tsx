"use client";

import { useState } from "react";

export const Multiply = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://structopia-backend.vercel.app"
      : "http://localhost:8000";

  const handleMultiply = async () => {
    try {
      const response = await fetch(`${apiUrl}/multiply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2 }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDivideByTwo = async () => {
    if (result !== null) {
      try {
        const response = await fetch(`${apiUrl}/divide-by-two`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ number: result }),
        });
        const data = await response.json();
        setResult(data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value))}
        placeholder="Enter second number"
      />
      <button onClick={handleMultiply}>Multiply</button>
      {result !== null && (
        <div>
          <p>Result: {result}</p>
          <button onClick={handleDivideByTwo}>Divide by 2</button>
        </div>
      )}{" "}
    </div>
  );
};
