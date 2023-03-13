import React from 'react'

function Sidebar(props) {
    let click = false

    return (
        <div style={click ? { transform: "translate(0)", width: "300px", height: "100vh", background: "pink" } : { transform: 'translate(-400px)', width: "300px", height: "100vh", background: "pink" }}>Sidebar</div>
    )
}

export default Sidebar