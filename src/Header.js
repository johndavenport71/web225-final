import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let value = event.target.attributes.value.value;
        this.props.changeView(value);
        let list = document.getElementsByTagName('li');
        for(let i = 0; i < list.length; i++) {
            list[i].classList.remove('current');
            if(list[i].attributes.value.value === value) {
                list[i].classList.add('current');
            }
        }
    }

    render() {
        return (
            <header>
                <h1>Martha's</h1>
                <nav>
                    <ul>
                        <li onClick={this.handleClick} value="about">About Us</li>
                        <li onClick={this.handleClick} value="menu">Our Menu</li>
                        <li onClick={this.handleClick} value="contact">Reservations</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header