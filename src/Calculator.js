import React, { useState } from 'react'
import Display from './Display'
import Keyboard from './Keyboard'
import './Calculator.css'


function Calculator() {
    const [displayValue,setDisplayValue]= useState(0);
  return (
    <div className='calculator'>
        <Display value={displayValue}/>
        <Keyboard setDisplayValue={setDisplayValue}/>
    </div>
  )
}

export default Calculator