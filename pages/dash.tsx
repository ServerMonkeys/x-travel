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
import verifyData from '../helper/verifyData';
import Router from "next/router";

export const Dash: NextPage = () => {

  const [button_press, Press] = useState<boolean>(false);
  const [SSN, setSSN] = useState<number>()
  const [SSstatus, setSSStatus] = useState<string>('ready')
  const [DMVStatus, setDMVStatus] = useState<string>('ready')
  const [DOSStatus, setDOSStatus] = useState<string>('ready')
  const [verifyStatus, setVerifyStatus] = useState<string>('Unverified')
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
          setVerifyStatus('Loading')
          if (verifyData(SS_data, DOS_data, DMV_data)){
            setVerifyStatus('Verified')
          }
          else
            setVerifyStatus('Not Matched')
        })
  }, [SSN,button_press])

  // @ts-ignore
    // @ts-ignore
    function sendDMVProps() {
        Router.push({
            pathname: "/updatedmv/[pid]",
            query: {pid: DMV_data._id}
        })
    }

    function sendDOSProps() {
        Router.push({
            pathname: "/updatedos/[pid]",
            query: {pid: DOS_data._id}
        })
    }
    return (
      <div className='w-full h-fit py-4 content-center bg-gradient-to-r from-stop1 to-stop2 to-stop3 bg-no-repeat bg-bottom flex flex-col justify-items-start'>
        <div className="relative box-border flex min-h-screen py-8 flex-1 flex-col items-center justify-center bg-no-repeat">
          <motion.div initial={{opacity:0, scale:1, y:-100}} animate={{ opacity:1, scale:1, y:0}} transition={{ duration:0.75}} className="relative flex flex-row overflow-visible gap-4">
              <BaseCard agencyFullName={'Department of State'} status={DOSStatus} color={'bg-[#FAF6F6]'}/>
              <BaseCard agencyFullName={'Social Security'} status={SSstatus} color={'bg-[#FAF6F6]'} />
              <BaseCard agencyFullName={'Dept Motor Vehicles'} status={DMVStatus} color={'bg-[#FAF6F6]'} />
          </motion.div>
            <div className="flex flex-row items-center w-fit p-2 justify-center ">
                <SearchForm onChange={(e: any) =>{setSSN(e)}}/>
                <motion.button
                    initial={{opacity:0, scale: 0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.8}}
                    type="button"
                    className="inline-flex items-center justify-center my-10 mb-6 w-auto h-10 px-2 py-2 space-x-2 text-sm font-medium text-white bg-blue-700
                                border border-blue-700 rounded-full appearance-none cursor-pointer select-none hover:border-blue-800
                                focus:outline-none focus:ring-2 focus:ring-blue-300  disabled:opacity-75"
                    whileHover={{ scale:1.05 }}
                    whileTap={{scale: 0.95, rotate: 660, transition: { type: "spring", stiffness: 500,  },}}
                    onClick={() => {Press(!button_press)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd"
                              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                              clipRule="evenodd"/>
                    </svg>
                </motion.button>
            </div>

            {SSstatus === 'fetched' && DMVStatus === 'fetched' && DOSStatus === 'fetched' &&
                <>
                <motion.div className="visible "
                            initial={{opacity:0, scale:1}}
                            animate={{ opacity:1, scale:1}}
                            transition={{ duration:0.5 ,delay: 0.8}}>
                    <Notification name={SS_data.first_name + " " + SS_data.last_name} occupation={SS_data.job} imageDMV={DMV_data.photo} imageDOS={DOS_data.photo} dob={SS_data.dob} dl={DMV_data.dl}
                                  pass_exp={DOS_data.passport_exp} pass_num={DOS_data.passport_num} status={verifyStatus} address={DMV_data.street_address + ", " + DMV_data.city + ", " + DMV_data.state + ", " + DMV_data.country + ", " +DMV_data.zip_code} phone_num={DMV_data.phone_num}/>

                </motion.div>
                    <motion.div className={'flex flex-row gap-1 justify-center mt-8 font-Manrope'}
                                initial={{opacity:0, scale:1, y:-100}} animate={{ opacity:1, scale:1, y:0}} transition={{ delay: 3.5, duration:0.75}}

                    >
                        <button className =" flex justify-between  py-2  bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => sendDMVProps()}>Update DMV</button>
                        <button className ="flex justify-between py-2 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded" onClick={() => sendDOSProps()}>Update DOS</button>
                    </motion.div>
                </>
            }
        </div>
      </div>
  )
}
export default Dash