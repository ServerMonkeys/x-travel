import {NextPage} from 'next'
import fetchData, {
  clientDMV,
  clientDOS,
  clientSS,
  fetchDMV_Query,
  fetchDOS_Query,
  fetchSS_Query
} from "../helper/fetchData";
import {SearchForm} from '../components/SearchForm'
import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {BaseCard} from '../components/Card/Card'
import Notification from '../components/Verified'

export const Dash: NextPage = () => {

  const [SSN, setSSN] = useState<number>()
  const [SSstatus, setSSStatus] = useState<string>('ready')
  const [DMVStatus, setDMVStatus] = useState<string>('ready')
  const [DOSStatus, setDOSStatus] = useState<string>('ready')


  const [DOS_data, setDOS_data] = useState([]);
  const [SS_data, setSS_data] = useState([]);
  const [DMV_data, setDMV_data] = useState([]);


  const processData = (data:any) => {
    console.log(data)
  }

  const getData = async (client:any, query: any, ssn: number, setState: any, setData:any) => {
    setState('loading')
    return await fetchData(client, query, ssn)
        .then(data =>{
          if(data) {
            setState('fetched')
            setData(data);
            processData(data)
          }else {
            setState('error')
          }
        })
  }
  useEffect(() => {
    if (!SSN) return
    getData(clientDOS, fetchDOS_Query, SSN, setDOSStatus, setDOS_data)
    getData(clientSS, fetchSS_Query, SSN, setSSStatus, setSS_data)
    getData(clientDMV, fetchDMV_Query, SSN, setDMVStatus, setDMV_data)
  }, [SSN])

  return (
    <div className={'w-full h-fit  bg-gradient-to-r from-stop1 to-stop2 to-stop3 bg-no-repeat bg-bottom '}>
      <div className="min-h-screen flex flex-1 flex-col justify-center items-center box-border relative   bg-top-center bg-no-repeat  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid relative grid-cols-3 auto-rows-auto gap-10 overflow-visible "
        >
          <BaseCard agencyFullName={'Department of State'} status={DOSStatus} />
          <BaseCard agencyFullName={'Social Security'} status={SSstatus} />
          <BaseCard agencyFullName={'Dept Motor Vehicles'} status={DMVStatus} />
        </motion.div>
        <SearchForm onChange={(e: any) =>{
          setSSN(e);
        }} />
        <p>{SSN}</p>
        <div className=" invisible ease-in-out duration-200">
          <Notification name="Nelson" occupation="President" />
        </div>
      </div>
    </div>
  )
}
export default Dash