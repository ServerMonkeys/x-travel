import React, {useState} from 'react'
import Router, {useRouter} from 'next/router'
import {motion} from "framer-motion";
import {clientDOS, updatePerson} from "../../helper/fetchData";


function id() {
    const router = useRouter()
    const [passportNum,updatePassportNum] = useState("");
    const [passportExp,updatePassportExp] = useState("");
    const [passportPhoto,updatePassportPhoto] = useState("");
    const personID = router.query.id

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
        if(passportPhoto.length > 0){
            await updatePerson(clientDOS, String(personID), 'photo', String(passportPhoto));
        }
        await Router.push({pathname:"/dash"});
        /*try {
            const {data} = await axios({
                url: "/api/update",
                method: "POST",
                data: teamPayload
            });
            console.log("response back", data)
        }
        catch(error) {
            console.log("Error", error);

        }*/
    }


    return (
    <div>
        <>
            <div className="py-40 w-full bg-gradient-to-r from-stop1 to-stop2 to-stop3 bg-no-repeat bg-bottom flex justify-around">
                <motion.div
                    className={` bg-slate-50 border-gray-200 border-1 flex flex-col w-64 h-64 dark:bg-slate-400 p-2 
                    shadow-lg
                    overflow-
                    gap-1.5
                    dark:shadow-none
                    dark:border-b-neutral-50
                    drop-shadow-xl
                    justify-center text-center items-center rounded-2xl `}

                >
                    <div className={`dark:text-slate-400  rounded-xl p-1 w-fit h-fit m-1 select-none cursor-pointer flex flex-col justify-center items-center`}>
                        <h2 className="text-blue-500 dark:text-white drop-shadow-md px-4 py-2 font-semibold text-2xl w-full">
                            Update DOS
                        </h2>
                        <div>
                            <span className="text-gray-500 space-y-8"> Update Passport # </span>
                            <input className="rounded border text-black" minLength={9}
                                   maxLength={9}
                            value={passportNum}
                            onChange={({target}) => updatePassportNum(target?.value)}></input>
                        </div>
                        <div>
                        <span className="flex text-gray-500"> Update Passport Expiry Date</span>
                            <input className="rounded border text-black"
                                   value={passportExp}
                                    minLength={8}
                                    maxLength={8}
                                   onChange={({target}) => updatePassportExp(target?.value)}
                            ></input>
                        </div>
                        <div>
                            <span className="flex text-gray-500"> Update Passport Photo</span>
                            <input className="rounded border text-black"
                                   value={passportPhoto}
                                   onChange={({target}) => updatePassportPhoto(target?.value)}
                            ></input>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                            Save
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    </div>
  )
}

export default id;