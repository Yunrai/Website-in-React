import './App.scss';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Content from './components/content';

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
