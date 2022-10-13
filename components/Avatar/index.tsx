/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import React from 'react'

interface AvatarProps {
  avatarImgUrl?: string
}

export default function Avatar(props: AvatarProps) {
  return (
    <div>
      <img
        src={props.avatarImgUrl}
        alt="picture of user"
        className=" ease-in-out duration-300 rounded-full w-28 h-28 border-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 "
      />
    </div>
  )
}
