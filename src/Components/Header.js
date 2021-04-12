
import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => (
    
        <div>
            <h1>Tour of Heroes</h1>
            <Link to='/dashboard' >Dashboard</Link>
            <Link to='/heroes' >Heroes</Link>
        </div>
    
)
export default Header