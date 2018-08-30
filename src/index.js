import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing the component from ./from.js
import Form from './form';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    item: 'Apples'
                },
                {
                    id: 2,
                    item: 'Pears'
                },
                {
                    id: 3,
                    item: 'Bananas'
                }

            ],
            text: 'Hello World'
        }

        this.changeText = this.changeText.bind(this);
    }


    render(){
        return (
            <div className="App">
              <div className="jumbotron text-center">
                <h1 className="display-4">Shopping List</h1>
                <h3>{this.state.text}</h3>
                {/* Calling the ShoppingList component at the bottom of the page */}
                <ShoppingList list={this.state.list}/>

                <hr/>

                {/* Calling the Form component which is in ./form.js */}
                <Form/>
                <button onClick={this.changeText} >Change State of H3</button>
              </div>
            </div>
        )
    }

    changeText(e){
        e.preventDefault();
        // alert('H3 will be changed');
        this.setState({text: 'Button has been clicked'});
    }






}

class ShoppingList extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.list.map(product => {
                            return <li key={product.id} product={product} className="list-group-item">{product.item}</li>
                        })
                    }




                </ul>
            </div>
        )
    }
}










ReactDOM.render(<App />, document.getElementById('root'));
