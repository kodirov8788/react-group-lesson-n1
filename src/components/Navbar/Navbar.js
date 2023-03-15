import React from 'react'
import "./Navbar.css"

function Navbar(props) {

    return (
        <div className='navbar'>
            <button onClick={props.click}>Submit </button>
        </div>
    )
}

export default Navbar