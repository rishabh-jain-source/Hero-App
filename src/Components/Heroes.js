import React from 'react'
import { connect } from 'react-redux'
import myHeroes from '../store/defaultValues'
import HeroList from './../Components/HeroList'
import { Link } from 'react-router-dom'
import Edit from './edit'

const viewDetails = (props) => (
    
    <h1>dfuj</h1>
)

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
                        <td> <Link to={`/heroes/${hero.id}`}>{hero.name}</Link></td>
                    </tr>
                ))
                }
                </tbody>
        </table>
        {   <div>
            {props.match.params.id && <div><h3>{props.match.params.id}</h3>  <Link to={`/edit/${props.match.params.id}`}><button>view detail</button></Link></div>}
            
            </div>
        }

    </div>
)

const mapStateToProps = (state) => {
    console.log(state.heroes)
    return {
        heroes: state
    }
}

const connectedHeroes = connect(mapStateToProps)(Heroes);
export default connectedHeroes;