//Emmet
//Difference b/w Library and Framework
//what is CDN
//crossorigin attribute in script tag
//React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    'h1', 
    {id: 'heading', xyz:'abc'} , 
    'Hello World'
    );

console.log(heading); //object

const parentElement = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id : 'child'},
        [
            React.createElement(
                'h1',
                {},
                'Nested components in React'
            ),
            React.createElement(
                'h2',
                {}, 
                'h2 Component'
            ),
            React.createElement(
                'p',
                {id:'para'},
                'This is a paragraph'
            )
        ]
    )
)
console.log(parentElement);

const jsxHeading = (
    <h1 id='heading' className='head'>
        This is JSX
    </h1>
);

console.log(jsxHeading);
console.log(heading);


//React Components
const headingComponent = ()  => {
    return <h1>React Functional Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);

