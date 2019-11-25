import React from 'react';

const MenuItem = ({ items }) => {
    return (
        <div>
            {items.map((item, i) => (
                <div className="card" key={i}>
                    <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered}} />
                    <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default MenuItem