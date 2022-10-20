import React, {useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {BakeShadows, Bounds, ContactShadows, Float, OrbitControls} from '@react-three/drei'
import Model from './Model'

export default function Viewer() {
  const ref:any = useRef()
  return (
      <Canvas dpr={[1,2]} camera={{position: [25,10,10]}}>
          <ambientLight intensity={0.2}/>
          <spotLight castShadow color="orange" intensity={2} position={[-50, 50, 40]} angle={0.25} penumbra={1} shadow-mapSize={[128, 128]} shadow-bias={0.00005} />

          <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" />

          <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
          <BakeShadows />
          <OrbitControls autoRotate minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} enableZoom={false} enablePan={false}/>

          <group position={[0,-1.5,0]}>
          <Float speed={3}  floatIntensity={1}>
            <mesh castShadow receiveShadow>
                <Bounds>
                    <Model/>
                </Bounds>
              <meshStandardMaterial color={'white'} roughness={0}/>
            </mesh>
          </Float>
        </group>
        <mesh scale={10} receiveShadow>
        </mesh>
      </Canvas>
  )
}
