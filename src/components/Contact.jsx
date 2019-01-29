import React,{Component} from 'react';

const Contact =(home)=>{

  
console.log(home);


  
    var boxesLeft=home.con[0].iconcon.left.map((v,i)=>{
      return(
        <div >
          <div className="contact-div shadow background-color-white info">
            <i className="Medium material-icons icon-color">{v}</i>
            <h5 className="heading-h5">{home.con[0].heade.left[i]}</h5>
            <p className="lead">{home.con[0].lead.l1}</p>
          </div>
        </div>
      )
    })
    var boxesRight=home.con[0].iconcon.right.map((v,i)=>{
      return(
        <div >
          <div className="contact-div shadow background-color-white info">
            <i className="Medium material-icons icon-color">{v}</i>
            <h5 className="heading-h5">{home.con[0].heade.right[i]}</h5>
            <p className="lead">{home.con[0].lead.l1}</p>
          </div>
        </div>
      )
    })
    var response=home.con.map((obj)=>{

     
    return(
        
        <div>
           <section className="section-contact" className="text-center padding background-color">
   	<div className="container">
   	 <div className="div-heading">
	   <h2 className="heading">{obj.headcon.title1}</h2>
	   <p className="lead">{obj.headcon.title2}</p>	
	 </div>	
   	 <div className="row">
   	   <div className="col-md-3 col-xs-12">
          {boxesLeft}    
   	  </div>
   	  <div className="col-md-6 col-xs-12 shadow input-div background-color-white info">
         <div className="input-field">
          <i className="material-icons prefix">{obj.icon2con.i1}</i>
          <input className="icon_prefix" type="text" className="valclassNameate"/>
          <label htmlFor="icon_prefix">{obj.labelcon.la1}</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">{obj.icon2con.i2}</i>
          <input className="icon_prefix" type="text" className="valclassNameate"/>
          <label htmlFor="icon_prefix">{obj.labelcon.la2}</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">{obj.icon2con.i3}</i>
          <input className="icon_telephone" type="tel" className="valclassNameate"/>
          <label htmlFor="icon_telephone">{obj.labelcon.la2}</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">{obj.icon2con.i4}</i>
          <input className="icon_prefix" type="text" className="valclassNameate"/>
          <label htmlFor="icon_prefix">{obj.labelcon.la4}</label>
        </div>
        <a className="waves-effect waves-light btn button-background"><i className="material-icons right">{obj.icon2con.i5}</i>{obj.labelcon.la5}</a>
      </div>
   	  <div className="col-md-3 col-xs-12">
         {boxesRight}
	  </div>
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

export default Contact;