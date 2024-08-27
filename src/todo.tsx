import React from 'react'

type GreetingName = {
    name : string
    number : number
    isLoggedIn : boolean
}

const LearningBasics = (props : GreetingName) => {
  return (
    <div>
   {props.isLoggedIn  ? 
            <div> Hello! , Here is some information about props : {props.name} : {props.number} </div>
   : ""}
    </div>
  )
}

export default LearningBasics