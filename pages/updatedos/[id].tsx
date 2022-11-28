import React, {useState} from 'react'
import Router, {useRouter} from 'next/router'
import {motion} from "framer-motion";
import {clientDOS, updatePerson} from "../../helper/fetchData";


function Id() {
    const router = useRouter()
    const [passportNum,updatePassportNum] = useState("");
    const [passportExp,updatePassportExp] = useState("");
    const [passportPhoto,updatePassportPhoto] = useState("");
    const personID = router.query.id

    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();


    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        }


        reader.readAsDataURL(changeEvent.target.files[0]);
    }


    async function handleOnSubmit(event: any) {
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
            passportNum,
            passportExp ,
            passportPhoto
        }
        console.log("Updated DL and Photo", teamPayload);
        if(passportNum.length > 0){
            await updatePerson(clientDOS, String(personID), 'passport_num', String(passportNum));
        }
        if(passportExp.length > 0){
            await updatePerson(clientDOS, String(personID), 'passport_exp', String(passportExp));
        }
        if(imageSrc){
            await updatePerson(clientDOS, String(personID), 'photo', String(imageSrc));
        }
        await Router.push({pathname:"/dash"});
    }


    return (
    <div>
            <div className="py-40 w-full bg-gradient-to-br from-stop1 to-stop2 to-stop3 bg-no-repeat bg-bottom flex justify-around ">
                <motion.div
                    className={` border-gray-200  flex flex-col w-64 h-64 dark:bg-slate-400 p-2 
                    
                    
                    gap-1.5
                    min-h-fit
                    min-w-fit
                    
                    dark:shadow-none
                    dark:border-b-neutral-50
                    justify-center text-center items-center `}

                >
                    <div className={`dark:text-slate-20 dark:bg-black bg-neutral-50/90 pb-8  rounded-t-xl p-1 w-fit w-96 px-10 h-fit  select-none cursor-pointer flex flex-col gap-2 justify-center items-center`}>
                        <div className='font-Manrope flex flex-col justify-center items-center  m-2 p-2 px-4 rounded-xl'>
                            <h2 className={'text-2xl font-semibold text-neutral-500 z-10 '}>Department of State</h2>
                            <div className={"w-full flex justify-end items-center"}>
                                <div className="w-full h-1 bg-blue-300 rounded-full mb-2.5 mr-1"></div>
                                <h3 className='text-xl font-semibold -mt-3 text-blue-400 p-1 rounded-xl'><i>Update</i></h3>
                            </div>

                        </div>
                            <h2 className="text-neutral-700 space-y-8"> <span className='font-semibold text-green-400'>new</span>  Passport ID 🪪 </h2>
                            <motion.input className="rounded border text-black text-center font-semibold rounded-lg" minLength={9}
                                   maxLength={9}
                            value={passportNum}
                                          whileTap={{scale:0.9}}
                            onChange={({target}) => updatePassportNum(target?.value)}></motion.input>
                        <div>
                        <h2 className=" text-neutral-700 mb-2"> <span className="font-semibold text-green-400">new </span>Expiry Date 📅</h2>
                            <motion.input className="rounded border text-black text-center font-semibold py-0.5 rounded-lg"
                                          value={passportExp}
                                          placeholder={''}
                                          minLength={8}
                                          maxLength={8}
                                          onChange={({target}) => updatePassportExp(target?.value)}
                                          whileTap={{scale:0.9}}
                            />
                        </div>
                        <div className={"flex flex-col justify-center text-center items-center"}>
                            <h2 className="text-neutral-700 mt-6 mb-2">Update Passport Photo</h2>
                            <div className=" mt-2 flex justify-center items-center w-full">
                                <label htmlFor="dropzone-file"
                                       className="flex flex-col justify-center items-center w-full h-64 bg-neutral-100/40 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
                    <div className={"mb-2 w-full "}>
                        <motion.button onClick={handleSubmit}
                                       className="bg-blue-500 hover:bg-blue-600  w-full text-white font-bold py-2 px-4 rounded-b-full -mt-1.5"
                                       whileTap={{scale:0.9}}
                        >
                            Save
                        </motion.button>
                    </div>
                </motion.div>
            </div>
    </div>
  )
}

export default Id;