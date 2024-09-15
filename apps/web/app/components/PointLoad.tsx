"use client";

import { useState, useEffect } from "react";

const PointLoadCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(10);
  const [load, setLoad] = useState<number>(1000);
  const [loadPosition, setLoadPosition] = useState<number>(5);
  const [elasticModulus, setElasticModulus] = useState<number>(200e9);
  const [momentOfInertia, setMomentOfInertia] = useState<number>(1e-6);
  const [result, setResult] = useState<{
    maxDeflection: number;
    maxMoment: number;
    deflectionCurve: { x: number; y: number }[];
  } | null>(null);

  const [svgWidth, setSvgWidth] = useState<number>(300);
  const [deflectionScale, setDeflectionScale] = useState<number>(20);
  const svgHeight = 100;
  const beamY = 50;

  useEffect(() => {
    const updateSvgWidth = () => {
      setSvgWidth(Math.min(window.innerWidth - 40, 500));
    };
    updateSvgWidth();
    window.addEventListener("resize", updateSvgWidth);
    return () => window.removeEventListener("resize", updateSvgWidth);
  }, []);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://structopia-backend.vercel.app"
      : "http://localhost:8000";

  const handleCalculate = async () => {
    try {
      const response = await fetch(`${apiUrl}/point-load-calcs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          length,
          load,
          loadPosition,
          elasticModulus,
          momentOfInertia,
        }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const loadPositionX = (loadPosition / length) * svgWidth;

  const generateDeflectionPath = () => {
    if (!result) return "";
    const path = result.deflectionCurve.map((point, index) => {
      const x = (point.x / length) * svgWidth;
      const y = beamY - point.y * deflectionScale;
      return `${index === 0 ? "M" : "L"} ${x},${y}`;
    });
    return path.join(" ");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Point Load Beam Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2">
          Beam Length (m):
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Math.max(0, parseFloat(e.target.value)))}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Load (N):
          <input
            type="number"
            value={load}
            onChange={(e) => setLoad(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Load Position from Left End (m):
          <input
            type="number"
            value={loadPosition}
            onChange={(e) =>
              setLoadPosition(
                Math.min(length, Math.max(0, parseFloat(e.target.value)))
              )
            }
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Elastic Modulus (Pa):
          <input
            type="number"
            value={elasticModulus}
            onChange={(e) => setElasticModulus(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Moment of Inertia (m^4):
          <input
            type="number"
            value={momentOfInertia}
            onChange={(e) => setMomentOfInertia(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
      <div className="mb-4">
        <label className="block mb-2">
          Deflection Scale:
          <input
            type="range"
            min="1"
            max="100"
            value={deflectionScale}
            onChange={(e) => setDeflectionScale(Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
      <div className="mt-4">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="bg-gray-800 rounded"
        >
          <line
            x1="0"
            y1={beamY}
            x2={svgWidth}
            y2={beamY}
            stroke="white"
            strokeWidth="2"
          />
          {result && (
            <path
              d={generateDeflectionPath()}
              stroke="yellow"
              strokeWidth="2"
              fill="none"
            />
          )}
          <line
            x1={loadPositionX}
            y1={beamY}
            x2={loadPositionX}
            y2="0"
            stroke="red"
            strokeWidth="2"
          />
          <polygon
            points={`${loadPositionX - 10},0 ${loadPositionX + 10},0 ${loadPositionX},20`}
            fill="red"
          />
          <text x="5" y={beamY + 20} fontSize="12" fill="white">
            0
          </text>
          <text x={svgWidth - 20} y={beamY + 20} fontSize="12" fill="white">
            {length}
          </text>
          <text
            x={loadPositionX}
            y={beamY + 20}
            fontSize="12"
            textAnchor="middle"
            fill="white"
          >
            {loadPosition.toFixed(2)}
          </text>
        </svg>
      </div>
      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Results:</h2>
          <p>Maximum Deflection: {result.maxDeflection.toFixed(6)} m</p>
          <p>Maximum Moment: {result.maxMoment.toFixed(2)} N·m</p>
        </div>
      )}
    </div>
  );
};

export default PointLoadCalculator;
