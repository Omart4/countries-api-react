import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const CountryCard = ({searchC}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <div className="c-list">
            {searchC.map((country)=>(
                <Link to={`/countries/${country.name.common}`}>
                    <div className="country" key={country.name.common} id={country.name.common}>
                        <img src={country.flags.png}/>
                        <div className="c-details">
                            <h2>{country.name.common}</h2>
                            <p><strong>Capital:</strong>{country.capital}</p>
                            <p><strong>Region:</strong>{country.region}</p>
                            <p><strong>Population:</strong>{numberWithCommas(country.population)}</p>
                        </div>
                    </div>
                </Link>
        ))}
        </div>
    );
}
 
export default CountryCard;