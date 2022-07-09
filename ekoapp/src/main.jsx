import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Form  from './component/Form';



// function Urls(){
//   return(
//     <Routes>
//     < BrowserRouter>
//       <Route exact path ='/' component = {App} />
//       {/* < Route exact path ='/login' component = {Form}/> */}

//     </BrowserRouter>
//     </Routes>

//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
     <Route path='/' element={<App />}>

     </Route>
     <Route path='/login' element={<Form />}>

     </Route>

    </Routes>
    
  </Router>
  // <React.StrictMode>
  //   < App/>
  // </React.StrictMode>
)
