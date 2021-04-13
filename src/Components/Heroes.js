import React from 'react'
import { connect } from 'react-redux'
import myHeroes from '../store/defaultValues'
import HeroList from './../Components/HeroList'
import {Link} from 'react-router-dom'



export const Heroes = (props) =>
    
(
    
    <div>
        <h1>Heroes</h1>
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            {
                props.heroes.map((hero) => (
                        
                    <tr key={hero.id}>
                        <td>{hero.id}</td>
                        <td> <Link to={`/heroes/${hero.name}`}>{hero.name}</Link></td>
                    </tr>
                    
                ))
                }
                </tbody>
        </table>
        {
            props.match.params.name && <h3>{props.match.params.name.toUpperCase()}</h3>
        }
    </div>
)

const mapStateToProps = (state) => {
    console.log("mydata" + state)
    console.log(state[1])
    return {
        
        heroes: state

    }
}

const connectedHeroes = connect(mapStateToProps)(Heroes);
export default connectedHeroes;