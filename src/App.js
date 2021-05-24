import React, { useState,useRef, useEffect } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  // ! USESTATE
  const [color, setColor] =useState("");
  const [error, setError] = useState(false);
  const [list, setList]= useState(new Values("#f41056").all(10));

  // !USEREF
  const refColor = useRef(null)
  const refColorValue = useRef(null)
 
  // ! input function : Select nuber of tiles
  const handleRef =(e)=>{
    e.preventDefault()
    let value1 = parseInt(refColor.current.value)
    return value1
    
  }
  
  // ! input function :Generate Color
  const handleSubmit= (e)=>{
      e.preventDefault()
      try {
        let colors = new Values(color).all(handleRef(e));
        setList(colors);
        setError(false);              
      } catch (error) {
        setError(true);
        console.log(error);
      }
  }

  useEffect(()=>{
    refColor.current.focus();
    refColorValue.current.focus();
  })

  return (
  <>
  <section className="container">
  <h3>color generator</h3>

  <form  onSubmit = {handleRef}>
  <label htmlFor="number"></label>
    <input type="number"  name ="number" id = "number" ref = {refColor}/>
    <button className="btn p" type="submit">select number of color tiles</button>
  </form>

  <form onSubmit = {handleSubmit}>
    <input type="text" value = {color} onChange = {(e)=>setColor(e.target.value)} placeholder ="#f15025" className = {`${error ?'error':null}`} ref = {refColorValue}/>
    <button className ="btn" type="submit">Generate</button>
  </form>
  </section>
  
  <section className="colors">
    {list.map((color,index)=>{      
      return <SingleColor key ={index} {...color} index={index} hexColor = {color.hex}/>
    })}
  </section>
  </>
  )
}

export default App
