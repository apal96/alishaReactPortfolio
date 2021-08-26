import React from 'react';
// // Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import '../components/styles/Footer.css';

function Footer() {
  return (

    <footer class = "footer-nav">  
       

     <ul class="nav justify-content-center">
 
       <li class="nav-item">
         <a class="nav-link" href="https://www.linkedin.com/in/alisha-pal-6635361b5/" target="_blank" rel="noreferrer" id ="linked-in">LinkedIn</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="https://github.com/apal96" target="_blank" rel="noreferrer"  id ="github">Github</a>
       </li>

     </ul>
    
     </footer>
  );
}

export default Footer;
