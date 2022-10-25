/* eslint-disable @next/next/no-img-element */
import Avatar from "../Avatar";
import React from "react";

//const imgurl =
  //"https://www.csus.edu/university-advancement/university-foundation/meet-us/_internal/photos/robert-nelsen.jpg";

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
};
// serves as a container for all the information
export const Notification = (props: NProps) => {
  return (
    <div className="w-fit max-w-sm
     bg-white rounded-2xl border
     border-gray-200
     dark:border-2
     shadow-lg
     
     ">

      <div className="flex flex-col items-center pb-10 m-10 ">
        <div className="flex flex-wrap justify-items-center m-5">
          <Avatar avatarImgUrl={props.imageDMV} />
        <Avatar avatarImgUrl={props.imageDOS} />
        </div>
        <div
            className=" text-black text-4xl h-16">
          <div className="text-center">
            <h4 className="text-transform: capitalize"> {props.name}</h4>
          </div>
        </div>
        <h2 className="text-md font-light text-gray-500 font-bold dark:text-gray-400">
          {props.occupation}
        </h2><div>
        <div
            className="px-0.5 py-2 my-4 bg-gradient-to-r bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 flex  items-center rounded  shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative">
          <div>
            <div><b className ="font-black">DOB: </b> {props.dob}</div>
          </div>
        </div>
        <div
            className="px-0.5 py-2 my-3 bg-gradient-to-r bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 flex  items-center   rounded shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative">
          <div>
            <div><b className="font-black">Driver's License #:</b> <h6>{props.dl}</h6></div>
          </div>
        </div>
        <div
            className="px-0.5 py-2 my-3 bg-gradient-to-r bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 flex justify-around items-center rounded shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative">
          <div>
            <div><b className="font-black">Passport #: </b>
              {props.pass_num}</div>
          </div>
        </div>
        <div
            className="px-0.5 py-2 my-3 bg-gradient-to-r bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 flex justify-around items-center rounded  shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative">
          <div>
            <div><b className="font-black">Passport Exp Date:</b> {props.pass_exp}</div>
          </div>
        </div>
        <div
            className="px-0.5 py-2 my-3 bg-gradient-to-r bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 flex justify-around items-center rounded  shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative">
          <div>
            <div><b className="font-black">Address:</b> {props.address}</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Notification;
