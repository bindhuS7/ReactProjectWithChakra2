import React from 'react'
import {BrowserRouter as Router,Routes,Route} from"react-router-dom"
import Login from './Login';
import Portfolio from './Portfolio';
// import Portfolio from './Portfolio';



const App = () => {
  return (
   <Router>
    <Routes>
      <Route  path='/' element={<Login />}/>
      <Route  path='/portfolio' element={<Portfolio />}/>
    </Routes>
   </Router>
  )
}

export default App