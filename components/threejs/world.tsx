import {Canvas} from '@react-three/fiber'
import {motion} from 'framer-motion'
import {Stars} from '@react-three/drei'
import Viewer from './ModelViewer'

export const WorldView = () => {

  return (
    <motion.div className={` h-800 w-full  bg-black relative`}>
      <Canvas>
        <Stars fade factor={12} speed={1.2} saturation={2000} count={10000} />
      </Canvas>

      <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.6}}
          className={` pointer-events-none absolute h-800 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <Viewer />
      </motion.div>

      <div
        className={`absolute h-fit w-fit text-center flex p-5 mx-auto bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <h1 className={` backdrop-blur-sm text-6xl font-bold text-blue-400`}>
        </h1>
      </div>
    </motion.div>
  )
}
