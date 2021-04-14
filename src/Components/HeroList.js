import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Heroes } from './Heroes'
const HeroList = (props) => (
    <tr>
        <td>{props.hero.id}</td>
        <td> <Link to={`/heroes/${props.hero.id}`}>{props.hero.name}</Link></td>
        {/* <td>{props.hero.name}</td> */}
        
    </tr>
           
)

export const ConnectedHeroList=connect()(HeroList)

export default HeroList

    
