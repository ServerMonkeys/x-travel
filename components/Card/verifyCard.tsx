import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

interface CardProps {
  status?: String
  message?: String
}

export const VerifyCard: React.FC<CardProps> = props => {
  // if status changes due to submit of user, run a query
  const [data, setData] = useState<string>()
  const [shadowColor, setShadowColor] = useState<string>()
  const [loadState, setLoadState] = useState<string>()

  let StatusText = 'text-white'

  const [statusColor, setStatusColor] = useState('bg-slate-300')
  useEffect(() => {
    if (props.status == 'ready') return
    if (props.status == 'Verifying') {
        setShadowColor('')
        setLoadState('animate-pulse')
        setStatusColor('bg-blue-400')
        return
      }
    setLoadState('')
    if (props.status == 'Verified') {
      setStatusColor('bg-green-500')
      setShadowColor('shadow-green-500/80')
      setData('')
    } else if (props.status == 'Not Matched') {
      setStatusColor('bg-red-300')
      setShadowColor('shadow-red-300/80')
    }
  }, [props.status])

  return (
    <motion.div
      className={` bg-slate-50 border-gray-200 border-1 flex flex-col w-64 h-28 dark:bg-slate-400 p-3 
        shadow-lg
        overflow-visible
        gap-1.5
        dark:shadow-none
        dark:border-b-neutral-50
        drop-shadow-xl
        ${shadowColor}
        ${loadState}
        justify-center text-center items-center rounded-2xl `}

      initial={{opacity:0, scale:1}}
      animate={{ opacity:1, scale:1}}
      transition={{ duration:0.5 ,delay: 0.8}}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-black dark:text-white drop-shadow-md  font-semibold text-2xl w-full">
        {props.message}
      </h2>
      <div className={`dark:text-slate-400 ${statusColor} rounded-xl p-1 w-fit h-fit m-1`}>
        <p className={`px-1 font-semibold ${StatusText}`}>{props.status}</p>
      </div>
    </motion.div>
  )
}
