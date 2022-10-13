import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import AvatarIcon from '../Avatar/AvatarIcon'
import Viewer from './ModelViewer'

const nelsonUrl =
  'https://www.csus.edu/university-advancement/university-foundation/meet-us/_internal/photos/robert-nelsen.jpg'

export const WorldView = () => {
  return (
    <div className={` h-800 w-full  bg-black relative`}>
      <Canvas>
        <Stars />
      </Canvas>

      <div className={` pointer-events-none absolute h-fit w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <Viewer />
      </div>

      <div
        className={`absolute h-fit w-fit text-center flex p-5 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <h1 className={` backdrop-blur-sm text-6xl font-bold text-blue-400`}></h1>
      </div>
    </div>
  )
}
