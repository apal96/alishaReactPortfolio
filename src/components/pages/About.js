import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
<div class="container">
  <div class="row">
    <div class="col">
     
  <img
    src="https://github.com/apal96/alishaPortfolio/blob/main/images/Screen%20Shot%202021-08-10%20at%205.42.16%20PM.png?raw=true"
    alt="Alisha  "
    width="200px"
    height="200px"
    id = "profilepic"/>
    </div>
  </div>
    <div class="row">
    <div class="col">
    <p id = "about">About Me</p>
    </div>
    </div>
     <div class="row justify-content-center">
    <div class="col-4">
      <p>I am currently enrolled in UC Berkerley</p>
    </div>
     </div>


</div>
  );
}