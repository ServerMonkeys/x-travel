/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
export const AvatarIcon = (imgUrl: any) => {
  return (
    <div className="relative">
      <Image src={imgUrl} alt={'img-avatar'} />
      <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  )
}
export default AvatarIcon
