import {NextPage} from 'next'
import fetchData, {fetchSS_Query,fetchDOS_Query, fetchDMV_Query, clientDOS, clientDMV, clientSS} from "../helper/fetchData";
import {SearchForm} from '../components/SearchForm'
import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {BaseCard} from '../components/Card'
import Notification from '../components/Verified'
let fname = '';
let lname = '';
let job = '';
let imageDMV = '';
let imageDOS = '';
let dob = '';
let dl = '';
let pass_num = '';
let pass_exp = '';
export const Dash: NextPage = () => {
  
  let ssData: Object;

  const [SSN, setSSN] = useState<number>()
  const [SSstatus, setSSStatus] = useState<string>('ready')
  const [DMVStatus, setDMVStatus] = useState<string>('ready')
  const [DOSStatus, setDOSStatus] = useState<string>('ready')
  const [VerifyStatus, setVerifyStatus] = useState<string>('Unverified')


  const getData = async (client:any, query: any, ssn: number, setState: any) : Promise<object> => {
    setState('loading')
    try{
      return await Promise.resolve(fetchData(client, query, ssn))
          .then(obj => {
            if (obj) {
              setState('fetched')
              console.log(obj.first_name)
              //console.log(obj)

              fname = obj.first_name;
              lname = obj.last_name;
              if (client == clientSS) {
                job = obj.job
              }
              if (client == clientDMV) {
                imageDMV = obj.photo
                dl = obj.dl
              }
              dob = obj.dob;

              if (client == clientDOS){
                imageDOS = obj.photo
                pass_num = obj.passport_num
                pass_exp = obj.passport_exp
              }

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

    //console.log(DOS_info)
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

        {SSstatus === 'fetched' && DMVStatus === 'fetched' && DOSStatus === 'fetched' &&
          <div className="visible ease-in-out duration-200">
            <Notification name={fname + " " + lname} occupation={job} imageDMV={imageDMV} imageDOS={imageDOS} dob={dob} dl={dl}
                          pass_exp={pass_exp} pass_num={pass_num}/>
          </div>
        }
      </div>
    </div>
  )
}
export default Dash