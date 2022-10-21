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
  return <div>This is the City component</div>;
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
