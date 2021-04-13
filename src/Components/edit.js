import React from 'react'
import {connect} from 'react-redux'
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'abc'
        }
    }

    
    
    nameChange = (e) => {
        const name = e.target.value;
        this.setState(() => {
            return {
                name
            }
        })
     }
    render() {
        
        return (
    
            <div>
                
                <h1>Edit</h1>
                <h2>{ this.state.name}</h2>
                <form >
                    { <input type="text"  placeholder={this.props.match.params.id}></input> }
                    <input type="text" placeholder='name' value={this.state.name} onChange={this.nameChange} ></input>
                    <button>Save</button>
                    {console.log(this.state.heroes)}
                </form>
            </div>

        )
    }
}

// const mapStateToProps = (state,props) => {
//     return {
//         expense: state.expenses.find((expense) => {
//             return expense.id===props.match.params.id
//         }),
//     }
// }
const mapStateToProps = (state, props) => {
    console.log(state.name)
    return {
        hero: state[1]
    }
}
export const ConnectedEdit=connect(mapStateToProps)(Edit)
export default Edit