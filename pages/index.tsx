import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { Stars, Text } from '@react-three/drei'
import Viewer from '../components/threejs/ModelViewer'

export const Home = () => {
  return (
    <div className="font-Manrope min-h-screen flex flex-1 flex-col justify-start items-center box-border relative transition ease-in-out delay-150">
      <div className={` h-800 w-full bg-black relative`}>
        <Canvas>
          <Stars />
        </Canvas>

        <div
          className={` pointer-events-none absolute h-fit w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <Viewer />
        </div>

        <div
          className={`absolute h-fit w-fit text-center flex p-5 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <h1 className={`text-6xl font-bold text-white`}>fast, secure, protected</h1>
        </div>
      </div>
      <div className={'Banner-Hero bg-black h-800 w-full justify-start flex flex-col text-center items-center'}>
        <div className={' w-w-img h-h-img flex flex-col items-center'}>
          <div className={'bg-opacity-50 '}>
            <h1 className="font-Manrope text-4xl font-medium m-6 text-white">
              blockchain powered identity verification
            </h1>
          </div>
          <div className=" w-w-img h-c-h bg-hero-banner bg-contain bg-no-repeat flex flex-col-reverse bg-center justify-center ">
            <h2 className=" font-bold text-white text-5xl font-Manrope mt-44 hover:opacity-90">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                <Link href={'/dash'}>Secure</Link>
              </span>
            </h2>
          </div>
          <div className="text-container w-full text-center">
            <h1 className="font-Manrope font-bold text-white text-4xl">Click on Secure to get the dashboard</h1>
          </div>
        </div>
      </div>

      <div className=" w-full h-screen justify-center items-center box-border relative flex flex-col bg-pattern-svg bg-no-repeat bg-cover bg-bottom">
        <div className="text-container justify-center text-center backdrop-blur-sm rounded-md p-4">
          <h2 className="my-8 text-5xl text-slate-700 font-Manrope font-bold">Travel Smart</h2>
          <div className="w-96 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>

      <div className={'bg-black w-full h-c-h justify-center items-center box-border relative flex' + ' flex-col'}>
        <div className=" m-6 gap-12 flex flex-row items-center justify-center overflow-visible position relative p-16">
          <div className="text-center font-Manrope text-white ">
            <h1 className="text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Less Hassle
              </span>
            </h1>
            <p className=" text-2xl">more going to where you need to go</p>
          </div>
          <div className=" text-center font-Manrope text-white">
            <h1 className=" text-6xl font-bold">
              Your Identity <span className="text-green-300">is</span> your passport
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
