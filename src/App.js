import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Components/Filter/Filter";
import { useState } from "react";

function App() {
  const [ratingchange, setRetingchange] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <NavBar
        ratingchange={ratingchange}
        setRetingchange={setRetingchange}
        setSearchInput={setSearchInput}
      />
      <br />
      <Filter ratingChange={ratingchange} searchInput={searchInput} />
    </>
  );
}

export default App;
