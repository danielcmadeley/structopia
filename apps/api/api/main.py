from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
from scipy.spatial import Voronoi

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

class PointLoadCalcInput(BaseModel):
    length: float
    load: float
    loadPosition: float
    elasticModulus: float
    momentOfInertia: float

@app.post("/point-load-calcs")
async def point_load_calcs(input: PointLoadCalcInput):
    a = input.loadPosition
    b = input.length - input.loadPosition
    max_deflection = (input.load * b * (input.length ** 2 - b ** 2) ** 1.5) / (9 * (3 ** 0.5) * input.elasticModulus * input.momentOfInertia * input.length)
    max_moment = (input.load * a * b) / input.length

    # Calculate deflection curve
    x = np.linspace(0, input.length, 100)
    y = np.piecewise(x, 
        [x <= a, x > a], 
        [lambda x: (input.load * b * x * (input.length**2 - b**2 - x**2)) / (6 * input.length * input.elasticModulus * input.momentOfInertia),
         lambda x: (input.load * a * (input.length - x) * (2*input.length*x - x**2 - a**2)) / (6 * input.length * input.elasticModulus * input.momentOfInertia)]
    )

    deflection_curve = [{"x": float(xi), "y": float(yi)} for xi, yi in zip(x, y)]

    return {
        "maxDeflection": max_deflection, 
        "maxMoment": max_moment,
        "deflectionCurve": deflection_curve
    }

class TribAreaInput(BaseModel):
    columns: list[dict]
    floors: list[dict]

@app.post("/calculate-trib-area")
async def calculate_trib_area(input: TribAreaInput):
    # Extract column coordinates
    points = np.array([[col['x'], col['y']] for col in input.columns])
    
    # Calculate Voronoi diagram
    vor = Voronoi(points)
    
    # Calculate tributary areas
    trib_areas = []
    for i, point in enumerate(points):
        region = vor.point_region[i]
        if region != -1:
            polygon = vor.vertices[vor.regions[region]]
            area = calculate_polygon_area(polygon)
            trib_areas.append({"columnIndex": i, "area": area})
    
    # Calculate floor area
    floor_area = calculate_floor_area(input.floors)
    
    return {
        "tributaryAreas": trib_areas,
        "floorArea": floor_area
    }

def calculate_polygon_area(polygon):
    x = [p[0] for p in polygon]
    y = [p[1] for p in polygon]
    return 0.5 * np.abs(np.dot(x, np.roll(y, 1)) - np.dot(y, np.roll(x, 1)))

def calculate_floor_area(floors):
    area = 0
    for i in range(len(floors)):
        current = floors[i]
        next = floors[(i + 1) % len(floors)]
        area += (current['x1'] * next['y1'] - next['x1'] * current['y1'])
    return abs(area / 2)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)