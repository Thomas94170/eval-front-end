export default function ContactForm(){
    return(

      <>
      <div className="top-content">
        	
            <div className="inner-bg">
                <div className="container">
                    
                    <div className="row p-3 mb-2 bg-light text-dark">
                        <br />
                        <div className="col-12 col-sm-offset-3 form-box">
                        	
                            <div className="form-bottom contact-form">
			                    <form role="form" action="https://formspree.io/f/xrgjpkwe" method="POST">
			                    	<div className="form-group text-center">
			                    		<label className="sr-only" htmlFor="contact-email">Email</label>
                                    <br />
			                        	<input type="text" name="email" placeholder="Email..." className="contact-email form-control text-center" id="contact-email"/>
			                        </div>
                                    <br />
			                        <div className="form-group text-center">
			                        	<label className="sr-only" htmlFor="contact-subject">Objet</label>
                                        <br />
			                        	<input type="text" name="subject" placeholder="Objet..." className="contact-subject form-control text-center" id="contact-subject"/>
			                        </div>
                                    <br />
			                        <div className="form-group text-center">
			                        	<label className="sr-only" htmlFor="contact-message">Message</label>
                                        <br />
			                        	<textarea name="message" placeholder="Message..." className="contact-message form-control text-center" id="contact-message"></textarea>
			                        </div>
                                    <br />
                                    <br />
                                    <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-success border border-white">Envoyer</button>
                                    </div>
			                        <br />
			                    </form>
		                    </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </> 
    
       
)
}


