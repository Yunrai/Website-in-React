import Navigation from "../components/navigation"
import Content from "../components/content"
import Footer from "../components/footer"


function Home (){
    return (
    <>
        <header className="App-header">
        <div className="navigation">   
             <Navigation />
        </div>

        </header>
   

         <div className='content'>
            <Content />

         </div>

        <div className="footer">
             <Footer />
        </div>
   
    </>
    )
}

export default Home;