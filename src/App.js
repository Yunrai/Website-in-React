import './App.scss';
import Navigation from './navigation';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigation">
             <Navigation />
       </div>

      </header>
   

    <div className='content'></div>

    <div className="footer">
         <Footer />
    </div>
      
    </div>
  );
}

export default App;
