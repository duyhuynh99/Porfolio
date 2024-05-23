/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ size, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 1.4 }));

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime / 10.001;
    ref.current.rotation.y = state.clock.elapsedTime / 15.001;
  });

  return (
    <group rotation={[0.001, 0.001, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled>
        <PointMaterial
          transparent
          color='#f272c8'
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ size }) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars size={size} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
