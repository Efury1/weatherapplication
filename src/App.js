import React from 'react';

const api = {
  key: "b6cb7150a3476f2b35a0dd29e6ecbb0e",
  url: "https://api.openweathermap.org/data/2.5/"

}

function App() {

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
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search.."
            />
            <div className="location-box">
              <div className="location"> New York City US</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15
            </div>
            <div className="weather">Sunny</div>
          </div>
        </main>
      </div>
    );
}

export default App;
