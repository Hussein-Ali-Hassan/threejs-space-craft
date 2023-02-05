import { useRecoilState } from "recoil";
import { useFrame } from "@react-three/fiber";

import { distance } from "../utils";
import {
  enemyPositionState,
  laserPositionState,
  scoreState,
} from "../state/game";
import { useEffect } from "react";

// This component runs game logic on each frame draw to update game state.
export default function GameTimer({
  ENEMY_SPEED,
  LASER_Z_VELOCITY,
  LASER_RANGE,
  GROUND_HEIGHT,
}) {
  const [enemies, setEnemies] = useRecoilState(enemyPositionState);
  const [lasers, setLaserPositions] = useRecoilState(laserPositionState);
  const [score, setScore] = useRecoilState(scoreState);

  useEffect(() => {
    if (enemies.length === 0) window.location.reload();
  }, [enemies]);

  useFrame(() => {
    // Calculate hits and remove lasers and enemies, increase score.

    const hitEnemies = enemies
      ? enemies.map(
          (enemy) =>
            lasers.filter(
              () =>
                lasers.filter((laser) => distance(laser, enemy) < 3).length > 0
            ).length > 0
        )
      : [];

    if (hitEnemies.includes(true) && enemies.length > 0) {
      setScore(score + 1);
    }

    // Move all of the enemies. Remove enemies that have been destroyed, or passed the player.
    setEnemies(
      enemies
        .map((enemy) => ({ x: enemy.x, y: enemy.y, z: enemy.z + ENEMY_SPEED }))
        .filter((enemy, idx) => !hitEnemies[idx] && enemy.z < 0)
    );

    // Move the Lasers and remove lasers at end of range or that have hit the ground.
    setLaserPositions(
      lasers
        .map((laser) => ({
          id: laser.id,
          x: laser.x + laser.velocity[0],
          y: laser.y + laser.velocity[1],
          z: laser.z - LASER_Z_VELOCITY,
          velocity: laser.velocity,
        }))
        .filter((laser) => laser.z > -LASER_RANGE && laser.y > GROUND_HEIGHT)
    );
  });

  return null;
}
