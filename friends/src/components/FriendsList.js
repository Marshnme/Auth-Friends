import React,{useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm"
const FriendsList = () => {
    const [friends, setFriends] = useState([{}])
    console.log("FRIENDS1",friends)
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
            })
    }
    return(
        <div>
            <AddFriendForm friends={friends} setFriends={setFriends}/>
            {friends.map(friend => (
                <div>
                    <p>Friend:{friend.name}</p>
                    <p>Age:{friend.age}</p>
                </div>
            ))}
        </div>
    );
};

export default FriendsList