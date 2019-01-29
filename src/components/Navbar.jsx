import React,{Component} from 'react';
import {Link} from 'react-router-dom';

 const Navbar =(home)=> {

 
   
        var response=home.nav.map((obj)=>{

         
        return(
            <div>
              <nav  className="nav-bar navbar-expand-lg navbar-light sm">
            <Link to="./Home"  className="brand-logo"><span  className="logo">{obj.navBar.navheading}</span></Link>
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span  className="navbar-toggler-icon"></span>
            </button>
            <div  className="collapse navbar-collapse" id="navbarNav">
              <ul  className="navbar-nav">
                <li  className="nav-item active">
                  <Link  className="nav-link" to="./Home">{obj.navBar.nav1}<span  className="sr-only">(current)</span></Link>
                </li>
                <li  className="nav-item">
                  <Link  className="nav-link" to="./Perfumes">{obj.navBar.nav2}</Link>
                </li>
                <li  className="nav-item">
                  <Link  className="nav-link" to="./Testimonials">{obj.navBar.nav3}</Link>
                </li>
                <li  className="nav-item">
                  <Link  className="nav-link" to="./Services">{obj.navBar.nav4}</Link>
                </li>
                <li  className="nav-item">
                  <Link  className="nav-link" to="./Team">{obj.navBar.nav5}</Link>
                </li>
                
                <li  className="nav-item">
                  <Link  className="nav-link" to="./Contact">{obj.navBar.nav6}</Link>
                </li>
               
              </ul>
            </div>
          </nav>
            </div>


   
        )
         });
         return(
          <div>
              
              <div>{response}</div>
          </div>
      )
    }

export default Navbar;