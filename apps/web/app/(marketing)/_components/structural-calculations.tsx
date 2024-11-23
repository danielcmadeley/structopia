"use client";

import { MathJax, MathJaxContext } from "better-react-mathjax";
export default function StructuralCalculations() {
  return (
    <div className="w-full h-screen flex flex-col max-w-6xl mx-auto">
      <div className="flex">
        <h1 className="text-3xl font-bold text-stone-50 uppercase py-8">
          Structural Calculations
        </h1>
      </div>
      <div className="w-full text-stone-50 font-roboto font-thin flex-1">
        <div className="border border-stone-600 rounded-sm h-full flex flex-col">
          <div className="h-[150px] flex w-full">
            <div className="w-[20%] border-r border-b border-stone-600 flex flex-col justify-center items-start p-2">
              <div className="h-full">
                <h1>NAME:</h1>
              </div>
              <div className="h-full">
                <h1>ID:</h1>
              </div>
              <div className="h-full">
                <h1>DATE:</h1>
              </div>
            </div>
            <div className="w-[80%] flex flex-col justify-between h-full border-b border-stone-600 ">
              <div className="w-full h-full border-b border-stone-600 flex justify-start items-center">
                <h2 className="text-center p-2">JOB TITLE:</h2>
              </div>
              <div className="w-full h-full flex">
                <div className="border-r border-stone-600 w-[40.625%] h-full flex justify-start items-center">
                  <h1 className="text-center p-2">CALCULATION BY:</h1>
                </div>
                <div className="border-r border-stone-600 w-[40.625%] h-full flex justify-start items-center">
                  <h1 className="text-center p-2">CHECKED BY:</h1>
                </div>
                <div className="w-[18.75%] h-full flex justify-start items-center">
                  <h1 className="text-center p-2">PAGE: 1/10</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[75px] border-b border-stone-600 flex">
            <div className="w-[20%] border-r border-stone-600 h-full flex justify-center items-center">
              <h1 className="text-center">REFERENCE</h1>
            </div>
            <div className="w-[65%] border-r border-stone-600 h-full flex justify-center items-center">
              <h1 className="text-center">CALCULATION</h1>
            </div>
            <div className="w-[15%] h-full flex justify-center items-center">
              <h1 className="text-center">OUTPUT</h1>
            </div>
          </div>
          <div className="w-full h-full flex">
            <div className="w-[20%] border-r border-stone-600 h-full flex justify-center items-center"></div>
            <div className="w-[65%] border-r border-stone-600 h-full flex justify-center items-center">
              <MathJaxContext>
                <h2>Basic MathJax example with Latex</h2>
                <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
              </MathJaxContext>
            </div>
            <div className="w-[15%] h-full flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
