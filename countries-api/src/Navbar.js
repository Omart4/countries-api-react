import { useEffect , useState } from "react";

const Navbar = ({countries ,setSearchC}) => {
    //Search Function
    //This function uses the original data from countries and then filters it to another variable called searchC using the setSearchC function 
    // which renders the data in Home.js 
    const searcher = (event)=>{
        const target = event.target;
        if(target !== ''){
            let resultsArray = countries.filter(c=>(c.name.common).toLowerCase().includes(target.value))
            console.log(resultsArray)
            setSearchC(resultsArray)
        }else if(target === ''){
            setSearchC(countries)
            console.log('empty')
        }
    }

    const filterer = (event)=>{
        const target = event.target;
        let resultsArray = countries.filter(c=>c.region === target.value)
        setSearchC(resultsArray)
        console.log(target.value)
    }
    //Copied from stackoverflow to make navbar sticky , I don't understand it
    const [stickyClass, setStickyClass] = useState('');
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
      }
    };



    return ( 
        <nav className={`navbar ${stickyClass}`}>
            <div className="title">
                <h3>Where in the world?</h3>
            </div>
            <div className="search">
                <input onKeyUp={(e)=>searcher(e)} type="text"id="s-c" placeholder="Search for a country..." />
                <select name="region" id="region" onChange={(e)=>filterer(e)}>
                    <option value="" selected disabled hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </nav>
    );
}
 
export default Navbar;