import CountryCard from "./Country-card";
import useFetch from "./useFetch";

const Home = ({countries,searchC}) => {
    return ( 
        <div className="home">
            <CountryCard searchC={searchC}/>
        </div>
    );
}
 
export default Home;