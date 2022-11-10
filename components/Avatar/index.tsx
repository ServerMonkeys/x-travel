/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {motion} from 'framer-motion';


interface AvatarProps {
  avatarImgUrl?: string
}

export default function Avatar(props: AvatarProps) {
  return (
    <motion.div
        whileHover={{scale:1.05, z:5}}
        transition={{duration:0.1}}
    >
      <img
        src={props.avatarImgUrl}
        alt="picture of user"
        className="rounded-full w-28 h-28 border-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 "
      />
    </motion.div>
  )
}
