import React, { useEffect } from 'react'

const Profile = (props) => {

  useEffect(() => {
    this.timer = setInterval(() => {
      console.log('NAMASTE REACT OP');
    }, 1000);

    console.log('useEffect');
    return () => {
      // console.log('useEffect return');
      clearInterval(timer);
    }
  }, []);

  console.log('Render');
  return (
    <div>
        <h2>Profile Component</h2>
        <h2>{props.name}</h2>
    </div>
  )
}

export default Profile