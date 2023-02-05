import { atom } from "recoil";

export const shipPositionState = atom({
  key: "shipPosition", // unique ID (with respect to other atoms/selectors)
  default: { position: {}, rotation: {} }, // default value (aka initial value)
});

export const enemyPositionState = atom({
  key: "enemyPosition", // unique ID (with respect to other atoms/selectors)
  default: [
    { x: -10, y: 10, z: -80 },
    { x: 20, y: 20, z: -100 },
    { x: 10, y: 10, z: -120 },
    { x: -10, y: 15, z: -150 },
    { x: 10, y: 8, z: -165 },
    { x: -10, y: 22, z: -190 },
  ],
});

export const laserPositionState = atom({
  key: "laserPositions", // unique ID (with respect to other atoms/selectors)
  default: [],
});

export const scoreState = atom({
  key: "score", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
