import React, { Component } from 'react';
import NewsItem from './NewsItem';

class Newsfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        let url = 'https://jdavenportoti.com/wp/wp-json/wp/v2/posts?categories=5';
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
            <aside className="news">
                <h2>News</h2>
                <NewsItem items={this.state.items} />
            </aside>
        );
    }
}

export default Newsfeed