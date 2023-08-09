import React from 'react'
 const m = [
    {name: "Piyush",branch: "CSE", rollno:"101"},
    {name: "Gopal",branch: "IT", rollno:"102"},
    {name: "Aman",branch: "CSDS",rollno:"103"},
    {name: "Harsh",branch: "ME" ,rollno:"104"},
    {name: "Ankit",branch: "IT", rollno:"105"},
 ];
export default function ConditionRendering() {
  return (
    <div>
        {
            m.map(function(obj){
                return(
                <p>student name is {obj.name},branch of student{obj.branch}, rollno of student{obj.rollno}</p>)
            })
        }
         </div>
  )
}
