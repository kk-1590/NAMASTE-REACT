//Emmet
//Difference b/w Library and Framework
//what is CDN
//crossorigin attribute in script tag
//React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'
import {name , fun} from './utils/fakeData';
import fakeData from './utils/fakeData';
import * as obj from './utils/fakeData';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import { lazy, Suspense } from 'react';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart';

const heading = React.createElement(
    'h1', 
    {id: 'heading', xyz:'abc'} , 
    'Hello World'
    );

    const Instamart = lazy(() => import("./components/Instamart"));

    const About = lazy(() => import('./components/About'));

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
const HeadingComponent = ()  => {
    return <h1>React Functional Component</h1>;
}

const Greet = () => (
    <h2>Welcome</h2>
);

const MainHeading = (props) => (
    <div id='container'>
        {5 > 0 ? 'positive' : 'negative'}
        {console.log('Hello console.log')}
        {heading}
        <HeadingComponent />
        <h1>JSX in React</h1>
        {<Greet />}
        <br />
        {props.children}
    </div>
)

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            {/* <Body />
            <About />
            <Contact /> */}
            {/**Outlet */}
            <Outlet />
            <Footer />
            {/* {console.log(fakeData)} */}
            {/* {console.log(obj.default)} */}
        </div>
    )
}

//configuration for router
const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element : <Body />
            },
            {
                path: '/about',
                element : <Suspense fallback={<h1>Loading</h1>}>
                            <About />
                        </Suspense>,
                children: [{
                    path: 'profile',  //don't use / === parentPath/{path}
                    element : <Profile />
                }]
            },
            {
                path: '/contact',
                element : <Contact />,
            },
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element : <Suspense fallback={<Shimmer />}>
                            <Instamart />
                        </Suspense>
            }
        ]
    },
    // {
    //     path: '/about',
    //     element : <About />
    // }
])

//React.Fragment

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MainHeading>Children prop</MainHeading>);
root.render(<RouterProvider router={appRouter}/>);

