import React,{useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState({})

    useEffect(()=> {
        getFriends()
    },[])

    const getFriends = () =>{
        console.log("hello?",)
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res)
                setFriends(res.data)
                console.log("FRIENDS",friends)
            })
    }
    return(
        <div>
            {/* {friends.map(friend => (
                <div>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                </div>
            ))} */}
        </div>
    );
};

export default FriendsList