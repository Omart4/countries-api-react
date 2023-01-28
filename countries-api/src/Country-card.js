const CountryCard = ({searchC}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <div className="c-list">
            <div id="loading"></div>
            {searchC.map((country)=>(
            <div className="country" key={country.name.common}>
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