import {useGLTF} from "@react-three/drei";

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/Sketchfab_2022_07_13_03_57_21.glb')

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['CPlanetEarth.ICE']}
        position={[0, -0.19, 0]}
      />
      <group scale={[0.57, 0.57, 0.7]}>
        <mesh castShadow receiveShadow geometry={nodes.Mball1078.geometry} material={materials['CARTOON.CLOUDS.001']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball1078_1.geometry}
          material={materials['CTOON.EARTH.TERRAIN.001']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Mball1078_2.geometry} material={materials['CE.ICE.001']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Sphere001.geometry} material={materials.CPlanetEarth_OCEAN} />
    </group>
  )
}

useGLTF.preload('/Sketchfab_2022_07_13_03_57_21.glb')

export default Model
