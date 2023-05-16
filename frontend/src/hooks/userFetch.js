import { useState, useEffect } from "react";


export default function useFetch(url){
    const[data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const fetchdata=async()=>{
            setLoading(true)
            try{
                const res=await fetch (url)
                if(!res.ok){
                    
                    console.log('failed')
                }
                const result=await res.json()
                     setData(result.data)
            }catch(err){
                setError(err.message)
                setLoading(false)

            }
        };
        fetchdata();
    },[url])
    return {
        data,
        error,
        loading
    }

}



