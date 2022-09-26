import Navbar from './navbar'
import Footer from './footer'
import { FC, ReactNode } from 'react'

type layoutProps = {
  children?: ReactNode
}

export const Layout: FC = ({ children }: layoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
