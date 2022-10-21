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

  const [button_press, Press] = useState<boolean>(false);
  const [SSN, setSSN] = useState<number>()
  const [SSstatus, setSSStatus] = useState<string>('ready')
  const [DMVStatus, setDMVStatus] = useState<string>('ready')
  const [DOSStatus, setDOSStatus] = useState<string>('ready')

  const [DOS_data, setDOS_data] = useState([]);
  const [SS_data, setSS_data] = useState([]);
  const [DMV_data, setDMV_data] = useState([]);

  useEffect(() => {
    if (!SSN) return
    const fetchMyData = async(): Promise<void> => {
      const getData = async (client:any, query: any, ssn: number, setState: any, setData:any) => {
        setState('loading')
        await Promise.resolve(fetchData(client, query, ssn))
            .then(data =>{
              if(data) {
                setState('fetched')
                setData(data);
              }else {
                setState('error')
              }
            })
      }
      await Promise.all([
        getData(clientSS, fetchSS_Query, SSN, setSSStatus, setSS_data),
        getData(clientDOS, fetchDOS_Query, SSN, setDOSStatus, setDOS_data),
        getData(clientDMV, fetchDMV_Query, SSN, setDMVStatus, setDMV_data)
      ])
    }
    fetchMyData()
        .finally(() => {
          console.log('queried all data');
        })
  }, [SSN,button_press])
    //console.log(SS_data)
  return (
      <div className='w-full h-fit content-center bg-gradient-to-r from-stop1 to-stop2 to-stop3 bg-no-repeat bg-bottom flex flex-col justify-items-start'>
        <div className="relative box-border flex min-h-screen flex-1 flex-col items-center justify-center bg-no-repeat">
          <motion.div
              initial={{opacity:0, scale:1, y:-100}}
              animate={{ opacity:1, scale:1, y:0}}
              transition={{ duration:0.75}}
              className="relative grid auto-rows-auto grid-cols-3 gap-10 overflow-visible"
          >
            <BaseCard agencyFullName={'Department of State'} status={DOSStatus} />
            <BaseCard agencyFullName={'Social Security'} status={SSstatus} />
            <BaseCard agencyFullName={'Dept Motor Vehicles'} status={DMVStatus} />
          </motion.div>
          <SearchForm onChange={(e: any) =>{
            setSSN(e);
          }} />
          <motion.button
              initial={{opacity:0, scale: 0.5}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.8}}
              type="button"
              className="inline-flex items-center justify-center w-auto px-2 py-2 space-x-2 text-sm
                  font-medium text-white bg-blue-700 border border-blue-700 rounded-full
                  appearance-none cursor-pointer select-none hover:border-blue-800
                  focus:outline-none focus:ring-2 focus:ring-blue-300  disabled:opacity-75"
              whileHover={{
                scale:1.05
              }}
              whileTap={{
                scale: 0.95,
                rotate: 660,

                transition: { type: "spring", stiffness: 500,  },
              }}
              onClick={() => {
                Press(!button_press)
              }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"/>
            </svg>
          </motion.button>
            {SSstatus === 'fetched' && DMVStatus === 'fetched' && DOSStatus === 'fetched' &&
                <div className="visible ease-in-out duration-200">
                    <Notification name={SS_data.first_name + " " + SS_data.last_name} occupation={SS_data.job} imageDMV={DMV_data.photo} imageDOS={DOS_data.photo} dob={SS_data.dob} dl={DMV_data.dl}
                                  pass_exp={DOS_data.passport_exp} pass_num={DOS_data.passport_num}/>
                </div>
            }
        </div>
      </div>
  )
}
export default Dash