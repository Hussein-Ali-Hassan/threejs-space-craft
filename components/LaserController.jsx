import { useRecoilValue, useRecoilState } from "recoil";

import { shipPositionState, laserPositionState } from "../state/game";

// An invisible clickable element in the front of the scene.
// Manages creating lasers with the correct initial velocity on click.
export default function LaserController() {
  const shipPosition = useRecoilValue(shipPositionState);
  const [lasers, setLasers] = useRecoilState(laserPositionState);

  return (
    <mesh
      position={[0, 0, -8]}
      onClick={() =>
        setLasers([
          ...lasers,
          {
            id: Math.random(), // This needs to be unique.. Random isn't perfect but it works. Could use a uuid here.
            x: 0,
            y: 0,
            z: 0,
            velocity: [
              shipPosition.rotation.x * 6,
              shipPosition.rotation.y * 5,
            ],
          },
        ])
      }
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="orange" emissive="#ff0860" visible={false} />
    </mesh>
  );
}
