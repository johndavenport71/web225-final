import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: {},
      display: 'About'
    }

    this.handleView = this.handleView.bind(this);
  }

  handleView(value) {
    console.log(value);
    this.setState({display: value});
  }
  
  render () {
    return (
        <div className="wrapper">
          <Header changeView={this.handleView} />
          <main>
            {this.state.display === 'about' ? <About /> : ''}
            {this.state.display === 'menu' ? <Menu /> : ''}
            {this.state.display === 'contact' ? <Contact /> : ''}
          </main>
        </div>
      );
    
  }
  
}

export default App;
