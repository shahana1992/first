import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg fixed-top  na">
        <div class="container-fluid">
            <img src="Project_Photos/logonew.png" alt="beauty" />
            <a class="navbar-brand logo" href="#" >Glam Bride</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        
                <span class="navbar-toggler-icon"></span>
        
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="AboutUs.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Services.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>
         
    </div>
  )
}
