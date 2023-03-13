import React from 'react'
import "./Navbar.css"

function Navbar(props) {
    // console.log(props)

    return (
        <div className='navbar'>
            <div className="">
                <h1 style={props.navbarstyle}>Navbar</h1>
                <h1>{props.navbartext}</h1>
            </div>

            <button onClick={props.navbarfunc}>Submit </button>
        </div>
    )
}

export default Navbar