import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';
import predictDieases from './pages/predictDieases';
import ChatBot from "./pages/chat"
import Login from './pages/Login';
import SignUP from './pages/signup';
// import Meditation from './pages/Meditation/Meditation';
import heptities from "./pages/predict/predictList/Hepatitis"
import breast from "./pages/predict/predictList/Breast"
import ins from "./pages/predict/predictList/Insurance"
import skin from "./pages/predict/predictList/Skin"
import stomach from "./pages/predict/predictList/Stomach"
import Yoga from "./pages/yoga"
function App() {
  

  return (
   <Router>
   <Navbar/>
    <Routes>
      <Route path='/' Component={HomePage} exact/>
      <Route path= '/predictDiseases' Component={predictDieases}/>
      <Route path='/chatbot' Component={ChatBot}/>
      <Route path='/login' Component={Login}/>
      <Route path ='signup' Component={SignUP}/>
      {/* <Route path='/meditation' Component={Meditation}/> */}
      <Route path ='/predictDiseases/Heptities' Component={heptities}/>
      <Route path ='/predictDiseases/skin' Component={skin}/>
      <Route path ='/predictDiseases/breastCancer' Component={breast}/>
      <Route path ='/predictDiseases/stomach' Component={stomach}/>
      <Route path ='/predictDiseases/insurance' Component={ins}/>
      <Route path ='/yoga' Component={Yoga}/>

    </Routes>
   <Footer/>
   </Router>
  )
}

export default App
