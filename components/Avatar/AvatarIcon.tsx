/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export const AvatarIcon = (imgUrl: any) => {
  return (
    <div className="relative shadow-xl bg-white w-3/4 md:w-2/5 mx-auto -mt-1 rounded-lg rounded-t-none">
      <Image src={imgUrl} alt={'img-avatar'} layout={'fill'} />
      <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  )
}
export default AvatarIcon
