/* eslint-disable @next/next/no-img-element */
import Avatar from "../Avatar";
import React from "react";
import {motion} from 'framer-motion'
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import InfoPop from "../info";

type NProps = {
  name?: string;
  occupation?: string;
  imageDMV?: string;
  imageDOS?: string;
  dob?: string;
  dl?: string;
  pass_num?: string;
  pass_exp?: string;
  address?: string;
  phone_num?: string;
  status?: string;
};
// serves as a container for all the information
export const Notification = (props: NProps) => {
  return (
      <div className={`w-800 p-6 -mt-12 flex flex-col justify-items-start items-center bg-neutral-50/80 overflow-visible rounded-md`}>
    <motion.div
        className={`min-w-fit max-w-md mt-5 rounded-2xl bg-contain  bg-center select-none`}
    >
      <div className={'flex flex-row -gap-1'}>
      <div className="flex flex-col items-center pb-10 m-4 px-6 backdrop-blur-sm min-w-fit">
        <div className="flex flex-wrap m-5 mb-2 flex-row  ">
          <motion.div initial={{x:-100}} animate={{x:0}} transition={{delay: 0.9}} className="z-10 -mr-4">
            <Avatar avatarImgUrl={props.imageDMV} />
          </motion.div>
         <motion.div initial={{x:100}} animate={{x:0}} transition={{delay: 0.9}} className="-ml-4">
           <Avatar avatarImgUrl={props.imageDOS} />
         </motion.div>
        </div>
        <motion.div
            className={`dark:text-slate-400 dark:bg-green-300 bg-green-300 rounded-xl p-1 w-fit h-fit m-1 mb-4 cursor-pointer select-none`}
            whileHover={{ scale: 1.1 }}
            initial={{scale:0, y:10}}
            animate={{scale:1, y:0}}
            transition={{ type: "spring", stiffness: 400, damping: 10, delay:2.5 }}>
          <p className={`px-1 font-semibold`}>{props.status}</p>
        </motion.div>
        <motion.div
            className="bg-blue-400 rounded-full p-2">
          <h1 className="font-Manrope text-xl font-medium text-neutral-50">✨ {props.name} ✨</h1>
        </motion.div>
      </div>

        <div className={'p-4 w-96 flex flex-col items-center justify-start text-center '}>
          <div className={'w-full flex flex-col justify-center gap-2'}>
            <motion.div
                initial={{x:200, scale:0.9, opacity: 0}}
                animate={{x:0, scale: 1, opacity: 1}}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay:1.3 }}
            >


              <InfoPop label={'📱 Phone'} item={props.phone_num}/>
            </motion.div>
            <motion.div initial={{x:200, scale:0.9, opacity: 0}}
                        animate={{x:0, scale: 1, opacity: 1}}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay:1.4 }}>
              <InfoPop label={'🎂 Birthday'} item={props.dob}/>
            </motion.div>
            <motion.div initial={{x:200, scale:0.9, opacity: 0}}
                        animate={{x:0, scale: 1, opacity: 1}}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay:1.5 }}>
              <InfoPop label={'💼 Occupation'} item={props.occupation}/>
            </motion.div>
           <motion.div initial={{x:200, scale:0.9, opacity: 0}}
                       animate={{x:0, scale: 1, opacity: 1}}
                       transition={{ type: "spring", stiffness: 200, damping: 10, delay:1.6}}>
             <InfoPop label={'✈️ Passport ID'} item={props.pass_num}/>
           </motion.div>
            <motion.div initial={{x:200, scale:0.9, opacity: 0}}
                        animate={{x:0, scale: 1, opacity: 1}}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay:1.7 }}>
              <InfoPop label={'✈️ Passport Expiry'} item={props.pass_exp}/>
            </motion.div>
            <motion.div initial={{x:200, scale:0.9, opacity: 0}}
                        animate={{x:0, scale: 1, opacity: 1}}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay:1.8 }}>
              <InfoPop label={'🚗 DL Number'} item={props.dl}/>
            </motion.div>
          </div>


        </div>
      </div>
    </motion.div>
      </div>
  );
};

export default Notification;
