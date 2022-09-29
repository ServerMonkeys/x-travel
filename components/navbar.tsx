import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
export default function Navbar() {
  const { user, error, isLoading } = useUser()
  const router = useRouter()
  return (
    <>
      <nav class="bg-gray-100 border shadow-md">
        <div class="max-x-6xl mx-auto px-2">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a href="/" class="flex items-center py-5 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2."
                    stroke="purple"
                    class="w-6 h-6 mr-1 from-purple-400 to-pink-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <span class="font-extrabold text-border text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500  hover:from-pink-500 hover:via-purple-400 hover:to-indigo-400 transition duration-300">
                    TravelX
                  </span>
                </a>
              </div>
              <div class="flex items-center space-x-1">
                {!isLoading && user && (
                  <a
                    href="/dash"
                    class="hidden md:flex py-5 px-2 text-violet-600
                      hover:text-violet-700"
                  >
                    Dashboard
                  </a>
                )}
                <div>
                  <a
                    href="/about"
                    class="hidden md:flex py-5 px-2 text-violet-600
                      hover:text-violet-700"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="/contact"
                    class="hidden md:flex py-5 px-2 text-violet-600
                      hover:text-violet-700"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-1">
              {!isLoading && !user && (
                <Link href="/api/auth/login">
                  <a class="py-2 px-4 text-black bg-violet-500 hover:bg-violet-600 rounded shadow transition duration-300">
                    Sign-in
                  </a>
                </Link>
              )}
              {!isLoading && user && (
                <Link href="/api/auth/logout">
                  <a
                    //onClick={router.push('/dash')}
                    class="py-2 px-4  text-black bg-violet-500 hover:bg-violet-600 rounded shadow transition duration-300"
                  >
                    Sign out
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
