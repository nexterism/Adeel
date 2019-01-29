import React,{Component} from 'react';
import {Link} from "react-router-dom";

const Services =(home)=>{
	




   
		var box=home.ser[0].icons.c.map((v,i)=>{
			return(
			  
				


				<div className="col-md-4 col-sm-6 col-xs-12 info">
		   	<div className="service-div shadow background-color-white">
		     <i className="Medium material-icons icon-color">{v}</i>
		     <h5 className="heading-h5">{home.ser[0].headings.h[i]}</h5>
		     <p className="lead">{home.ser[0].lead.l1}</p>
		   </div>    
	      </div>
			  
			)
		  })



        var response=home.ser.map((obj)=>{

         
        return(
            
            <div>
              
            <section className="section section-service" className="text-center padding background-color">
	    <div className="container">
	     <div className="div-heading">
		  <h2 className="heading">{obj.heads.title1}</h2>
		  <p className="lead">{obj.heads.title2}</p>	
		   </div>
		  <div className="row"> 
		   {box}
		</div>
	   </div>  
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
export default Services;