import './App.scss';
import Navigation from './navigation';
import Logo from './logo';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigation">
          <div className="menu">
             <Logo />
             <Navigation />
       </div>
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
