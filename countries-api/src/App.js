import Navbar from "./Navbar";
import Home from "./Home";
import { useEffect , useState } from "react";
import CountryPopup from "./Country-popup";

function App() {
  const [countries,setCountries] = useState([])
  const [searchC,setSearchC] = useState([])
  const [isOpen,setIsOpen] = useState(false)
  const [targetCountry,setTargetCountry] = useState([])
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
      <Home countries={countries} searchC={searchC} isOpen={isOpen} setIsOpen={setIsOpen} setTargetCountry={setTargetCountry}/>
      {isOpen&&<CountryPopup targetCountry={targetCountry}/>}
    </div>
  );
}

export default App;
