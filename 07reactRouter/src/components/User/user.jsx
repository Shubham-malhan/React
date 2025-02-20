import React from "react";
import { useParams } from "react-router";

export default function User () {

    const {userid} = useParams();
    return (
        <div className="grid place-content-center ">User : {userid}</div>
    )
}