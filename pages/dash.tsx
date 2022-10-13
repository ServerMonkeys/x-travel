import {NextPage} from 'next'
import fetchData, {fetchSS_Query,fetchDOS_Query, fetchDMV_Query, clientDOS, clientDMV, clientSS} from "../helper/fetchData";
import {SearchForm} from '../components/SearchForm'
import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {BaseCard} from '../components/Card'
import Notification from '../components/Verified'
var fname = '';
var lname = '';
var job = '';
var image = '';
export const Dash: NextPage = () => {
  
  

  const [SSN, setSSN] = useState<number>()
  const [SSstatus, setSSStatus] = useState<string>('ready')
  const [DMVStatus, setDMVStatus] = useState<string>('ready')
  const [DOSStatus, setDOSStatus] = useState<string>('ready')


  const getData = async (client:any, query: any, ssn: number, setState: any) : Promise<object> => {
    setState('loading')
    try{
      return await Promise.resolve(fetchData(client, query, ssn))
          .then(obj => {
            if (obj) {
              setState('fetched')
              console.log(obj.first_name)
              return obj;
            }
            setState('DNE')
            return;
          })
    } catch (e) {
      setState('error')
      console.log(e)
    }
  }

  useEffect(() => {
    if (!SSN) return
    const DOS_info = getData(clientDOS, fetchDOS_Query, SSN, setDOSStatus)
    const SS_info = getData(clientSS, fetchSS_Query, SSN, setSSStatus)
    const DMV_info = getData(clientDMV, fetchDMV_Query, SSN, setDMVStatus)
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