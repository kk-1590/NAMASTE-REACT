//Emmet
//Difference b/w Library and Framework
//what is CDN
//crossorigin attribute in script tag
//React and ReactDOM

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
                'Nested components in react'
            ),
            React.createElement(
                'h2',
                {},
                'h2 Component'
            )
        ]
    )
)
console.log(parentElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentElement);

