import React, { Component } from 'react';
import MenuItem from './Menu-item';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        let url = 'https://jdavenportoti.com/wp/wp-json/wp/v2/posts?categories=7';
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({items: data});
        })
        .catch(console.log);
    }//end component mount

    render() {
        return(
            <>
                <h2>Menu</h2>
                <MenuItem items={this.state.items} />
            </>
        );
    }
}

export default Menu