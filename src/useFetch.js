import { useState,useEffect } from "react";

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    //executed every render
    useEffect(()=>{
        const abortCont = new AbortController();


        //delay 500ms
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
                .then(res=>{
                    console.log(res);
                    if(!res.ok){
                        throw Error('Could not fetch the data');
                    }
                    return res.json();
                })
                .then((data)=>{
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    if(err.name==='AbortError'){
                        console.log('fetch aborted');
                    }
                    else{
                        setIsPending(false);
                        setError(err.message);
                    }
                    
                })
        },500);

        return ()=>abortCont.abort();
        
    },[url]/* truni mara bark just meloul */
    /* ,[name] truni ki tbadel el name */);
    return {data,isPending,error}
}
export default useFetch;