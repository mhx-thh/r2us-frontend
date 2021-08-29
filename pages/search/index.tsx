import { useRouter } from 'next/router';
import React, { useEffect } from 'react';


function resource(props) {
    const router = useRouter()
    useEffect(()=>{
        router.push("/search/resource")
    },[])
    return(
        <div></div>
    )
}

export default resource;