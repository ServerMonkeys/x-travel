/* eslint-disable @next/next/no-img-element */
import Avatar from "../Avatar";
import React from "react";

const imgurl =
  "https://www.csus.edu/university-advancement/university-foundation/meet-us/_internal/photos/robert-nelsen.jpg";

type NProps = {
  name?: string;
  occupation?: string;
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
        <div className=" m-5">
          <Avatar avatarImgUrl={imgurl} />
        </div>
        <h5 className="mb-1 text-xl font-bold text-gray-900">
          ✨ {props.name} ✨
        </h5>
        <span className="text-sm font-light text-gray-500 dark:text-gray-400">
          {props.occupation}
        </span>
      </div>
    </div>
  );
};

export default Notification;
