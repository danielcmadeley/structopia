from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://structopia-web.vercel.app", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def health_check():
    return "The health check is successful!"

class MultiplyInput(BaseModel):
    num1: float
    num2: float

@app.post("/multiply")
async def multiply(input: MultiplyInput):
    result = input.num1 * input.num2
    return {"result": result}

class BeamCalcInput(BaseModel):
    length: float
    load: float
    elasticity: float
    inertia: float

@app.post("/beam-calcs")
async def beam_calcs(input: BeamCalcInput):
    deflection = (5 * input.load * input.length**4) / (384 * input.elasticity * input.inertia)
    moment = (input.load * input.length**2) / 8
    return {"deflection": deflection, "moment": moment}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)