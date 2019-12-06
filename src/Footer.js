import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
        }
    }

    componentDidMount() {
        let url = 'https://jdavenportoti.com/wp/wp-json/wp/v2/pages?slug=footer';
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let pageData = data[0];
            var parser = new DOMParser();
            var parsed = parser.parseFromString(pageData.content.rendered,'text/html');
            //create an array for each 
            var nodes = [];
            for(let i = 0; i < parsed.body.children.length; i++) {
                nodes.push(parsed.body.children[i]);
            }
            this.setState({content: nodes});
        })
        .catch(console.log);
    }

    render() {
        return(
            <footer>
               {this.state.content.map((item, i) => (<p key={i}>{item.innerText}</p>))}
            </footer>
        );
    }
}

export default Footer