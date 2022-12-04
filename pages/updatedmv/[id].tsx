import React, {useState} from 'react'
import Router, {useRouter} from 'next/router'
import {motion} from "framer-motion";
import {clientDMV, updatePerson} from "../../helper/fetchData";


function Id() {
    const router = useRouter()
    const [licenseNum, updateLicense] = useState("");
    const [newPhoto,updatePhoto] = useState("");
    const personID = router.query.id

    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();


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
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

        const formData = new FormData();

        for ( const file of fileInput.files ) {
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

    const handleSubmit = async (event:any) => {
        event.preventDefault();

        const teamPayload={
            licenseNum,
            newPhoto
        }
        console.log("Updated DL and Photo", teamPayload);
        if(licenseNum.length > 0){
            await updatePerson(clientDMV, String(personID), 'dl', String(licenseNum));
        }
        if(imageSrc){
            await updatePerson(clientDMV, String(personID), 'photo', String(imageSrc));
        }
        await Router.push({pathname: "/dash"});


    }

    return (
    <div>
        <>
            <div className="py-40 h-screen w-full bg-gradient-to-r from-stop2 to-stop3 bg-no-repeat bg-bottom flex justify-around font-Manrope">
                <div >

                <motion.div
                    className={` border-gray-200 border-1 flex flex-col w-800 h-96 dark:bg-slate-400 
                    mt-12
                    gap-1.5
                    dark:shadow-none


                    drop-shadow-xl
                    justify-center text-center items-center rounded-2xl `}

                >
                    <div className={`-mb-0.5 dark:text-slate-400 bg-white w-6/12 py-10 rounded-t-2xl p-1 w-fit h-fit m-1 select-none cursor-pointer flex flex-col justify-center items-center`}>
                        <h2 className="text-blue-500  dark:text-white drop-shadow-md px-4 py-2 font-semi-bold text-3xl font-semibold  w-full ">
                            Update DMV
                        </h2>
                        <div className={"flex flex-col gap-1.5"}>

                            <h2 className="text-gray-500 space-y-8 text-lg font-medium mb-2"> Update Driver's License # 🪪</h2>
                            <input className="rounded border text-black rounded-full text-center font-semibold text-blue-900" minLength={8}
                                   maxLength={8}
                                   type={"text"}
                            value={licenseNum}
                            onChange={({target}) => updateLicense(target?.value)}></input>

                        </div>

                        <div className={"flex flex-col justify-center text-center items-center"}>
                            <h2 className="text-neutral-700 mt-6 mb-2 text-xl text-neutral-600 font-medium">Update Passport Photo</h2>
                            <div className=" mt-2 flex justify-center items-center w-full">
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
                                    <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                                        <input id="dropzone-file" type="file" name="file" accept="image/*" className="hidden"/>
                                        {imageSrc && !uploadData && (
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Files</button>
                                            </div>
                                        )}
                                    </form>
                                </label>
                            </div>
                        </div>
                    </div>
                    {(!imageSrc || uploadData) && (
                    <div className={"w-6/12 -mt-2"}>
                        <button onClick={handleSubmit} className=" rounded-b-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" >
                            Save
                        </button>
                    </div>
                    )}
                </motion.div>
            </div>
            </div>
        </>
    </div>
  )
}

export default Id;