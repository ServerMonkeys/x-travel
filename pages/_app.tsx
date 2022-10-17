import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Navbar from '../components/navbar'
import Footer from "../components/footer";
import {UserProvider} from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Navbar />
        <Component {...pageProps} />
        <Footer/>
    </UserProvider>
  )
}

export default MyApp
