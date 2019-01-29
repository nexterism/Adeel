import React,{Component} from 'react';
import Hero from './Hero';
import Perfumes from './Perfumes'; 
import Testimonials from './Testimonials';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';


const Home =(props)=>{
   
        return(
            <div>
                <Hero hero={props.hero}/>
                <Perfumes per={props.hero}/>
                <Testimonials test={props.hero}/>
                <Services ser={props.hero}/>
                <Team tea={props.hero}/>
                <Contact con={props.hero} />
            </div>
        )
    }

export default Home;