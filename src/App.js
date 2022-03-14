import React from 'react';

const api = {
  key: "b6cb7150a3476f2b35a0dd29e6ecbb0e",
  url: "https://api.openweathermap.org/data/2.5/"

}

function App() {
     return (
       <div className="app warm">
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search.."
            />
          </div>
        </main>
      </div>
    );
}

export default App;
