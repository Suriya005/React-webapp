import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><Link to="about" smooth={true} duration={500} class="nav-link js-scroll-trigger" href="#about">About</Link></li>
                        <li class="nav-item"><Link to="projects" smooth={true} duration={500}  class="nav-link js-scroll-trigger" href="#projects">Projects</Link></li>
                        <li class="nav-item"><Link to="signup" smooth={true} duration={500}  class="nav-link js-scroll-trigger" href="#signup">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Grayscale</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                    <a class="btn btn-primary js-scroll-trigger" href="#about">Get Started</a>
                </div>
            </div>
        </header>
        </>
    )
}

export default header
