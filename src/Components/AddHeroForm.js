import React from 'react'
import {v4 as uuid} from 'uuid'
class AddHeroForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            name: this.props.name ? this.props.name : '',
            error:''
        }
    }
    formSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name) {
            this.setState(() => {
                return {
                    error:'Enter Name First'
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    error:""
                }
            })
            this.props.onSubmit({
                id: this.state.id,
                name:this.state.name
            })
            console.log("hek")
        }

    }
    inputChange = (e) => {
        console.log(this.state.name)
        this.setState(() => {
            return {
                name: e.target.value,
                
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                    <input type="text" value={this.state.id} disabled></input>
                    <input type="text" placeholder='Name' value={this.state.name} onChange={this.inputChange}></input>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}


export default AddHeroForm