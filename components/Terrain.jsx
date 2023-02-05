import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// A Ground plane that moves relative to the player. The player stays at 0,0
export default function Terrain({ GROUND_HEIGHT }) {
  const terrain = useRef();

  useFrame(() => {
    terrain.current.position.z += 0.4;
  });
  // Returns a mesh at GROUND_HEIGHT below the player. Scaled to 5000, 5000 with 128 segments.
  // X Rotation is -Math.PI / 2 which is 90 degrees in radians.

  return (
    <mesh
      position={[0, GROUND_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrain}
    >
      <planeGeometry args={[15000, 15000, 128, 128]} />
      <meshStandardMaterial
        color="white"
        roughness={1}
        metalness={0}
        wireframe
      />
    </mesh>
  );
}
