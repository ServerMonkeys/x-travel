import { NextPage } from 'next'
import { fetchDMV_Query, fetchDOS_Query, fetchSS_Query } from '../Libs/queries.js'
import { clientDMV, clientSS, clientDOS } from '../components/getClient'
import { fetchData } from '../Libs/queries'
import { SearchForm } from '../components/SearchForm'
import React, { SetStateAction, useEffect, useState } from 'react'
import { BaseCard } from '../components/Card'
import styles from '../styles/Home.module.css'
import Notification from '../components/Verified'
var fname = '';
var lname = '';
var job = '';
var image = '';
export const Dash: NextPage = () => {
  const [SSN, setSSN] = useState('')
  const [SSstatus, setSSStatus] = useState('ready')
  const [DMVStatus, setDMVStatus] = useState('ready')
  const [DOSStatus, setDOSStatus] = useState('ready')
  
  

  const getSocial = (input: string) => {
    setSSN(input)
    console.log('parent console logged ' + SSN)
  }

  const getData = async (client: any, query: any, ssn: any, setState: any) => {
    setState('loading')
    const data = await fetchData(client, query, ssn)
    if (data) {
      setState('fetched')
      console.log(data)
      fname = data.first_name
      lname = data.last_name
      if (client == clientSS) {
        job = data.job
      }
      if (client == clientDMV) {
        image = data.photo
      }
    } else {
      setState('error')
    }
  }

  useEffect(() => {
    if (!SSN) {
      return
    }
    getData(clientDOS, fetchDOS_Query, SSN, setDOSStatus)
    getData(clientSS, fetchSS_Query, SSN, setSSStatus)
    getData(clientDMV, fetchDMV_Query, SSN, setDMVStatus)
  }, [SSN])

  return (
    <div className={'w-full h-fit bg-wave bg-no-repeat bg-bottom '}>
      <div className="min-h-screen flex flex-1 flex-col justify-center items-center box-border relative   bg-top-center bg-no-repeat  ">
        <div className="grid relative grid-cols-3 auto-rows-auto gap-10 overflow-visible ">
          <BaseCard agencyFullName={'Department of State'} status={DOSStatus} />
          <BaseCard agencyFullName={'Social Security'} status={SSstatus} />
          <BaseCard agencyFullName={'Dept Motor Vehicles'} status={DMVStatus} />
        </div>
        <SearchForm onChange={getSocial} />
        <p>{SSN}</p>
        <div className="visible ease-in-out duration-200">
          <Notification name={fname + " " + lname} occupation={job} image = {image}/>
        </div>
      </div>
    </div>
  )
}
export default Dash
