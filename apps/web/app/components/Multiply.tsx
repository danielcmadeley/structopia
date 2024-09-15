"use client";

import { useState } from "react";

export const Multiply = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleMultiply = async () => {
    try {
      const response = await fetch(
        "https://structopia-backend.vercel.app/multiply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ num1, num2 }),
        }
      );
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
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
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};
