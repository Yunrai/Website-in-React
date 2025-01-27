import Navigation from "../components/navigation"
import Footer from "../components/footer"
import ContactForm from "../components/contactForm";
import ContactText from "../components/contactText";

function Contact(){
    return(
        <>
        <header className="App-header">
        <div className="navigation">   
             <Navigation />
        </div>

        </header>
   

        <div className='content'>
            <div class="contact">
                <div class="contact-left">
                    <ContactText />
                </div>
                <div class="contact-right"> 
                    <ContactForm />
                </div>
            </div>
        </div>

        <div className="footer">
             <Footer />
        </div>
       
        </>
    )
}

export default Contact;