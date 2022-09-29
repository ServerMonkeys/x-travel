/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Blob from '../public/assets/BlobColor.svg'

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

      <div className=" w-full h-c-h justify-center items-center box-border relative flex flex-col bg-pattern-svg bg-no-repeat bg-cover bg-bottom">
        <div className="text-container justify-center text-center backdrop-blur-sm rounded-md p-4">
          <h2 className=" my-8 text-5xl text-slate-700 font-Manrope font-bold">Travel Smart</h2>
          <div className="w-80 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
