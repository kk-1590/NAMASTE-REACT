import React from "react";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./Profile";
import { Outlet } from "react-router-dom";

const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p> This is the Namaste React Live Course</p>
      <Outlet />
      <ProfileClass name="KK" />
      <ProfileFunction name={"Kartik"} />
    </div>
  );
};

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

        //Place for API Calls
        this.timer = setInterval(() => {
            console.log('NaMASTE REACT APP');
        },100);
        console.log('Parent componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {

        }
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('componentWillUmnount');
    }

  render() {
    console.log('Parent Render');
    return (
      <div>
        <h1>About Us Page</h1>
        <p> This is the Namaste React Live Course</p>
        <Outlet />
        <ProfileClass name="KK" />
        {/* <ProfileFunction name={"Kartik"} /> */}
      </div>
    );
  }
}

export default About;
