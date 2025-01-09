import { useState } from 'react'
import './App.css'
import SideNav from './ui/sidenav'

function App() {
  return (
    <>
      <div className='main-container'>
        <SideNav/>
        <div class='content'>
          <section id='bio'>
            <h2>BIO</h2>
            <p>
              I am a Bachelor's of Computer Science Graduate from the University of Waterloo, minoring in Combinatorics and Optimization.
              My interests include Computer Vision, Machine Learning, Artificial Intelligence, Graphics, and Game Theory.
              I have interned previously at Huawei, Nuro, the Royal Canadian Air Force, and Shakudo.
              Apart from schooling and my professional career, I am a dancer, previously a part of <a href='https://www.instagram.com/uw.origins/'>UW Origins</a> and president of <a href='https://www.instagram.com/uwhiphop/'>UW Hip Hop</a>.
            </p>
          </section>
          <section id='education'>
            <h2>Education</h2>
            <p>
              I attended the University of Waterloo from 2019-2024 and graduated with an Honours Bachelor of Computer Science with a minor in Combinatorics and Optimization.
              Here's a summary of what I did there:
            </p>
            <h3>Final GPA: 89.38/100</h3>
            <h3>Awards: Dean's Honours List, University of Waterloo President's Scholarship of Distinction</h3>
            <h3>Relevant Coursework:</h3>
            <ul className='double-column-list'>
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>Computational Vision</li>
              <li>Computer Networks</li>
              <li>Cryptography</li>
              <li>Game Theory</li>
              <li>Stochastic Processes</li>
              <li>Algorithms and Data Structures</li>
              <li>User Interfaces</li>
              <li>Numerical Computation</li>
              <li>Optimization</li>
              <li>Network Flow Theory</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
