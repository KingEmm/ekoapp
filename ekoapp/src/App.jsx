import { useState } from 'react'
import Hello from './component/Hello';
// import FunCom from './component/FunCom';
// import ClassComp from './component/ClassComp'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Name from './component/Name';
// import Eample from './component/Eample';
// import ClassExam from './component/ClassExam';
// import Form  from './component/Form';
import CompA from './component/CompA';
import CompB from './component/CompB';
import React from 'react';
import Counter from './components/Counter';
import Count from './components/Count';


export const MyContext = React.createContext()


function App() {
  function click(){
    prompt('What is your name'),3000
  }

  return (
    <div>
       {/* < Name/>
       < Eample name = {['Python', 'Java','c++','js']}/>
       < ClassExam name = {['django', 'react','Veu','Flask api']}/>  
      <h1>hi There how are you</h1>
      < Hello name="Okafor" lastname="Emmanuel" />
      < FunCom/>
      < ClassComp email='kinge7916@gmail.com' myClick={click}/>
      < Hello/> 

      < MyContext.Provider value='This is my context'>
      < CompA/>
      </MyContext.Provider>
      < Counter/> */}
      < Count/>
      
      


    </div>
  )
};

export default App
