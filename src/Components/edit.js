import React from 'react'
import { connect } from 'react-redux'
import { editHero } from './../Actions/heroes';
import { useHistory } from 'react-router-dom'
//let history = useHistory();
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.hero.name,
            id: this.props.match.params.id ? this.props.match.params.id : '',
            error:''
        }
    }
    nameChange = (e) => {
        const name = e.target.value;
        this.setState(() => {
            return {
                name:name
            }
        })
    }
    formSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
        if (!this.state.name) {
            this.setState(() => {
                return {
                    error:'Enter Name First'
                }
            })
        }
        else {
            
            this.props.editHero(this.props.match.params.id, this.state.name)
            this.props.history.goBack()
        }
        
        //useHistory().goBack();
        
        
    }
    
    
    render() {
        return (
            <div>
                <h1>Edit</h1>
                <h2>{this.state.name ? `${this.state.name}  Details` : ''}</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit} className="">
                    <input className='text-input' type="text"  placeholder={this.state.id} disabled></input> 
                    <input className='text-input' type="text" placeholder='Name' value={this.state.name} onChange={this.nameChange}></input>
                    <button className="save-button">Save</button>
                    
                </form>
            </div>

        )
    }
}
let myElement=(state,id)=>{
    for (let i = 0; i < state.length; i++){
        if (state[i].id === id) {
            return state[i]
        }
    }
}
const mapStateToProps = (state, props) => {
    console.log(state,props.match.params.id)
    return {
        //hero: myElement(state,parseInt(props.match.params.id))
        hero:state.find((heros) => {
                return heros.id===props.match.params.id
            })
        
    }
}
const mapDispatchToState = (dispatch, props) => {
    return {
        editHero: (id, name) => dispatch(editHero( id, {name }))
    }
}
export const ConnectedEdit=connect(mapStateToProps,mapDispatchToState)(Edit)
export default Edit