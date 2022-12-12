import Link from 'next/link'
import {WorldView} from '../components/threejs/world'
import {motion} from 'framer-motion'

export const Home = () => {
  return (
    <div className="relative box-border flex min-h-screen flex-1 flex-col items-center justify-start bg-gradient-to-r transition delay-150 ease-in-out font-Manrope from-stop1 to-stop2 to-stop3">
      <div className="relative flex w-full overflow-hidden bg-black h-800">
        <div className="w-fit h-fit bg-no-repeat text-center flex items-center absolute flex
         mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-align
         items-center
         flex-col
         justify-center
        ">
          <motion.div initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}>
          </motion.div>
          <div id="card container" className="z-10 m-5 flex h-full w-full flex-col gap-8 rounded-2xl p-3">
            <motion.h1
                unselectable={'on'}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="z-10 text-8xl font-bold text-blue-500"
            >
              travel.x makes it <span className="text-green-300">easy.</span>
            </motion.h1>
          </div>
        </div>
          <WorldView />
      </div>


      <div className='pointer-events-none relative box-border flex h-screen w-full flex-col items-center justify-center bg-black'>
        <div className="relative m-6 flex flex-row items-center justify-center gap-12 overflow-visible p-16 position">
          <div className="text-center text-white font-Manrope">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Less Hassle
              </span>
              <p className="text-2xl">more going to where you need to go</p>
            </motion.h1>

          </div>
          <div className="text-center text-white font-Manrope">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-6xl font-bold">
              Your Identity <span className="text-green-300">is</span> your passport
            </motion.h1>
          </div>
        </div>
        <div className='Banner-Hero bg-black h-[80rem] w-[100rem] justify-start flex flex-col text-center items-center overflow-hidden'>
          <div className={'w-w-img h-h-img flex flex-col items-center'}>
            <div className={'bg-opacity-50 '}>
              <h1 className="m-6 text-4xl font-medium text-white font-Manrope"></h1>
            </div>
            <div className=" w-[75rem] h-[40rem] bg-hero-banner bg-contain bg-no-repeat flex flex-col-reverse bg-center justify-center ">
              <h2 className="mt-44 text-6xl font-bold text-white font-Manrope hover:opacity-90">
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  <Link href={'/dash'}>Secure</Link>
                </span>
              </h2>
            </div>
            <div className="w-full text-center text-container">
              <h1 className="text-4xl font-bold text-white font-Manrope">Click on Secure to get the dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative box-border flex w-full flex-col items-center justify-center bg-cover bg-bottom bg-no-repeat h-800 bg-pattern-svg"
      >
        <div className="my-10 justify-center rounded-md p-4 text-center backdrop-blur-sm text-container">
          <h2 className="my-8 rounded-full p-3 text-5xl font-bold text-slate-700 font-Manrope">Travel Smart</h2>
          <div className="w-96">
            <p className={"text-neutral-800 font-semibold"}>
              Welcome to our TravelX! Our state-of-the-art system allows you to easily and quickly pass through US Immigration without the need to carry your passport or other personal identifying information. Simply provide your Social Security number and our system will query the Social Security Department, the Department of Motor Vehicles, and the Department of State to display the information needed for the Immigration agent to verify your identification. Say goodbye to the hassle of lost or forgotten documents and hello to a seamless and stress-free travel experience.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default Home
