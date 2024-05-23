/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as random from "maath/random/dist/maath-random.esm";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Stars = ({ size,item, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(item), { radius: 1.4 }));

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

// eslint-disable-next-line react/prop-types
const StarsCanvas = ({ size,item }) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars size={size} item={item}/>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
