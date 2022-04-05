import React, { useState } from 'react';

const api = {
  key: "b6cb7150a3476f2b35a0dd29e6ecbb0e",
  base: "https://api.openweathermap.org/data/2.5/"

}


function Greetings({initialName = 'use react fdsa'}) {
  const [name, setName] = React.useState(initialName)
  

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div className="welcome-box">
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      <div>Welcome </div>
      {name ? <strong> {name} </strong> : 'Please enter your name'}
    </div>
  )
}

function App() {
      const [query, setQuery] = useState('');
      const [weather, setWeather] = useState({});

      const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
        });
      }
    }

    const dateBuilder = (d) => {
      let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    }

     return (
       <div className="app warm">
       
        <main>
        <Greetings initialName="Hello " />
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div class="card">
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
    );
  }

export default App;
