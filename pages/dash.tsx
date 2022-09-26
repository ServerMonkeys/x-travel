import { NextPage } from 'next'
import React, { useState } from 'react'
import { BaseCard } from '../components/Card'
import styles from '../styles/Home.module.css'
import Notification from '../components/Verified'

export const Dash: NextPage = () => {
  const [inputValue, setInputValue] = useState('')
  const onChangeHandler = (e: any) => {
    e.preventDefault()
    const val = e.target.value
    console.log(val)
    setInputValue(val)
  }

  return (
    <div className={styles.container}>
      <div className="min-h-screen flex flex-1 flex-col justify-center items-center box-border relative  bg-[url('/VendiaData.svg')]  bg-top-center bg-no-repeat  ">
        <div className="grid relative grid-cols-3 auto-rows-auto gap-10 overflow-visble ">
          <BaseCard agencyFullName={'Department of State'} status={'ready'} />
          <BaseCard agencyFullName={'Social Security'} status={'ready'} />
          <BaseCard agencyFullName={'Dept Motor Vehicles'} status={'ready'} />
        </div>

        <form
          className=" w-96 m-10"
          onSubmit={e => {
            e.preventDefault()
            console.log('submitted ✅')
          }}
        >
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              onChange={onChangeHandler}
              value={inputValue}
              type="text"
              id="p-search"
              className=" block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="ssn"
              required
              minLength={9}
              maxLength={9}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <h2>{inputValue}</h2>
        <div className="visible ease-in-out duration-200">
          <Notification name="Nelson" occupation="President" />
        </div>
      </div>
    </div>
  )
}

export default Dash
