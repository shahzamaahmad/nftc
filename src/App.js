import './index.css';
import Navbar from './components/Navbar'
import Navigation from './components/Navigation';
import Crousal from './components/Crousal'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navigation />
      <Crousal />
      <SectionOne />
      <SectionTwo />


    </div>
  );
}

export default App;
