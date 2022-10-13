import Route from 'next/router'
import { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'
import Navbar from '../components/navbar'
import Footer from "../components/footer";
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Navbar />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
        <Footer/>
    </UserProvider>
  )
}

export default MyApp
