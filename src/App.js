import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

function App() {
  return (
    <div className="tc">
        <h1>Robot friends</h1>
        <SearchBox />
      <CardList />
    </div>
  );
}

export default App;
