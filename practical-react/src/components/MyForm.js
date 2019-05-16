import React from "react";

export default class MyForm extends React.Component {

    state = {
        name: 'ben',
        favoritePet: "",
        title: "Mr",
    }

    handleChange = (event, fieldName) => {
        console.log(fieldName);
        this.setState({fieldName : event.target.value});
    };

    handleChangeFavoritePet = event => {
        this.setState({favoritePet : event.target.value});
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        console.log(this.state.name)
        return (
            <div>
                <input value = {this.state.name} 
                onChange={(event) => this.handleChange(event,'name')} />
                
                <textarea value = {this.state.favoritePet} 
                onChange={(event) => this.handleChange(event,'favoritePet')} />


                <div>
                <select value={this.state.title}>
                    <option>Mr.</option>
                    <option>Miss.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                </select>
                </div>
                <button onClick={this.handleSubmit}>submit</button>
            </div>
            


 
        );
    }

}