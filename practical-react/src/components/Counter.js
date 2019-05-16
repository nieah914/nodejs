import React from "react";


export default class Counter extends React.Component {


    state = {
        count : 0
    }

    componentWillUnmount() {
        console.log("unmounting...");
    }
    componentDidMount() {
        console.log("mounting...");
    }


    validate = () => {
        if(this.state.count === null) {
            console.log("dddddd");
            return true;
        }
    };

    increment = () => {
        const isValid = this.validate();
        
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
        this.counter_num.style.color = "red";
    }

    buttonClickedHandler = event => {

    }

    

    inputChangedHandler = event => {
        this.setState({count : event.target.value});
        event.target.style.color = "red";
    }


    render() {
    return (
        
        <div>
            <table>
                <tbody>
                    <tr>Count: {this.state.count}</tr>
                    <tr>
                        <td>
                            <button onClick={(event) => this.increment()}>increment</button>
                        </td>
                        <td>
                            <button onClick={this.decrement}>decrement</button>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <input value = {this.state.count} onChange={(event) => this.inputChangedHandler(event)} />
                        </td>
                        <td>
                            <button>Set Count</button>
                        </td>
                            
                    </tr>
                </tbody>
            </table>
        </div>
        
        );
    }
}


