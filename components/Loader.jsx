// Just a placeholder sphere to use with React Suspense while waiting for loaders to resolve.
export default function Loading() {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry  args={[1, 16, 16]} />
      <meshStandardMaterial
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}