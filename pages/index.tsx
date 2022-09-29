/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeroImage from '../public/assets/PhoneHero.png'
import Image from 'next/image'
import Blob from '../public/assets/BlobColor.svg'
import Dash from './dash'

export const Home: NextPage = () => {
  return (
    <div className="min-h-screen h- flex flex-1 flex-col justify-start items-center box-border relative transition ease-in-out delay-150">
      <div className="Banner-Hero bg-black h-800 w-full justify-start flex flex-col text-center items-center">
        <div className=" w-w-img h-h-img flex flex-col items-center">
          <h1 className="font-Manrope text-5xl font-bold m-6 text-white shadow-md">Travel X</h1>
          <div className=" w-w-img h-c-h bg-hero-banner bg-contain bg-no-repeat flex flex-col-reverse bg-center justify-center ">
            <h2 className=" font-bold text-white text-6xl font-Manrope mt-44 hover:opacity-90">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                <Link href={'/dash'}>Secure</Link>
              </span>
            </h2>
          </div>
          <div className="text-container w-full text-center">
            <h1 className="font-Manrope font-bold text-white text-4xl">Click on Secure to get the dashboard</h1>
          </div>
        </div>
      </div>

      <div className=" w-full h-c-h justify-start items-center box-border relative flex flex-col bg-pattern-svg bg-center bg-no-repeat bg-cover ">
        <div className="text-container">
          <h2 className="text-5xl text-slate-800">Travel Smart</h2>
        </div>
        <div className=" w-fit h-fit bg-slate-600">
          <img src="../public/assets/BlobColor.svg" alt="blob svg" />
        </div>
      </div>
    </div>
  )
}

export default Home
