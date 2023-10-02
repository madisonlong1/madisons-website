import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Body1 from "./components/Body1"
import Body2 from "./components/Body2"
import Body3 from "./components/Body3"
import Body4 from "./components/Body4"



function App() {
  const [selectedPage, setSelectedPage] = useState('home')


  return (
    <div className="App">
      <Navbar setSelectedPage={setSelectedPage}/>
      {selectedPage == "home" && <Body1 />}
      {selectedPage == "Engineering Calandar" && <Body2 />}
      {selectedPage == "Practice Websites" && <Body3 />}
      {selectedPage == "About" && <Body4></Body4>}
    </div>
  );
}

export default App;
