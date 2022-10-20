import React from 'react'
import {useRouter} from 'next/router'

function id() {
    const router = useRouter()
    const personID = router.query.id
    return (
    <div>
        <h1 className='text-black'>
            {personID}
        </h1>
    </div>
  )
}

export default id;