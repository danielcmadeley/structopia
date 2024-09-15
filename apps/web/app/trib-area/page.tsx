// @ts-nocheck

"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface Column {
  id: number;
  x: number;
  y: number;
}

interface Floor {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface TributaryArea {
  columnIndex: number;
  area: number;
}

const TribAreaPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.OrthographicCamera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [controls, setControls] = useState<OrbitControls | null>(null);
  const [columns, setColumns] = useState<Column[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [mode, setMode] = useState<"column" | "floor">("column");
  const [floorStart, setFloorStart] = useState<Column | null>(null);
  const [floorArea, setFloorArea] = useState<number | null>(null);
  const [tributaryAreas, setTributaryAreas] = useState<TributaryArea[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up Three.js scene
    const newScene = new THREE.Scene();
    newScene.background = new THREE.Color(0xffffff);

    const aspect =
      containerRef.current.clientWidth / containerRef.current.clientHeight;
    const frustumSize = 50;
    const newCamera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    newCamera.position.set(0, 0, 100);

    const newRenderer = new THREE.WebGLRenderer({ antialias: true });
    newRenderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(newRenderer.domElement);

    const newControls = new OrbitControls(newCamera, newRenderer.domElement);
    newControls.enableRotate = false;
    newControls.enableZoom = true;
    newControls.enablePan = true;

    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);
    setControls(newControls);

    // Draw grid
    const gridHelper = new THREE.GridHelper(50, 50);
    gridHelper.rotation.x = Math.PI / 2;
    newScene.add(gridHelper);

    const animate = () => {
      requestAnimationFrame(animate);
      newControls.update();
      newRenderer.render(newScene, newCamera);
    };
    animate();

    return () => {
      newRenderer.dispose();
      containerRef.current?.removeChild(newRenderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!scene) return;

    // Clear previous objects
    scene.children = scene.children.filter(
      (child) => child instanceof THREE.GridHelper
    );

    // Draw columns with labels
    columns.forEach((column) => {
      const geometry = new THREE.CircleGeometry(0.5, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const circle = new THREE.Mesh(geometry, material);
      circle.position.set(column.x - 25, column.y - 25, 1);
      scene.add(circle);

      // Create text label for column
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, 64, 64);
        context.font = "bold 40px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(column.id.toString(), 32, 32);

        const texture = new THREE.CanvasTexture(canvas);
        const labelMaterial = new THREE.SpriteMaterial({ map: texture });
        const label = new THREE.Sprite(labelMaterial);
        label.position.set(column.x - 25, column.y - 25, 2);
        label.scale.set(1, 1, 1);
        scene.add(label);
      }
    });

    // Draw floors
    floors.forEach((floor) => {
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const points = [
        new THREE.Vector3(floor.x1 - 25, floor.y1 - 25, 1),
        new THREE.Vector3(floor.x2 - 25, floor.y2 - 25, 1),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    });

    // Draw tributary areas
    tributaryAreas.forEach((tribArea) => {
      const column = columns[tribArea.columnIndex];
      const geometry = new THREE.CircleGeometry(
        Math.sqrt(tribArea.area / Math.PI),
        32
      );
      const material = new THREE.LineBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.5,
      });
      const circle = new THREE.Line(geometry);
      circle.position.set(column.x - 25, column.y - 25, 2);
      scene.add(circle);

      // Add text for area and column ID
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = "12px Arial";
        context.fillStyle = "black";
        context.fillText(
          `Col ${column.id}: ${tribArea.area.toFixed(2)} m²`,
          0,
          12
        );
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(column.x - 24.5, column.y - 24.5, 3);
        sprite.scale.set(5, 2.5, 1);
        scene.add(sprite);
      }
    });

    // Draw floor area
    if (floorArea !== null) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = "16px Arial";
        context.fillStyle = "black";
        context.fillText(`Floor Area: ${floorArea.toFixed(2)} m²`, 0, 16);
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(-24, 24, 3);
        sprite.scale.set(10, 2.5, 1);
        scene.add(sprite);
      }
    }
  }, [columns, floors, tributaryAreas, floorArea, scene]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!camera || !renderer) return;

    const rect = renderer.domElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({ x, y }, camera);

    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersectPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersectPoint);

    const gridX = Math.round((intersectPoint.x + 25) / 1) * 1;
    const gridY = Math.round((intersectPoint.y + 25) / 1) * 1;

    if (mode === "column") {
      const isOccupied = columns.some(
        (col) => col.x === gridX && col.y === gridY
      );

      if (!isOccupied) {
        const newColumn = { id: columns.length + 1, x: gridX, y: gridY };
        const newColumns = [...columns, newColumn];
        setColumns(newColumns);
        calculateTributaryAreas(newColumns);
      }
    } else if (mode === "floor") {
      if (floorStart) {
        const newFloors = [
          ...floors,
          { x1: floorStart.x, y1: floorStart.y, x2: gridX, y2: gridY },
        ];
        setFloors(newFloors);
        setFloorStart(null);

        if (isClosedShape(newFloors)) {
          calculateTributaryAreas(columns);
        }
      } else {
        setFloorStart({ x: gridX, y: gridY });
      }
    }
  };

  const isClosedShape = (floors: Floor[]): boolean => {
    if (floors.length < 3) return false;
    const start = floors[0];
    const end = floors[floors.length - 1];
    return start.x1 === end.x2 && start.y1 === end.y2;
  };

  const calculateTributaryAreas = async (columns: Column[]) => {
    if (columns.length < 3 || floors.length < 3) return;

    try {
      const response = await fetch(
        "http://localhost:8000/calculate-trib-area",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns, floors }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to calculate tributary areas");
      }

      const data = await response.json();
      setTributaryAreas(data.tributaryAreas);
      setFloorArea(data.floorArea);
    } catch (error) {
      console.error("Error calculating tributary areas:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <button onClick={() => setMode("column")} className="mr-2">
          Draw Columns
        </button>
        <button onClick={() => setMode("floor")}>Draw Floors</button>
      </div>
      {floorArea !== null && (
        <div className="mb-4">
          <p>Floor Area: {floorArea.toFixed(2)} m²</p>
          <p>Tributary Areas:</p>
          <ul>
            {tributaryAreas.map((tribArea) => (
              <li key={tribArea.columnIndex}>
                Column {columns[tribArea.columnIndex].id}:{" "}
                {tribArea.area.toFixed(2)} m²
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        ref={containerRef}
        onClick={handleCanvasClick}
        style={{ width: "500px", height: "500px" }}
        className="border border-gray-300"
      />
    </div>
  );
};

export default TribAreaPage;
