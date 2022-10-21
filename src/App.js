import React, { useState } from "react";
import "./App.css";

function ZipSearchField(props) {
  const handleChange = () => {
    console.log("Input changed!");
  }
  return (
    <div>
      <form>
        <label>Zip Code:</label>
        <br/>
        <input onChange={handleChange}></input>
      </form>
    </div>
  );
}

function City(props) {
  return (
  <div class="card mt-5 mb-5">
    <div class="card-header">
      NEW YORK, NY
    </div>
    <div class="card-body">
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

  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField/>
        <div>
          <City />
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
