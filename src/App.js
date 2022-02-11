// import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import './App.css';

export default function App() {
  return (
    <>
    <div className="App">
      <Navbar title="TextLab" linkOne="Home" linkTwo="About"></Navbar>   
    </div>
    <div>
      {/* <About/> */}
      <TextArea/>
    </div>
    </>
  );
}

