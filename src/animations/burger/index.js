import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Box } from "./Box";

const Burger = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <Stars />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Burger;
