import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, Bounds, BakeShadows } from '@react-three/drei'
import Model from './Model'

export default function Viewer() {
  const ref = useRef()
  return (
    <div className="webgl-render h-800 pointer-events-none ">
      <Canvas
        flat
        linear
        className="canvas"
        //orthographic
        shadows
        //dpr={[1, 2]}
        //camera={{ fov: 10, position: [-90, 100, 85], zoom: 6 }}
      >
        <ambientLight intensity={1} />
        <hemisphereLight intensity={20} color="#8040df" groundColor="blue" />
        <spotLight
          //castShadow
          color="orange"
          intensity={0.2}
          position={[10, 60, 40]}
          angle={0.25}
          penumbra={0}
          shadow-mapSize={[128, 128]}
          shadow-bias={0.00005}
        />
        <directionalLight
          //castShadow
          intensity={0.02}
          //isDirectionalLight="true"
          position={[0, 1, 10]}
          shadow-mapSize={[1024, 1024]}
        ></directionalLight>
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.0}>
            <Model />
          </Bounds>
        </Suspense>
        <OrbitControls
          ref={ref}
          makeDefault
          minAzimuthAngle={-2}
          //maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={false}
          enablePan={false}
          //zoomSpeed={0.3}
        />
        <mesh scale={200} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 4]} receiveShadow>
          <planeGeometry />
          <shadowMaterial transparent opacity={0.45} />
        </mesh>
      </Canvas>
    </div>
  )
}
