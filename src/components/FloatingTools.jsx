import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// This component now manages its own rotation
function ToolText({ text, color, position, rotation }) {
  const ref = useRef();
  return (
    <group position={position} rotation={rotation}>
      <Center>
        <Text3D
          ref={ref}
          font="https://raw.githubusercontent.com/pmndrs/drei-assets/main/fonts/inter_regular.json"
          size={0.8}
          height={0.1}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </Text3D>
      </Center>
    </group>
  );
}

// Main scene component
const FloatingTools = () => {
  const groupRef = useRef();

  // Rotate the entire group of tools
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3; // Adjust rotation speed
    }
  });

  // Memoize the tool data to prevent re-renders
  const tools = useMemo(() => [
    { text: "Py", color: "#3B82F6", position: [3, 2, 0], rotation: [0, -Math.PI / 4, 0] },
    { text: "TF", color: "#F97316", position: [-3, 1, 0], rotation: [0, Math.PI / 4, 0] },
    { text: "SQL", color: "#A855F7", position: [0, -2, 3], rotation: [0, 0, 0] },
    { text: "C#", color: "#10B981", position: [0, 0, -3], rotation: [0, -Math.PI / 2, 0] },
    { text: "RL", color: "#EC4899", position: [2, -2.5, -1], rotation: [0, Math.PI / 6, 0] },
  ], []);

  return (
    <Canvas 
      camera={{ position: [0, 2, 10], fov: 50 }} 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={150} />

      <group ref={groupRef}>
        {tools.map((tool, i) => <ToolText key={i} {...tool} />)}
      </group>
    </Canvas>
  );
};

export default FloatingTools;