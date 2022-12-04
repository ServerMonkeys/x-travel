import React, {useState} from 'react';
import {motion} from "framer-motion";
import {addSS} from "../helper/fetchData";
import Router from "next/router";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

function SSadd() {
    const [fname,updateFname] = useState("");
    const [lname,updateLname] = useState("");
    const [ssn,updateSSN] = useState();
    const [dob, updateDOB] = useState("");
    const [job, updateJob] = useState("");
    const [street, updateStreet] = useState("")
    const [city, updateCity] = useState("")
    const [state, updateState] = useState("")
    const [zip, updateZip] = useState("")
    const [country, updateCountry] = useState("")

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        await addSS(ssn,fname.toUpperCase(),lname.toUpperCase(),dob,street,city,state,zip,country,job);
        await Router.push({pathname:"/dash"});
    }

    return(
        <div className={" bg-gradient-to-br from-stop1 to-stop2"}>
        <div className=" h-screen flex flex-col items-center justify-start">
            <h1 className={"text-neutral-800 font-Manrope text-4xl font-light mt-14"}>Social Security Information</h1>
        <form className={"w-5/6 m-24 mt-16 mx-48 bg-yellow-50/80 p-8 rounded-xl "} onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="ssn" id="ssn"
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " required
                       value = {ssn}
                       onChange={({target}) => updateSSN(target?.value)}
                       minLength={9}
                       maxLength={9}/>
                <label htmlFor="ssn"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Social Security Number (SSN)</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="fname" id="fname"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           value = {fname}
                           onChange={({target}) => updateFname(target?.value)}
                           required/>
                    <label htmlFor="fname"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        First name</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="lname" id="lname"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required
                           value = {lname}
                           onChange={({target}) => updateLname(target?.value)}/>
                    <label htmlFor="lname"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Last name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input type="date" name="dob" id="dob"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required
                           value = {dob}
                           onChange={({target}) => updateDOB(target?.value)}/>
                    <label htmlFor="dob"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Date of Birth </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="job" id="job"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required
                           value = {job}
                           onChange={({target}) => updateJob(target?.value)}/>
                    <label htmlFor="job"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Job
                        (Ex. Meta Software Engineer)
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="address" id="address"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           value = {street}
                           onChange={({target}) => updateStreet(target?.value)}/>
                    <label htmlFor="address"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Street Address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="city" id="city"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           value = {city}
                           onChange={({target}) => updateCity(target?.value)}/>
                    <label htmlFor="city"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        City</label>
                </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="state" id="state"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           value = {state}
                           onChange={({target}) => updateState(target?.value)}/>
                    <label htmlFor="state"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        State</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="zip" id="zip"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           value = {zip}
                           onChange={({target}) => updateZip(target?.value)}/>
                    <label htmlFor="zip"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Zip</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="country" id="country"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           value = {country}
                           onChange={({target}) => updateCountry(target?.value)}/>
                    <label htmlFor="country"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Country</label>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <motion.button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        whileTap={{scale:0.9}}
                        >
                        Add Person

                </motion.button>
            </div>
        </form>
        </div>
        </div>

    )
}
export const getServerSideProps = withPageAuthRequired()
export default SSadd;

