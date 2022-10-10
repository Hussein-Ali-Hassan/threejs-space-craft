import { useRef } from "react";
import { TextureLoader } from "three";
import { useFrame } from "react-three-fiber";

// Draws two sprites in front of the ship indicating the direction of fire.
// Uses a TextureLoader to load transparent PNG, and sprite to render on a 2d plane facing the camera.
export default function Gun() {
  const rearTarget = useRef();
  const frontTarget = useRef();

  const loader = new TextureLoader();
  // A png with transparency to use as the target sprite.
  const texture = loader.load("/target.png");

  // Update the position of the reticle based on the ships current position.
  useFrame(({ mouse }) => {
    rearTarget.current.position.y = -mouse.y * 10;
    rearTarget.current.position.x = -mouse.x * 30;

    frontTarget.current.position.y = -mouse.y * 20;
    frontTarget.current.position.x = -mouse.x * 60;
  });
  // Sprite material has a prop called map to set the texture on.
  return (
    <group>
      <sprite position={[0, 0, -8]} ref={rearTarget}>
        <spriteMaterial attach="material" map={texture} />
      </sprite>
      <sprite position={[0, 0, -16]} ref={frontTarget}>
        <spriteMaterial attach="material" map={texture} />
      </sprite>
    </group>
  );
}
