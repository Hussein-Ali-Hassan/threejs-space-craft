import { useRecoilValue } from "recoil";

import { laserPositionState } from "../state/game";

// Draws all of the lasers existing in state.
export default function Lasers() {
  const lasers = useRecoilValue(laserPositionState);

  return (
    <group>
      {lasers.map((laser) => (
        <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial emissive="white" wireframe />
        </mesh>
      ))}
    </group>
  );
}
