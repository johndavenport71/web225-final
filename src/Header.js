import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.changeView(event.target.attributes[0].value);
    }

    render() {
        return (
            <header>
                <h1>The Winchester</h1>
                <nav>
                    <ul>
                        <li onClick={this.handleClick} value="about">About Us</li>
                        <li onClick={this.handleClick} value="menu">Our Menu</li>
                        <li onClick={this.handleClick} value="contact">Contact Us</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header