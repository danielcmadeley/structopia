"use client";

import { useState } from "react";

export const BeamCalc = () => {
  const [length, setLength] = useState<number>(0);
  const [load, setLoad] = useState<number>(0);
  const [elasticity, setElasticity] = useState<number>(0);
  const [inertia, setInertia] = useState<number>(0);
  const [result, setResult] = useState<{
    deflection: number;
    moment: number;
  } | null>(null);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://structopia-backend.vercel.app"
      : "http://localhost:8000";

  const handleCalculate = async () => {
    try {
      const response = await fetch(`${apiUrl}/beam-calcs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ length, load, elasticity, inertia }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Beam Deflection and Moment Calculator</h1>
      <div>
        <label>
          Beam Length (m):
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Uniform Load (N/m):
          <input
            type="number"
            value={load}
            onChange={(e) => setLoad(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Modulus of Elasticity (Pa):
          <input
            type="number"
            value={elasticity}
            onChange={(e) => setElasticity(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Moment of Inertia (m^4):
          <input
            type="number"
            value={inertia}
            onChange={(e) => setInertia(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result && (
        <div>
          <h2>Results:</h2>
          <p>Maximum Deflection: {result.deflection.toFixed(2)} m</p>
          <p>Maximum Moment: {result.moment.toFixed(2)} N·m</p>
        </div>
      )}
    </div>
  );
};
