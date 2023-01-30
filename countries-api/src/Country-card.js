const CountryCard = ({searchC,isOpen,setIsOpen,setTargetCountry}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const togglePop = (event)=>{
        let target = event.currentTarget;
        setIsOpen(!isOpen)
        console.log(target.id)
        setTargetCountry(searchC.filter(i=>i.name.common === target.id))
    }
    
    return (
        <div className="c-list">
            {searchC.map((country)=>(
            <div className="country" key={country.name.common} id={country.name.common} onClick={(e)=>{togglePop(e)}}>
                <img src={country.flags.png}/>
                <div className="c-details">
                    <h2>{country.name.common}</h2>
                    <p><strong>Capital:</strong>{country.capital}</p>
                    <p><strong>Region:</strong>{country.region}</p>
                    <p><strong>Population:</strong>{numberWithCommas(country.population)}</p>
                </div>
            </div>
        ))}
        </div>
    );
}
 
export default CountryCard;