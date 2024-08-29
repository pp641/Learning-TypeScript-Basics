import React, { useState } from 'react'

type UserType = {
    name : string,
    email : string
}

const TestinguseState = () => {

    const [ user, setUser] = useState<null | UserType >(null);
    const [isLoggedIn , setIsLoggedIn] = useState<boolean>(false)

  return (
    isLoggedIn ? 
    <div>
       {user?.email} :: {user?.name}     
    </div> :""
  )
}

export default TestinguseState