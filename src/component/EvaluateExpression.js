import React from 'react'
let x = 36;
let y = 35;


export default function EvaluateExpression() {
  return (
    <div>
      
      <h1>Evaluting expression</h1>
      <h3> {x} {">"} {y} : {x>y ?"True" :"False"}</h3>
    </div>
  )
}
