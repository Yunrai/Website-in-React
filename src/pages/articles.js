import Navigation from "../components/navigation"
import Footer from "../components/footer"

function Articles(){
    return(
        <>
        <header className="App-header">
        <div className="navigation">   
             <Navigation />
        </div>

        </header>
   

        <div className='content'>
      

        </div>

        <div className="footer">
             <Footer />
        </div>
        
        </>
    )
}

export default Articles;