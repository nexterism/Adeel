import React,{Component} from 'react';

const Team =(home)=>{
    



    

        var box=home.tea[0].imgtea.image.map((v,i)=>{
			return(


                <div className="col-md-3 col-sm-6 col-xs-12 info">
               <img className="img-responsive img-circle center-block" src={v}/>
               <h3 className="heading-h3">{home.tea[0].headingtea.h[i]}</h3>
               <p className="lead">{home.tea[0].lead.l1}</p>
               </div>
			  
				
			  
			)
		  })



        var response=home.tea.map((obj)=>{

         
        return(
            
            <div>
               <section className="section section-team" className="text-center padding background-color">
            <div className="container">
             <div className="div-heading">
              <h2 className="heading">{obj.headtea.title1}</h2>
              <p className="lead">{obj.headtea.title2}</p>	
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

export default Team;