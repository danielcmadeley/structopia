from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from mangum import Mangum


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://structopia-web.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MultiplyInput(BaseModel):
    num1: float
    num2: float

@app.post("/multiply")
async def multiply(input: MultiplyInput):
    result = input.num1 * input.num2
    return {"result": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

handler = Mangum(app)