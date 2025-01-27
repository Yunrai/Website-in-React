import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Description from "../components/description";

function About(){
    return(
    <>
        <header className="App-header">
        <div className="navigation">   
            <Navigation />
        </div>
        </header>
   
        <div className='content'>
            <Description />
        </div>

        <div className="footer">
            <Footer />
        </div>
    </>
    )
}

export default About;