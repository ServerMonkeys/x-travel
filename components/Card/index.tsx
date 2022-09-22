import React from "react";
import { CheckCircle } from "phosphor-react";

interface CardProps {
    details? : String
    status? : String
    agencyFullName? : String
}

export const BaseCard: React.FC<CardProps> = (props) =>{
    return (
        <div className=" flex flex-col w-64 h-28 bg-white p-3 
        hover:scale-105 ease-in-out duration-150  gap-1
        justify-center text-center items-center rounded-2xl drop-shadow-lg">
            <h2 className=" drop-shadow-md text-blue-500 font-semibold text-2xl w-full">
                {props.agencyFullName}
            </h2>
            <div className=" bg-slate-400 rounded-xl p-1 w-fit h-fit m-1">
                <p className="  px-1 font-extralight">{props.status}</p>
            </div>
        </div>
    )
}