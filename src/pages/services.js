import Navigation from "../components/navigation"
import Footer from "../components/footer"
import ServicesText from "../components/ServicesText";

function Services(){
    return(
        <>
        <header className="App-header">
        <div className="navigation">   
             <Navigation />
        </div>

        </header>
   

        <div className='content'>
            <div>
                <ServicesText />
            </div>
        </div>

        <div className="footer">
             <Footer />
        </div>
        
        </>
    )
}

export default Services;