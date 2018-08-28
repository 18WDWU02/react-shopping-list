import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render(){
        return (
            <div className="App">
              <div className="jumbotron text-center">
                <h1 className="display-4">Shopping List</h1>
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <hr/>
                <form>
                    <div className="form-group">
                        <input className="form-control" ref="text" type="text"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Add New item</button>
                    </div>
                </form>
              </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
