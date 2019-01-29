import React,{Component} from 'react';

const Hero =(home)=> {
    
   

    
        var response=home.hero.map((obj)=>{

         
        return(
            
            <div>
               <section className="section hero">
            
           <span className="hero-title">{obj.hero.title1}<br></br>{obj.hero.title2}</span>
             <span className="btn-hero">{obj.btn.btn1}</span>
            
         </section>
            </div>

   
        )
         });
         return(
          <div>
              
              <div>{response}</div>
          </div>
      )
    }

export default Hero;