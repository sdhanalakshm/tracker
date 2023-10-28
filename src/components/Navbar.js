import React from 'react'

function NavBar({inactive}) {
    return (
        <>
            <div className={`navbar ${inactive?"side-bar-closed":""} `}>

                <h1 className="navbar-heading">IWatch</h1>
            </div>
        </>
    )
}

export default NavBar
