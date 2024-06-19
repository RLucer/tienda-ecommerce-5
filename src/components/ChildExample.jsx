import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


export const ChildExample = () => {
  // const { token } = useContext(UserContext);
  const { user } = useContext(UserContext);

  return (
    <>Usuario: { user }</>
    
  )
}
