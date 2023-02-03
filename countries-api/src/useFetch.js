import { useEffect,useState } from "react"

const useFetch = (url) => {
    const [countries,setCountries] = useState([])
    const [searchC,setSearchC] = useState([])
    const [isPending,setIspending] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                let sortedData = data.sort((a,b)=>a.name.common>b.name.common?1:-1) 
                setSearchC(sortedData)
                setCountries(sortedData)
                setIspending(false)
            })
            .catch(err=>{
                setIspending(false)
                setError(err)
            })
    },[url])
    return {countries,searchC,setSearchC,isPending,error};
}

export default useFetch
