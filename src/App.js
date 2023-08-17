import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import bootstrap from 'bootstrap';
import proje from'./components/proje.jpg'

function App()
 {
  return<div className='App'>
    {Home}
    <Navbar/>
    <div className='intro'>
    <p>Hello I'm Kanana</p>
    </div>
    <div className='stmt'>
    <p> I'm a developer, student and a community service ethusiast based in Kenya.
    </p></div>
    

    <div className='image-container'>
<img src={proje} alt="myimage"/>
    </div>
  </div>

 }



export default App
