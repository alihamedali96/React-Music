import './App.css';
// import TrainerCard from "./componentsDemo/TrainerCard";
// import Counter from "./componentsDemo/Counter";
import About from "./components/About";
import Greeting from "./componentsDemo/Greeting";
import Card from "./componentsDemo/Card";
import Albums from "./components/Albums";
import Navigationbar from "./components/Navigationbar";
import Filler from "./components/Filler";
import Filler2 from "./components/Filler2.js";
import Effect from "./componentsDemo/Effect";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';



function App() {
  return (
    <>
        {/* <Routes>
         <Route path="/Albums" element= {<Albums/>} />
           
    </Routes> */}
      <Navigationbar/>
      <Filler/>
     <About/>
    <Albums/>
    <Filler2/>
    {/* <Effect/> */}
   </>
  );
}

export default App;
