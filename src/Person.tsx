import React from 'react'


type PersonType = {
    name : {
        firstName : string
        lastName : string
    }
}

// Object Type
const Person = (props : PersonType) => {
  return (
    <div>
        First name is {props.name.firstName}
        <div>
            LastName is {props.name.lastName}
        </div>
    </div>
  )
}

export default Person