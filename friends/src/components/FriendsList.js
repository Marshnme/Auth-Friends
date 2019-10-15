import React,{useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState({})



    const getFriends = () =>{
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
    }
    return(
        <p>hi</p>
    );
};

export default FriendsList