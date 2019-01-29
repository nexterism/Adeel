import React,{Component} from 'react';

const Perfumes =(home)=>{

	  
		var box=home.per[0].img.image.map((v,i)=>{
			return(
			  
				<div className="col-lg-3 col-sm-6 col-xs-12 info">
					<img className="img-responsive" src={v}/>
					<h3 className="heading-h3">{home.per[0].heading.h[i]}</h3>
					<p className="lead">{home.per[0].lead.l1}</p>
				   </div>
			  
			)
		  })
        var response=home.per.map((obj)=>{

         
        return(
            
            <div>
               <section className="section section-perfume" className="text-center padding background-color">
     <div className="container">
      <div className="div-heading">
	   <h2 className="heading">{obj.head.title1}</h2>
	   <p className="lead">{obj.head.title2}</p>	
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

export default Perfumes;