/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  return (
    <>
      <nav className="bg-slate-800 space-border shadow-md justify-center h-14 text-center flex items-center font-Manrope">
        <div className="flex flex-row w-full justify-between p-4">
          <div className="mx-2">
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center h-10">
                <div>
                  <a href="/" className="flex items-center px-2">
                    <h2 className={'font-bold text-2xl '}>travel x</h2>
                  </a>
                </div>
                <div className="flex items-center space-x-1">
                  {!isLoading && user && (
                    <a
                      href="/dash"
                      className="hidden md:flex py-5 px-2 text-violet-600
                      hover:text-violet-700"
                    >
                      Dashboard
                    </a>
                  )}
                  <div>
                    <a
                      href="/about"
                      className="hidden md:flex py-5 px-2 text-slate-300
                      hover:text-slate-400"
                    >
                      About
                    </a>
                  </div>
                  <div>
                    <a
                      href="/contact"
                      className="hidden md:flex py-5 px-2 text-slate-300
                      hover:text-slate-400"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {!isLoading && !user && (
              <Link href="/api/auth/login">
                <p className="text-slate-200 font-Manrope font-bold hover:text-red">
                  <a className="p-1.5 ">Sign-in</a>
                </p>
              </Link>
            )}
            {!isLoading && user && (
              <Link href="/api/auth/logout">
                <p className="text-white font-Manrope font-bold ">
                  <a
                    //onClick={router.push('/dash')}
                    className=" pointer-events-none p-1 text-black bg-violet-500 hover:bg-violet-600 rounded shadow transition duration-300"
                  >
                    Sign out
                  </a>
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
