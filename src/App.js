import './App.scss';
import Navigation from './navigation';
import Footer from './footer';
import Content from './content';

function App() {
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
