import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {

  let text = "bu text"
  // console.log(text)
  // let h1 = document.querySelector("h1")
  // h1.innerText = text

  let navbartext = "bu navbar uchun text"
  const navbarfunc = () => {
    console.log("navbar function ishladi")
  }

  let styleBox = {
    backgroundColor: "blue",
    color: "white"
  }
  let navbarStyle = {
    backgroundColor: "pink",
    color: "blue"
  }
  return (
    <div className="App">
      <Navbar navbartext={navbartext} navbarfunc={navbarfunc} navbarstyle={navbarStyle} />


      <h1 style={{ backgroundColor: "red", fontStyle: "italic" }}>{text + " nima gap"}</h1>

      <h1 style={styleBox}>{text + " nima gap" + "2"}</h1>
      <Sidebar />
    </div>
  );
}

export default App;
