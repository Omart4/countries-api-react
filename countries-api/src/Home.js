import CountryCard from "./Country-card";

const Home = ({searchC,isOpen,setIsOpen,setTargetCountry}) => {
    return ( 
        <div className="home">
            <CountryCard searchC={searchC} setIsOpen={setIsOpen} isOpen={isOpen} setTargetCountry={setTargetCountry}/>
        </div>
    );
}
 
export default Home;