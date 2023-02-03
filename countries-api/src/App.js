import Navbar from "./Navbar";
import Home from "./Home";
import CountryPopup, { countryDetailsLoader } from "./Country-popup";
import useFetch from "./useFetch";
import {BrowserRouter as Router,createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes} from 'react-router-dom'

function App() {
  const {countries ,searchC,setSearchC,isPending,error} = useFetch('https://restcountries.com/v3.1/all')
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={
              <>
                <Navbar countries={countries} setSearchC={setSearchC}/>
                <Home searchC={searchC}/>
              </>
            }></Route>
            <Route path="/countries/:name" element={<CountryPopup/>} loader={countryDetailsLoader}></Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
