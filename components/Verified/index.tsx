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
      <div className="flex flex-col items-center pb-10 m-4 ">
        <div className="flex flex-wrap m-5">
          <Avatar avatarImgUrl={props.imageDMV} /> <Avatar avatarImgUrl={props.imageDOS} />
        </div>
        <h5 className="mb-1 text-xl font-bold text-gray-900 capitalize">
          ✨ {props.name} ✨
        </h5>
        <span className="text-sm font-light text-gray-500 dark:text-gray-400">
          {props.occupation}
        </span>
        <h6 className="mb-1 text-base font-normal text-gray-900">
          Date of Birth: {props.dob}
        </h6>
        <h6 className="mb-1 text-base font-normal text-gray-900">
          Driver's License Number: {props.dl}
        </h6>
        <h6 className="mb-1 text-base font-normal text-gray-900">
          Passport Number: {props.pass_num}
        </h6>
        <h6 className="mb-1 text-base font-normal text-gray-900">
          Passport Expiration Date: {props.pass_exp}
        </h6>
      </div>
    </div>
  );
};

export default Notification;
