import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';  //need to "hook"
import Weather from './Weather';
import Titles from './Titles';


let apiKey = "";   //can i do this?
let unit =           // what is this?

const App=() => {

  const [zipcode, setZipcode] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=${unit}&APPID=${apiKey}`,
    );
    console.log(result);
    

    // setData(result.data);
  };
  fetchData();
});

const _Zipcode = (zipcode) => {
  setZipcode(zipcode);
}


  return (
    <div className="App">
        <Titles />
        <SearchBar loadWeather="_Zipcode" />
        <Weather  />
    </div>
 );  
}

export default App;
