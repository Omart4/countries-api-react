import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CountryPopup = ({countries}) => {
    const {name} = useParams()
    const targetCountry = useLoaderData()
    //let targetCountry = countries.filter(c=>c.name.common === name)
    console.log(targetCountry)
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const bords = (arr) =>{
        let borders = '';
        arr.forEach(e=>{
            borders += ` ${e} ,`
        })
        borders = borders.slice(0,-1)
        return borders
    }
    const caps = (arr)=>{
        let capitals = '';
        arr.forEach(e=>{
            capitals += ` ${e} ,`
        })
        capitals = capitals.slice(0,-1)
        return capitals
    }
    return ( 
        <div className="content">
            <div className="title">
                <Link to='/' style={{textDecoration:'none',color:'black'}}>
                    <h3>Where in the world?</h3>
                </Link>
            </div>
            <div className="cWindow">
                <div className="images">
                    <img src={targetCountry[0].flags.png} alt="" className="flag"/>
                    <img src={targetCountry[0].coatOfArms.png} style={{height:'300px',border:'none'}} alt="" />
                </div>
                <div className="data">
                    <h2 className="name">{targetCountry[0].name.common}</h2>
                    <div className="details">
                        <p><span className="classi">Official Name:</span> {targetCountry[0].name.official}</p>
                        <p><span className="classi">Population:</span> {numberWithCommas(targetCountry[0].population)}</p>
                        <p><span className="classi">Continents:</span> {targetCountry[0].continents[0]}</p>
                        <p><span className="classi">Sub Region:</span> {targetCountry[0].subregion}</p>
                        <p><span className="classi">Capital(s):</span> {caps(targetCountry[0].capital)}</p>
                        <p><span className="classi">Top Level Domain:</span> {targetCountry[0].tld[0]}</p>
                        {targetCountry[0].borders &&<p style={{width:'260px'}}><span className="classi">Borders:</span> {bords(targetCountry[0].borders)}</p>}
                        <p><span className="classi">UN Membership:</span> {targetCountry[0].unMember?'Member':'Not a member'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const countryDetailsLoader = async ({params}) => {
    const {name} = params
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    return res.json()
}
 
export default CountryPopup;