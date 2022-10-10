import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useRecoilState } from "recoil";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { shipPositionState } from "../state/game";

// The players ship model. On each frame, check the cursor position and move the ship to point in the
// correct direction. Save ship position in state in order to drive other components like target reticle, and
// laser velocity.
export default function ArWing() {
  const [shipPosition, setShipPosition] = useRecoilState(shipPositionState);
  const ship = useRef();
  useFrame(({ mouse }) => {
    setShipPosition({
      position: { x: mouse.x * 6, y: mouse.y * 2 },
      rotation: { z: -mouse.x * 0.5, x: -mouse.x * 0.5, y: -mouse.y * 0.2 },
    });
  });
  // Update the ships position from the updated state.
  useFrame(() => {
    ship.current.rotation.z = shipPosition.rotation.z;
    ship.current.rotation.y = shipPosition.rotation.x;
    ship.current.rotation.x = shipPosition.rotation.y;
    ship.current.position.y = shipPosition.position.y;
    ship.current.position.x = shipPosition.position.x;
  });

  const { nodes } = useLoader(GLTFLoader, "/arwing.glb");
  return (
    <group ref={ship}>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
}
