import { clientDMV, clientSS, clientDOS } from '../components/getClient'
import { fetchDMV_Query, fetchDOS_Query, fetchSS_Query } from '../Libs/queries.js'

import React, { SetStateAction, useState } from 'react'
import { stringify } from 'querystring'

const fetchSS = async (ssn_number: number) => {
  const data = await clientSS.request(fetchSS_Query(ssn_number))
  console.log('SS --> ', data)
}

const fetchDOS = async (ssn_number: number) => {
  const data = await clientDOS.request(fetchDOS_Query(ssn_number))
  console.log('DOS -->', data)
}

const fetchDMV = async (ssn_number: number) => {
  const data = await clientDMV.request(fetchDMV_Query(ssn_number))
  console.log('DMV --> ', data)
}

export default function SearchBar() {
  const [ssn, setSSN] = useState('')

  const onChangeHandler = async (e: any) => {
    const val = e.target.value
    setSSN(val)
    console.log(ssn)
  }
  const onSubmitHandler = () => {
    const ssn_p = Number(ssn)
    console.log('logged in -> ' + ssn_p)
    fetchSS(ssn_p)
    fetchDMV(ssn_p)
    fetchDOS(ssn_p)
  }
  return (
    <div className={' w-42 h-24 p-10 mt-6 flex justify-center'}>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmitHandler()
        }}
        className={' rounded-md w-full flex justify-center items-center text-center text-red'}
        action=""
      >
        <input
          onChange={e => onChangeHandler(e)}
          value={ssn}
          minLength={9}
          maxLength={9}
          required
          className={'w-full text-center bg-slate-100  font-bold rounded-md h-12'}
          type="text"
        />
      </form>
    </div>
  )
}
