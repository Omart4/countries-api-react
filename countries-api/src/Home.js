import CountryCard from "./Country-card";

const Home = ({searchC}) => {
    return ( 
        <div className="home">
            <CountryCard searchC={searchC}/>
        </div>
    );
}
 
export default Home;