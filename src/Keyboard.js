import React, { useState } from 'react'
import './Keyboard.css'

const keys = [
  "Ac","+/-","%","/",
  7,8,9,"*",
  4,5,6,"-",
  1,2,3,"+",
  0,".","="
]; 

function Keyboard({setDisplayValue}) {
  const [numbers, setNumbers]= useState([])
  const [sign, setSign] = useState("")


  return (
    <div className='keyboard'>
     {keys.map(key =>{
      if (typeof key==='number'){
        return (
          <button onClick={
            () => {
            setNumbers([...numbers,key])
            setDisplayValue(key)
            }
          }>{key}</button>
        )

      } else if (
        key === "+" 
        || key === "-"
        || key === "/"
        ||key==="*"
        ){
          return(
          <button onClick={
            () => setSign(key)
          }>{key}</button>
          );   

        }else if (key==="="){
          return(
          <button onClick={()=>{
            let res = 0;
            const num1 = numbers[0];
            const num2 = numbers[1];
            if (sign === '+'){
              res = num1 + num2;
            }else if (sign==='-'){
              res= num1 - num2;
            }else if (sign==='*'){
              res = num1 * num2; 
            }else if (sign==='/'){
              res = num1 / num2;
            }
            setDisplayValue(res);
            setNumbers([]);
            setSign("");
          }}>{key}</button>
          );  
        }

    return(
      <button>{key}</button>
      )
     })}
    </div>
  )
}

export default Keyboard