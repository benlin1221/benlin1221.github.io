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
            <h2>Bio</h2>
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
          <section id='work-experience'>
            <h2>Work Experience</h2>
            <p>Backend Engineer @ Shakudo, May 2023 - August 2023, Toronto, ON</p>
            <p>Fullstack Engineer @ Royal Canadian Air Force, September 2022 - December 2022, Kitchener, ON</p>
            <p>Software Engineer Intern, Performance @ Nuro, January 2022 - April 2022, Mountain View, CA</p>
            <p>Compiler Software Engineer Intern @ Huawei, May 2021 - August 2021, Markham, ON</p>
          </section>
          <section id='projects'>
            <h2>Projects</h2>
            <p>Will be updated with project samples later, but for now check out my <a href='https://github.com/benlin1221'>github</a></p>
          </section>
          <section id='misc'>
            <h2>Misc</h2>
            <p>Section dedicated to my hobbies and interests! Will post some dance content later.</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
