import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index,hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(",");
  hexColor = `#${hexColor}`

  // const hex = rgbToHex(...rgb)

  useEffect(()=>{
   const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return()=>{
      clearTimeout(timeout)
    }
  },[alert])

  return <article onClick={()=>{
    setAlert(true); 
    navigator.clipboard.writeText(hexColor)
    }} 
  className = {`color ${index > 10 && 'color-light' }`} style =  {{backgroundColor : `rgb(${bcg})`}}>
  <p className="percrnt-value">{weight}%</p>
  <p className="color-value">{hexColor}</p>
  {/* <p className="color-value">{hex}</p> */}
  {alert && <p className ="alert">copied to clipboard</p>}
  </article>
}

export default SingleColor
