import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount() {
        let url = 'https://jdavenportoti.com/wp/wp-json/wp/v2/pages?slug=contact';
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let pageData = data[0];
            let display = document.getElementById('contact');
            var heading = document.createElement("H2");
            heading.innerHTML = pageData.title.rendered;
            display.append(heading);
            display.insertAdjacentHTML("beforeend", pageData.content.rendered);
        })
        .catch(console.log);
    }//end component mount

    render() {
        return(
            <div id="contact" />
        );
    }
}

export default Contact