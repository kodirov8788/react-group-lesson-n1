import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { data } from "./static_data"

function App() {
  const [click, setClick] = useState(false)
  console.log(data)
  console.log(click)
  const openClose = () => {
    if (click === false) {
      setClick(true)
    } else {
      setClick(false)
    }

  }
  return (
    <div className="App">
      <Navbar click={openClose} />
      <Sidebar result={click} />
      <div className="cards">
        {
          data.map(item => (
            <div style={{ background: "dodgerblue", margin: "10px" }}>
              <img src={item.img} alt="" />
              <h1>  {item.name}</h1>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
