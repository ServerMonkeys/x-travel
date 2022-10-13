import {ChangeEvent, FormEvent, useState} from 'react'
import { motion } from 'framer-motion'


export const SearchForm = ({ onChange }: any) => {
  const [ssn, setSSN] = useState<string>()
  return <motion.form className=" w-96 m-10" onSubmit={function (e: FormEvent<HTMLFormElement
      >): void {
    e.preventDefault()
    onChange(ssn)
    console.log('submitted ✅')
  }}>
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
      Search
    </label>
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
      <input
          onChange={(e:ChangeEvent<HTMLInputElement>)=> {setSSN(e.target.value)}}
          value={ssn}
          type={"text"}
          id="p-search"
          className=" block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="ssn"
          minLength={9}
          maxLength={9}
      />
      <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          type="submit"
          className="submit-button-ssn text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      > Search </motion.button>
    </div>
  </motion.form>
}
