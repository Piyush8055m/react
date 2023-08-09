import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

export default function InlineCSS() {
  return (
    <div>
      <h1 class= "abc">My first heading</h1>
      <p className='bg-success'>This is my para</p>
    </div>
  )
}
