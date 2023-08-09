import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"



export default function Task2() {
  return (
//     <div>
//           <img src='image/abesit3.jpg'/>
//         <h1>Gaming laptop</h1>
//         <h6>RS.55000</h6>
//         <p>An excellent choice for a student</p> 
// </div> 
<div>
<div className="card" style={{width: "18rem"}}>
  <img src="image/laptop2.jpeg" class="card-Img-Center" alt="laptop"/>
  <div className="cardBody">
  <h1 className='cardTitle'>Gaming laptop</h1>
  <h6 className='cardTitle'>RS.55000</h6>
 <p className="cardTitle">An excellent choice of student.</p>
  </div>
</div>

</div>
  );
}

