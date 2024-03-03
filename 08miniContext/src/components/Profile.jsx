import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
  
  const {user} = useContext(UserContext)

  if (user.username === "") return( <h2>Please Login</h2>)

  return(
    <h2>Welcome {user.username} </h2>
  )
}

export default Profile