import { NextPage } from 'next'
import { SearchForm } from '../components/SearchForm'
import React, { useState } from 'react'
import { BaseCard } from '../components/Card'
import styles from '../styles/Home.module.css'
import Notification from '../components/Verified'

export const Dash: NextPage = () => {
  const [inputValue, setInputValue] = useState('')
  const onChangeHandler = (e: any) => {
    e.preventDefault()
    const val = e.target.value
    setInputValue(val)
    console.log('fetching data')
  }
  return (
    <div className={'w-full h-fit bg-wave bg-no-repeat bg-bottom '}>
      <div className="min-h-screen flex flex-1 flex-col justify-center items-center box-border relative   bg-top-center bg-no-repeat  ">
        <div className="grid relative grid-cols-3 auto-rows-auto gap-10 overflow-visible ">
          <BaseCard agencyFullName={'Department of State'} status={'ready'} />
          <BaseCard agencyFullName={'Social Security'} status={'ready'} />
          <BaseCard agencyFullName={'Dept Motor Vehicles'} status={'ready'} />
        </div>
        <SearchForm />
        <h2>{inputValue}</h2>
        <div className="visible ease-in-out duration-200">
          <Notification name="Nelson" occupation="President" />
        </div>
      </div>
    </div>
  )
}
export default Dash
