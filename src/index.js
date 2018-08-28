import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing the component from ./from.js
import Form from './form';

class App extends Component {
    render(){
        return (
            <div className="App">
              <div className="jumbotron text-center">
                <h1 className="display-4">Shopping List</h1>

                {/* Calling the ShoppingList component at the bottom of the page */}
                <ShoppingList/>

                <hr/>

                {/* Calling the Form component which is in ./form.js */}
                <Form/>

              </div>
            </div>
        )
    }
}

class ShoppingList extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        )
    }
}










ReactDOM.render(<App />, document.getElementById('root'));
