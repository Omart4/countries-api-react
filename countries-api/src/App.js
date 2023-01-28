import Navbar from "./Navbar";
import Home from "./Home";
import { useEffect , useState } from "react";

function App() {
  const [countries,setCountries] = useState([])
  const [searchC,setSearchC] = useState([])
  useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
          let sortedData = data.sort((a,b)=>a.name.common>b.name.common?1:-1) 
          setSearchC(sortedData)
          setCountries(sortedData)
        })
  },[])
  return (
    <div className="app">
      <Navbar countries={countries} setSearchC={setSearchC}/>
      <Home countries={countries} searchC={searchC}/>
    </div>
  );
}

export default App;
