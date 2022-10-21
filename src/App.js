import React, { useState } from "react";
import "./App.css";

function ZipSearchField({handleChange}) {
  return (
    <form>
      <div className="form-group mt-5 mb-5">
        <label htmlFor="zipCodeInput">Zip Code:</label>
        <input className="form-control" id="zipCodeInput" placeholder="Enter zip code" onChange={handleChange} />
        <small className="form-text text-muted">Zip codes should have 5 digits.</small>
      </div>
    </form>
  );
}

function City(props) {
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
  const [zipSearch, setZipSearch] = useState("")
  const [foundCities, setFoundCities] = useState([])

  const handleChange = () => {
    console.log("Input changed!");
  }

  // remember to show "No results found" when no city components are being shown!
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField handleChange={handleChange}/>
        <div>
          <City />
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
