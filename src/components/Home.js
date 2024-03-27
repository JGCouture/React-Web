import { useEffect, useState } from 'react';
import Logo from '../images/logo.JPG';
import Mona from '../images/monalisagif.gif';
import flowVincent from '../images/Flow Vincent.gif'
import Google from '../images/google-1-1.svg';
import Facebook from '../images/facebook-7.svg';
import Amazon from '../images/logo-amazon.svg';
import Goldman from '../images/goldman-sachs-2.svg';
import Morgan from '../images/jp-morgan.svg';
import p1 from '../images/portfolio-1.jpg';
import p2 from '../images/portfolio-2.jpg';
import p3 from '../images/portfolio-3.jpg';
import p4 from '../images/portfolio-4.jpg';
import p5 from '../images/portfolio-5.jpg';
import p6 from '../images/portfolio-6.jpg';

import t1 from '../images/team-1.jpg';
import t2 from '../images/team-2.jpg';
import t3 from '../images/team-3.jpg';
import t4 from '../images/team-4.jpg';

import 'animate.css';
import 'wowjs/css/libs/animate.css';
import WOW from 'wowjs';



import '../styles/Home.css';
// import '../styles/animate.css';

import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';

function Home(){
    const [activeFilter, setActiveFilter] = useState('*'); 

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
  
    useEffect(() => {
        imagesLoaded('#container', function () {
          var elem = document.querySelector('.grid');
          var iso = new Isotope(elem, {
            itemSelector: '.grid-item',
            masonry: {
              columnWidth: '.grid-item'
            }
          });

          iso.arrange({ filter: activeFilter }); 
    
          let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
          filterButtons.forEach(btn =>
            btn.addEventListener('click', (event) => {
              let filterValue = event.target.getAttribute('data-filter');
              setActiveFilter(filterValue);
              iso.arrange({
                filter: filterValue
              });
            })
          );
        });
    }, [activeFilter]);
    return (
        <div className='container-fluid'>

            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="logo" src={Logo} alt="logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse collapse show justify-content-end bg-white " id="navbarCollapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown me-4">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                        <ul className="dropdown-menu">

                                            <li><a className="dropdown-item" href="javascript:void(0)">Home 1</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Home 2</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Home 3</a></li>

                                        </ul>
                                    </li>

                                    <li class="nav-item me-4">
                                        <a class="nav-link" href="#">About</a>
                                    </li>

                                    <li className="nav-item dropdown me-4">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
                                        <ul className="dropdown-menu">

                                            <li><a className="dropdown-item" href="javascript:void(0)">Service 1</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Service 2</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Service 3</a></li>

                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown me-4">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">

                                            <li><a className="dropdown-item" href="javascript:void(0)">Pages 1</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Pages 2</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Pages 3</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Pages 4</a></li>

                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown me-4">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">

                                            <li><a className="dropdown-item" href="javascript:void(0)">Blog 1</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Blog 2</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Blog 3</a></li>
                                            <li><a className="dropdown-item" href="javascript:void(0)">Blog 4</a></li>

                                        </ul>
                                    </li>

                                    <li class="nav-item me-4">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>

                                    <form action="#" className="search-form me-4">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                        <button type="submit"><i class="lni lni-search-alt search-button"></i></button>
                                    </form>
                            
                                </ul>

                        </div>
                        
                    </div>
                </nav>
            </header>
        

            <section className='mt-5 pt-5'> 
                <div className='container-fluid'>
                    <div className="row align-items-center mt-5">
                        <div className="col-xl-5 col-sm-12 mt-5 my-3">
                            <div className="hero-content-wrapper">
                                <h2 className="mb-2 wow fadeInDown" data-wow-delay=".2s">AI Solution</h2>
                                <h1 className="mb-2 wow fadeInDown" data-wow-delay=".2s">Multipurpose Software Developments</h1>
                                <p className="mb-3 wow fadeInLeft" data-wow-delay=".4s">Artificially intelligent tools for naturally creative humans.</p>
                                <a className="theme-button" href="javascript:void(0)">Get Started</a>
                            </div>
                        </div>

                        <div class="col-xl-7 col-sm-12">
                        
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="video-btn me-5">
                                    <a href="javascript:void(0)" className=""><i class="lni lni-play"></i></a>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <img src={Mona} alt="" className="img-fluid wow fadeInRight Mona-image rounded me-2" data-wow-delay=".5s"/>
                                        <img src={flowVincent} alt="" className="img-fluid wow fadeInRight flowVincent-image rounded" data-wow-delay=".5s"/>
                                    </div>
                                
                                </div>

                            </div>
                        
                        </div>

                    </div>

                </div>
              

            </section>


            <section className="feature-section mt-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
                            <div className="section-title text-center mb-55">
                                <span className="wow fadeInDown" data-wow-delay=".2s">Feature</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Why Chose Us?</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">State-of-the-art Technologies and Sophisticated Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className='row row-cols-1 row-cols-md-3'>
                        <div className='col'>
                            <div className="card shadow-sm h-100">
                              
                                <div className="card-body">
                                    <div className="feature-icon box-icon-style">
                                        <i className="lni lni-layers scale-icon"></i>
                                    </div>
                                    <h5 className="card-title">Deep Learning</h5>
                                    <p className="card-text">Training artificial neural networks with a large amount of data to recognize patterns</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col'>
                            <div className="card shadow-sm h-100">
                              
                                <div className="card-body">
                                    <div className="feature-icon box-icon-style">
                                        <i className="lni lni-code-alt scale-icon"></i>
                                    </div>
                                    <h5 className="card-title">Software Development</h5>
                                    <p className="card-text">Conceptualization of software solutions to address specific needs or problems</p>
                                </div>
                                
                            </div>
                        </div>


                        <div className='col'>
                            <div className="card shadow-sm h-100">
                              
                                <div className="card-body">
                                    <div className="feature-icon box-icon-style">
                                        <i className="lni lni-agenda scale-icon"></i>
                                    </div>
                                    <h5 className="card-title">Quantitative Analysis</h5>
                                    <p className="card-text">Examination and interpretation of numerical data to understand patterns</p>
                                </div>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="portfolio-section pt-130 pb-100 mt-5">
                <div id="container" className="container">
                    <div className="row align-items-end my-3">
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title mb-60">
                                <span className="wow fadeInDown" data-wow-delay=".2s">Portfolio</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Professional Work</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title mb-60">
                                <p className="wow fadeInUp" data-wow-delay=".4s">We Crafted an awesome design library that is
                                    robust aintuitive to use. No matter you're building a busine presentation websit or a
                                    complex web application.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="portfolio-btn-wrapper">
                                <button className={`portfolio-btn ${activeFilter === '*' ? 'active' : ''}`} data-filter="*">All</button>
                                <button className={`portfolio-btn ${activeFilter === '.branding' ? 'active' : ''}`} data-filter=".branding">Deep Learning</button>
                                <button className={`portfolio-btn ${activeFilter === '.marketing' ? 'active' : ''}`} data-filter=".marketing">Quantitative Analysis</button>
                                <button className={`portfolio-btn ${activeFilter === '.web' ? 'active' : ''}`} data-filter=".web">Web Design</button>
                                <button className={`portfolio-btn ${activeFilter === '.graphic' ? 'active' : ''}`} data-filter=".graphic">Graphic Design</button>
                            </div>
                        </div>
                    </div>
                    <div className="row grid">
                    <div className="col-lg-4 col-md-6 grid-item branding marketing">
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <img src={p1} alt=""/>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="overlay-content">
                                    <h4>Product Design</h4>
                                    <p>We Crafted an awesome design library that is robust and intuitive to business presentation.</p>
                                    <a href="portfolio-single.html" className="theme-btn border-btn rounded">Full View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item marketing web">
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <img src={p2} alt=""/>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="overlay-content">
                                    <h4>Product Design</h4>
                                    <p>We Crafted an awesome design library that is robust and intuitive to business presentation.</p>
                                    <a href="portfolio-single.html" className="theme-btn border-btn rounded">Full View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item web graphic">
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <img src={p3} alt=""/>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="overlay-content">
                                    <h4>Product Design</h4>
                                    <p>We Crafted an awesome design library that is robust and intuitive to business presentation.</p>
                                    <a href="portfolio-single.html" className="theme-btn border-btn rounded">Full View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item branding web">
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <img src={p4} alt=""/>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="overlay-content">
                                    <h4>Product Design</h4>
                                    <p>We Crafted an awesome design library that is robust and intuitive to business presentation.</p>
                                    <a href="portfolio-single.html" className="theme-btn border-btn rounded">Full View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item web marketing">
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <img src={p5} alt=""/>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="overlay-content">
                                    <h4>Product Design</h4>
                                    <p>We Crafted an awesome design library that is robust and intuitive to business presentation.</p>
                                    <a href="portfolio-single.html" className="theme-btn border-btn rounded">Full View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item marketing graphic">
                        <div className="portfolio-item-wrapper">
                            <div className="portfolio-img">
                                <img src={p6} alt=""/>
                            </div>
                            <div className="portfolio-overlay">
                                <div className="overlay-content">
                                    <h4>Product Design</h4>
                                    <p>We Crafted an awesome design library that is robust and intuitive to business presentation.</p>
                                    <a href="portfolio-single.html" className="theme-btn border-btn rounded">Full View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className='container px-0'>
                    <div className="row">
                            <div className="col-xl-5 col-lg-7 mx-auto">
                                <div className="section-title text-center mb-60">
                                    <span className="wow fadeInDown" data-wow-delay=".2s">Team</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Meet Our Expert</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Intelligent members are always there to help create products</p>
                                </div>
                            </div>
                    </div>
                    <div className='team-members d-flex justify-content-between my-5'>
                    
                        <div className="card">
                            <img src={t1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Machine Learning Engineer</p>
                            </div>
                        </div>
                
                        <div className="card">
                            <img src={t2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Web Designer</p>
                            </div>
                        </div>
                
                        <div className="card">
                            <img src={t3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Quantitative Analyst</p>
                            </div>
                        </div>
                    
                        <div className="card">
                            <img src={t4} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Software Engineer</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
               
            </section>

            <section className="subscribe-section">
                <div className="container im-bg rounded">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title mt-4 ms-5">
                                <span className="text-white wow fadeInDown" data-wow-delay=".2s">Subscribe</span>
                                <h2 className="text-white mb-40 wow fadeInUp" data-wow-delay=".4s">Subscribe Our Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 ">
                            <form action="#" className="subscribe-form wow fadeInRight mt-5" data-wow-delay=".4s">
                                <input type="text" name="subs-email" id="subs-email" placeholder="Your Email"/>
                                <button type="submit"><i className="lni lni-telegram-original"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img className="logo" src={Logo} alt="logo"/>
                        </a>

                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    </div>

                    <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    </div>

                    <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    </div>
                </footer>

                </div>
            </section>

            <section className=''>
                <div className='container border-top'>
                    <div className="copyright-area">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="footer-social-links">
                                    <ul className="d-flex ps-3 mt-2">
                                        <li><a href="javascript:void(0)"><i className="lni lni-facebook-original"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-instagram-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              
                
            </section>

    
        </div>
       
    )
}

export default Home;