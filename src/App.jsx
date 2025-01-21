import { useState } from 'react';
import './App.css';
import SideNav from './ui/sidenav';
import cat from './assets/cat.png';
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
              Apart from schooling and my professional career, I am a dancer, currently a part of <a href='https://www.instagram.com/syncflow.co/'>FLOW</a>, a pre-competitive dance team based in Toronto.
              I was previously a part of <a href='https://www.instagram.com/uw.origins/'>UW Origins</a>, a competitive dance team based out of the University of Waterloo, 
              and president of <a href='https://www.instagram.com/uwhiphop/'>UW Hip Hop</a>, a social dance club focused on Hip-Hop dance, and one of the largest clubs on campus by membership.
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
            <div className='horizontal-flex'>
              <div>
                <h3><a href='https://github.com/benlin1221/CAMs-and-Emergency-Vehicles'>CAM and Object Detection</a></h3>
                <p>
                  Our final project for CS484, computer vision! We used the approach described in the paper <a href='https://arxiv.org/abs/1512.04150'><i>Learning Deep Features for Discriminative Localization</i></a>.
                  Modern neural networks can achieve great results in image classification. But which parts of the image is the model actually looking at to make its decision?
                  By examining the output of the last convolutional layer in the neural network, we can extract spatial information for each class of object, creating a "heatmap" showing where in the image
                  the model thinks the object is.
                </p>
              </div>
              <img src={cat} padding='5px'/>
            </div>
            <h3><a href='https://github.com/benlin1221/CS480-final/tree/main'>E-commerce Object Classification</a></h3>
            <p>
              My final project for CS480, Machine Learning. 
              In this project, I entered a kaggle competition for categorizing e-commerce objects given categorical features, a noisy image and noisy text description.
              To achieve this, I used a simple neural network for the categorical features, a recurrent neural network to parse the text information, and a convolutional neural network to process the images.
              Finally, to combine the results from the 3 different networks, another simple neural network was trained to combine the predictions.
            </p>
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
