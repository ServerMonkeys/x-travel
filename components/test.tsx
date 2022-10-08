import { clientDMV, clientSS, clientDOS } from '../components/getClient'
import React, { SetStateAction, useState } from 'react'
import { stringify } from 'querystring'

const fetchAgency = (agency: string) => {
  if (agency == 'SS') {
    return clientSS
  }
  if (agency == 'DOS') {
    return clientDOS
  }
  if (agency == 'DMV') {
    return clientDMV
  }
}

const fetchData = async (agencyName: string, ssn_number: number) => {
  const client: any = fetchAgency(agencyName)
  if (!client) {
    console.log('no client was found')
  }
  const data = await client.entities.person.list({
    filter: {
      ssn: {
        eq: ssn_number
      }
    }
  })
  console.log(data)
}

const fetchDOS = async (ssn_number: number) => {
  const data = await clientDOS.request(`
    query getPersonBySSN {
  list_PersonItems(filter: {ssn: {eq: ${ssn_number}}}) {
    _PersonItems {
      ssn
      photo
      passport_num
      passport_exp
      last_name
      first_name
      dob
      country
      city
      state
      street_address
      zip_code
    }
  }
}

  `)
  console.log(data)
}

const fetchDMV = async (ssn_number: number) => {
  const data = await clientDMV.request(`

 query getPersonByName {
  list_PersonItems(filter: {ssn: {eq : ${ssn_number}}}) {
    _PersonItems {
      ssn
      first_name
      last_name
      city
      country
      dl
      dob
      phone_num
      photo
      state
      street_address
      zip_code
    }
  }
}

    
  `)
  console.log(data)
}

export default function SearchBar() {
  const [ssn, setSSN] = useState('')

  const onChangeHandler = async (e: any) => {
    const val = e.target.value
    setSSN(val)
    console.log(ssn)
  }

  return (
    <div className={' w-42 h-24 p-10 mt-6 flex justify-center'}>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log('submitted query --> ' + Number(ssn))
          fetchData('SS', Number(ssn))
          fetchDMV(Number(ssn))
          fetchDOS(Number(ssn))
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
