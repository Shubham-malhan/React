import React from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile () {

    const {user} = useContext(UserContext)

    if (!user) return <h1>input user</h1>

    return (
        <>
        <h1>Welcome {user.username}</h1>
        </>
    )
}

export default Profile;