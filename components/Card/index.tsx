import React, { useEffect, useState } from 'react'
import { CheckCircle } from 'phosphor-react'

interface CardProps {
  details?: String
  status?: String
  agencyFullName?: String
}

export const BaseCard: React.FC<CardProps> = props => {
  // if status changes due to submit of user, run a query
  const [data, setData] = useState('')

  return (
    <div
      className=" border-gray-200 border-2 flex flex-col w-64 h-28 bg-white  dark:bg-slate-400 p-3 
        hover:scale-105 
        ease-in-out duration-100  gap-1
        justify-center text-center items-center rounded-2xl "
    >
      <h2 className="text-blue-500 dark:text-white drop-shadow-md  font-semibold text-2xl w-full">
        {props.agencyFullName}
      </h2>
      <div className=" dark:text-slate-400 bg-slate-200 rounded-xl p-1 w-fit h-fit m-1">
        <p className=" px-1 font-semibold">{props.status}</p>
      </div>
    </div>
  )
}
