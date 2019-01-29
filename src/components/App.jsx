import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

import Services from './Services';
import Perfumes from './Perfumes';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';

import Footer from './Footer';
import data from './data';
class App extends React.Component{
    state = {
        
        
    }
    render(){
        return (
        <div className="app">
         
            <Navbar nav={data} />
            <Route exact path="/Home" render={()=><Home  hero={data}/> } />
            <Route exact path="/Home"/>
            
            <Route path="/Services" render={()=>{return <Services ser={data}/>}} />
            <Route path="/Perfumes" render={()=>{return <Perfumes per={data}/>}}  />
            <Route path="/Testimonials" render={()=>{return <Testimonials test={data}/>}} />
            <Route path="/Team" render={()=>{return <Team tea={data}/>}} />
            <Route path="/Contact" render={()=>{return <Contact con={data}/>}} />
            <Footer />
            
        </div>
        );
        
    }
}
export default App;