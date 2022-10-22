import React, { useState, useEffect } from "react";
import "./App.css";

function ZipSearchField({handleInputChange, zipInput}) {
  return (
    <form>
      <div className="form-group mt-5 mb-5">
        <label htmlFor="zipCodeInput">Zip Code:</label>
        <input className="form-control" id="zipCodeInput" placeholder="Enter zip code" onChange={handleInputChange} value={zipInput} />
        <small className="form-text text-muted">Zip codes should have 5 digits.</small>
      </div>
    </form>
  );
}

function Cities(props) {
  return (
  <div className="card mt-5 mb-5">
    <div className="card-header">
      NEW YORK, NY
    </div>
    <div className="card-body">
      <ul>
        <li>State: NY</li>
        <li>Location: (40.77, -73.95)</li>
        <li>Population (estimated): 42627</li>
        <li>Total Wages: 1022024689</li>
      </ul>
    </div>
  </div>
  );

}

function App() {
  const [zipInput, setZipInput] = useState("")
  const [foundCities, setFoundCities] = useState([])

  const handleInputChange = (event) => {
    const input = event.target.value;
    setZipInput(input);
  };

  // Causes zipSearch() to be called when zipInput is updated
  useEffect(() =>{
    if (zipInput.length === 5) {
      zipSearch();
    }
  }, [zipInput]);

  const zipSearch = () => {
    fetch("https://ctp-zip-api.herokuapp.com/zip/" + zipInput)
    .then((response) => {
      return response.json();
    })
    .then((jsonBody) => {
      const cities = [];
      for (let cityInfo of jsonBody) {
        console.log(cityInfo);
        cities.push(cityInfo);
      }
      setFoundCities(cities);
    });
  };

  // remember to show "No results found" when no city components are being shown!
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField handleInputChange={handleInputChange} value={zipInput}/>
        <div>
          <Cities foundCities={foundCities}/>
        </div>
      </div>
    </div>
  );
}

export default App;
