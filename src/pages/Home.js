import React from 'react';
import dp from "../images/title_page_picture.png"
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home-image'>
        <img src={dp} alt="Me"/>
      </div>
      <h1>Hi, my name is Ben Lin.</h1>
      <p>Computer Science New Grad from the University of Waterloo</p>
    </div>
  );
}

export default Home;