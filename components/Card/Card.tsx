import React, {useEffect, useState} from 'react'
import ThumbsUp from "/public/assets/ThumbsUP.svg";
import {motion} from 'framer-motion'
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

interface CardProps {
  details?: String
  status?: String
  agencyFullName?: String
  color?: String
}

export const BaseCard: React.FC<CardProps> = props => {
  // if status changes due to submit of user, run a query
  const [data, setData] = useState<string>()
  const [shadowColor, setShadowColor] = useState<string>()
  const [loadState, setLoadState] = useState<string>()

  let StatusText = 'text-neutral-600'

  const [statusColor, setStatusColor] = useState('bg-slate-300')
  useEffect(() => {
    if (props.status == 'ready') return
    if (props.status == 'loading') {
      setShadowColor('')
      setLoadState('animate-pulse')
      setStatusColor('bg-blue-400')
      return
    }
    setLoadState('')
    if (props.status == 'fetched') {
      setStatusColor('bg-green-300')
      setShadowColor('shadow-green-500/100')
      setData('')
    } else if (props.status == 'error') {
      setStatusColor('bg-red-300')
      setShadowColor('')
    }
  }, [props.status])

  return (

      <div>
    <motion.div
      className={` 
      ${props.color} border-gray-200 border-1 flex flex-col w-64 h-28 dark:bg-slate-400 p-3 
      shadow-lg
        overflow-visible
        gap-1.5
        dark:shadow-none
        dark:border-b-neutral-50
        ${shadowColor}
        ${loadState}
        justify-center text-center items-center rounded-2xl `}


    >
      <div className={'flex flex-col justify-center items-center gap-2'}>
        <h2 className="text-neutral-600 dark:text-white drop-shadow-md  font-semibold text-2xl w-full">
          {props.agencyFullName}
        </h2>
        <div className={`dark:text-slate-400 ${statusColor} rounded-xl p-1 px-2 w-fit h-fit m-1 select-none cursor-pointer mb-3`}>
          <p className={`px-1 font-semibold ${StatusText} select-none`}>{props.status}</p>
        </div>
      </div>
    </motion.div>
        {props.status === 'fetched' ? <ShowThumbs/> : null }
      </div>
  )
}

const ShowThumbs = () => {
  return (
      <div className={'flex items-end justify-end -mt-12 z-50'}>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay:2,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className={'flex w-fit'}>

          <ThumbsUp width={'70px'} height={'70px'}/>
        </motion.div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
      </div>
  )
}
