import { useState } from 'react'
import './App.css'
import SideNav from './ui/sidenav'

function App() {
  return (
    <>
      <div className='main-container'>
        <SideNav/>
        <div class='content'>
          <h1>Hi, I'm Ben.</h1>
          <section id='bio'>
            <h2>BIO</h2>
            <p>
              I am a Bachelor's of Computer Science Graduate from the University of Waterloo, minoring in Combinatorics and Optimization.
              My interests include Computer Vision, Machine Learning, Artificial Intelligence, Graphics, and Game Theory.
              I have interned previously at Huawei, Nuro, the Royal Canadian Air Force, and Shakudo.
              Apart from schooling and my professional career, I am a dancer, previously a part of <a href='https://www.instagram.com/uw.origins/'>UW Origins</a> and president of <a href='https://www.instagram.com/uwhiphop/'>UW Hip Hop</a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
