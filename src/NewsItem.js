import React from 'react';

const NewsItem = ({ items }) => {
    return (
        <div id="newsfeed">
            {items.map((item, i) => (
                <div className="card" key={i}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered}} />
                        <p>{item.date}</p>
                        <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                    </a>
                </div>
            ))}
        </div>
            
    );
};

export default NewsItem