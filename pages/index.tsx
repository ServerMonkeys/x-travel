import Link from 'next/link'
import { WorldView } from '../components/threejs/world'
import AvatarIcon from '../components/Avatar/AvatarIcon'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'

const imgUrl =
  'https://www.csus.edu/university-advancement/university-foundation/meet-us/_internal/photos/robert-nelsen.jpg'

export const Home = () => {
  return (
    <div className="font-Manrope min-h-screen flex flex-1 flex-col justify-start items-center box-border relative transition ease-in-out delay-150">
      <div className="flex w-full h-800 overflow-hidden bg-black relative">
        <div className="w-fit h-fit bg-no-repeat text-center flex items-center absolute flex
         mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-align
         items-center
         flex-col
         justify-center
        ">
          <div className={'h-fit bg-neutral-300 w-10'}>

          </div>
          <div id="card container" className="w-full h-fit p-3 flex flex-col gap-8 rounded-2xl m-5 z-10 ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-normal text-6xl  text-neutral-50 z-10"
            >
              travel.x makes it <span className="text-green-300">easy.</span>
            </motion.h1>
          </div>
        </div>
        <WorldView />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className=" w-full h-800 justify-center items-center box-border relative flex flex-col bg-pattern-svg bg-no-repeat bg-cover bg-bottom"
      >
        <div className="text-container justify-center text-center backdrop-blur-sm rounded-md p-4 my-10">
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
      </motion.div>

      <div className={'bg-black  h-fit w-full  justify-center items-center box-border relative flex flex-col'}>
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
        <div className={'Banner-Hero bg-black h-800 w-full justify-start flex flex-col text-center items-center'}>
          <div className={' w-w-img h-h-img flex flex-col items-center'}>
            <div className={'bg-opacity-50 '}>
              <h1 className="font-Manrope text-4xl font-medium m-6 text-white"></h1>
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
      </div>
    </div>
  )
}
export default Home
