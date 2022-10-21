import React from 'react'
import {motion} from "framer-motion";

import fetchData, {
    clientDMV,
    clientDOS,
    clientSS,
    fetchDMV_Query,
    fetchDOS_Query,
    fetchSS_Query,
    updatePerson
} from "../helper/fetchData";




export default function Update() {
    return (
        <>
            <div class="py-40 w-full bg-gradient-to-r from-stop1 to-stop2 to-stop3 bg-no-repeat bg-bottom flex justify-around">
                <motion.div
                    className={` bg-slate-50 border-gray-200 border-1 flex flex-col w-64 h-64 dark:bg-slate-400 p-2 
                    shadow-lg
                    overflow-
                    gap-1.5
                    dark:shadow-none
                    dark:border-b-neutral-50
                    drop-shadow-xl
                    justify-center text-center items-center rounded-2xl `}
                    whileHover={{ scale: 1.02  }}

                >
                    <div className={`dark:text-slate-400  rounded-xl p-1 w-fit h-fit m-1 select-none cursor-pointer`}>
                    <h2 className="text-blue-500 dark:text-white drop-shadow-md px-4 py-2 font-semibold text-2xl w-full">
                        Update DMV
                    </h2>
                        <div>
                    <span class="flex justify-left text-gray-500 space-y-8"> Update Driver's License # </span>
                    <input class="flex justify-around rounded border text-black" minLength={8}
                           maxLength={8}
                           type={"text"}></input>
                        </div>
                        <div>
                        <span className="flex text-gray-500"> Update Photo
                    </span>
                        <input className="flex justify-around rounded border"></input>
                        </div>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updatePerson(clientDOS,DOS_data._id,'passport_exp','01-2030')}>
                            Save
                        </button>
                    </div>
                </motion.div>
            </div>

        </>
    )
}
