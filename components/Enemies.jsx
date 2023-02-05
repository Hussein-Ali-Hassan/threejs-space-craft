import { useRecoilValue } from "recoil";

import { enemyPositionState } from "../state/game";

// Manages Drawing enemies that currently exist in state
export default function Enemies() {
  const enemies = useRecoilValue(enemyPositionState);

  return (
    <group>
      {enemies.map((enemy) => (
        <mesh
          position={[enemy.x, enemy.y, enemy.z]}
          key={`${enemy.x}-${enemy.y}-${enemy.z}`}
        >
          <sphereGeometry args={[2, 8, 8]} />
          <meshStandardMaterial color="white" wireframe />
        </mesh>
      ))}
    </group>
  );
}
