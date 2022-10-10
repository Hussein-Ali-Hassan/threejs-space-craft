import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { RecoilRoot } from "recoil";

import LaserController from "../components/LaserController";
import GameTimer from "../components/GameTimer";
import Terrain from "../components/Terrain";
import Enemies from "../components/Enemies";
import ArWing from "../components/AirWing";
import Lasers from "../components/Lasers";
import Loader from "../components/Loader";
import Gun from "../components/Gun";

// Game settings.
const LASER_RANGE = 100;
const LASER_Z_VELOCITY = 1;
const ENEMY_SPEED = 0.1;
const GROUND_HEIGHT = -50;

export default function Home() {
  return (
    <Canvas style={{ background: "black" }}>
      <RecoilRoot>
        <directionalLight intensity={1} />
        <ambientLight intensity={0.1} />
        <Terrain GROUND_HEIGHT={GROUND_HEIGHT} />
        <Suspense fallback={<Loader />}>
          <ArWing />
        </Suspense>
        <Gun />
        <Enemies />
        <Lasers />
        <LaserController />
        <GameTimer
          LASER_RANGE={LASER_RANGE}
          LASER_Z_VELOCITY={LASER_Z_VELOCITY}
          ENEMY_SPEED={ENEMY_SPEED}
          GROUND_HEIGHT={GROUND_HEIGHT}
        />
      </RecoilRoot>
    </Canvas>
  );
}
