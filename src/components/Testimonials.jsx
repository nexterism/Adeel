import React,{Component} from 'react';

const Testimonial =(home)=>{
    

   

        var box=home.test[0].canvast.c.map((v,i)=>{
			return(
			  
				<div className="col-md-3 col-sm-6 col-xs-12 info">
                    <div className="circle-one circle"><canvas className="can1" width="100" height="100" ></canvas><h5 className="heading-h3">{v}</h5></div>
                    <h3 className="heading-h3">{home.test[0].headingt.h[i]}</h3>
                    <p className="lead">{home.test[0].lead.l1}</p>
                     </div>
			  
			)
		  })

        var response=home.test.map((obj)=>{

         
        return(
            
            <div>
               <section className="section section-testimonials" className="text-center padding">
        <div className="container">
         <div className="div-heading">
          <h2 className="heading">{obj.headt.title1}</h2>
          <p className="lead">{obj.headt.title2}</p>	
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

export default Testimonial;