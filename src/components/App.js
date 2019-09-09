import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/AllenAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ♥ by Allen Joseph AJ
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="https://github.com/AllenAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo"  width={500} height={300}/>
                </a>
                <h1>Ethereum dApp Starter Kit</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                <p>
                <a
                  className="App-link"
                  href="https://github.com/AllenAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u><b>Follow me on Github! </b></u>
                </a>
                </p>
                <p>
                <a
                  className="App-link"
                  href="https://www.instagram.com/allen.joseph.aj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <u><b>Follow me on Instagram! </b></u>
                </a>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
