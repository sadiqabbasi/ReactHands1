import React, {  useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import './Styles.css'
const Preview = () => {
    const [box1,setBox1]=useState(false)
    const[box2,setBox2]=useState(false)
  return (<>
          <h1>Styling Using Functional and Classcomponent</h1>
          <button className='btn1' onClick={()=>box1?setBox1(false):setBox1(true)}>To Style Using Functional Component</button>
          <button className='btn2' onClick={()=>box2?setBox2(false):setBox2(true)}>To Style Using Class Component</button>
           
           {
               box1 && <Component1 />
           }
           {
               box2 && <Component2 />
           }
  </>
    
  )
}

export default Preview