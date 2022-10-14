import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

interface CardProps {
  details?: String
  status?: String
  agencyFullName?: String
}

export const BaseCard: React.FC<CardProps> = props => {
  // if status changes due to submit of user, run a query
  const [data, setData] = useState<string>()
  const [shadowColor, setShadowColor] = useState<string>()
  const [loadState, setLoadState] = useState<string>()

  let StatusText = 'text-white'

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
      setStatusColor('bg-green-500')
      setShadowColor('shadow-green-500/80')
      setData('')
    } else if (props.status == 'error') {
      setStatusColor('bg-red-300')
      setShadowColor('')
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
      whileHover={{ scale: 1.02  }}

    >
      <h2 className="text-blue-500 dark:text-white drop-shadow-md  font-semibold text-2xl w-full">
        {props.agencyFullName}
      </h2>
      <div className={`dark:text-slate-400 ${statusColor} rounded-xl p-1 w-fit h-fit m-1 select-none cursor-pointer`}>
        <p className={`px-1 font-semibold ${StatusText} select-none`}>{props.status}</p>
      </div>
    </motion.div>
  )
}
