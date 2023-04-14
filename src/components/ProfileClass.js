import React from 'react';

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        //create state

        this.state = {
            count : 0,
            count1: 0,
        }
        console.log("Child Constructor");
    }

    componentDidMount() {
        //API Calls
        console.log('Child componentDidMount');
    }

    render() {
        return (
            <div>
                <h2>Profile Class Component</h2>
                <h2>{this.props.name}</h2>
                <h2>{this.state.count}</h2>
                <h2>{this.state.count1}</h2>
                <button onClick={() => {
                    this.setState({
                        count : 1,
                        count1: 2,
                    })
                }}>SetCount</button>
            </div>
        );
    }
}

export default ProfileClass;