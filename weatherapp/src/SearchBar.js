import React, { useState } from "react";




const SearchBar = props => {         //state variable, then two way bind it--done, w/ placeholder, value and onChange


  const [search, setSearch] = useState("");

  return (
    <form onSubmit={props.loadWeather}>
      <input
        type="text"
        name="Zipcode"
        placeholder="Enter here ..."
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button onClick>Find Weather!</button>
    </form>
  );
};
export default SearchBar;
