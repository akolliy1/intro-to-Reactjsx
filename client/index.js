import React from 'react';
import reactDom from 'react-dom';
import Greeting from './Greeting';

const Welcome = () => {
    return (
        <div>
            Greeting(233)
            <Greeting name="taiwo" age="8888" />
            <h1>this a react app</h1>
        </div>
    )
}

reactDom.render(<Welcome />, document.getElementById('root'));