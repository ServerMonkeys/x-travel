import React, {useState} from 'react'
import Router from 'next/router'
import {motion} from "framer-motion";
import {addDOS} from "../helper/fetchData";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";


function DOSadd() {
    const [fname,updateFname] = useState("");
    const [lname,updateLname] = useState("");
    const [ssn,updateSSN] = useState();
    const [dob, updateDOB] = useState("");
    const [passNum, updatePassNum] = useState("");
    const [passExp, updatePassExp] = useState("")
    const [phone, updatePhone] = useState("");
    const [street, updateStreet] = useState("")
    const [city, updateCity] = useState("")
    const [state, updateState] = useState("")
    const [zip, updateZip] = useState("")
    const [country, updateCountry] = useState("")
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        await addDOS(ssn,fname.toUpperCase(),lname.toUpperCase(),dob,passNum,passExp,phone,street,city,state,zip,country,imageSrc)
        await Router.push({pathname:"/dash"});
    }

    function handleOnChange(changeEvent:any) {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        }


        reader.readAsDataURL(changeEvent.target.files[0]);
    }


    async function handleOnSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({name}) => name === 'file');

        const formData = new FormData();

        for (const file of fileInput.files) {
            formData.append('file', file);
        }

        formData.append('upload_preset', 'my-uploads');

        const data = await fetch('https://api.cloudinary.com/v1_1/dbzeopi6f/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json());

        setImageSrc(data.secure_url);
        setUploadData(data);
    }

    return(
        <div className={" bg-gradient-to-br from-stop1 to-stop2"}>
            <div className=" h-screen flex flex-col items-center justify-start">
                <h1 className={"text-neutral-800 font-Manrope text-4xl font-light mt-14"}>Department of State Information</h1>
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
                    <div /*className="grid md:grid-cols-2 md:gap-6"*/>
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
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="passport_num" id="passport_num"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required
                                   value = {passNum}
                                   minLength={9}
                                   maxLength={9}
                                   onChange={({target}) => updatePassNum(target?.value)}/>
                            <label htmlFor="passport_num"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Passport Number
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="date" name="passport_exp" id="passport_exp"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required
                                   value = {passExp}
                                   onChange={({target}) => updatePassExp(target?.value)}/>
                            <label htmlFor="passport_exp"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Passport Expiration </label>
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
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="phone" id="phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required
                               value = {phone}
                               onChange={({target}) => updatePhone(target?.value)}
                               minLength={10}
                               maxLength={10}/>
                        <label htmlFor="phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Phone Number</label>
                    </div>
                    <div className="flex flex-col justify-center text-center items-center">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col justify-center items-center w-full h-64 bg-neutral-100/40 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-gry-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-5 pb-6 px-6">
                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload</span> or drag and drop</p>
                            </div>
                        </label>

                    </div>
                    {(!imageSrc || uploadData)&&
                        <div className="flex flex-col items-center">
                            <motion.button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                whileTap={{scale:0.9}}
                            >
                                Add Person

                            </motion.button>
                        </div>
                    }
                </form>

                <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                    <input id="dropzone-file" type="file" name="file" accept="image/*" className="hidden"/>
                    {imageSrc && !uploadData && (
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Files</button>
                        </div>
                    )}
                </form>
            </div>
        </div>

    )
}

export const getServerSideProps = withPageAuthRequired()
export default DOSadd;

