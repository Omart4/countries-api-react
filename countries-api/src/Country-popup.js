const CountryPopup = ({targetCountry}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return ( 
        <div className="cWindow">
            <img src={targetCountry[0].flags.png} alt="" className="flag"/>
            <div className="data">
                <h2 className="name">{targetCountry[0].name.common}</h2>
                <div className="details">
                    <p><span className="classi">Official Name:</span> {targetCountry[0].name.official}</p>
                    <p><span className="classi">Population:</span> {numberWithCommas(targetCountry[0].population)}</p>
                    <p><span className="classi">Continent:</span> {targetCountry[0].continents[0]}</p>
                    <p><span className="classi">Sub Region:</span> {targetCountry[0].subregion}</p>
                    <p><span className="classi">Capital:</span> {targetCountry[0].capital}</p>
                    <p><span className="classi">Top Level Domain:</span> {targetCountry[0].tld[0]}</p>
                </div>
            </div>
        </div>
    );
}
 
export default CountryPopup;