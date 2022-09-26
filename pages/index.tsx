import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeroImage from '../public/assets/PhoneHero.png'
import Image from 'next/image'

export const Home: NextPage = () => {
  return (
    <div className="min-h-screen h- flex flex-1 flex-col justify-center items-center box-border relative">
      <div className="Banner-Hero bg-black h-150 w-full justify-center flex flex-col text-center items-center">
        <div className=" w-w-img h-h-img">
          <div className=" my-16">
            <h1 className="font-Manrope text-5xl font-bold m-4">Security</h1>
          </div>
          <Image
            className=""
            layout="intrinsic"
            src={HeroImage}
            objectFit="contain"
            alt="picture of hero image 5g iphone"
          />
        </div>
        <div></div>
        test
      </div>
    </div>
  )
}

export default Home
