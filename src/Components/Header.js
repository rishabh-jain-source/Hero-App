
import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => (
    
        <div>
            <h1>Tour of Heroes</h1>
            <NavLink to='/dashboard' className='head-button'>Dashboard</NavLink>
            <NavLink to='/heroes' className='head-button'>Heroes</NavLink>
        </div>
    
)
export default Header