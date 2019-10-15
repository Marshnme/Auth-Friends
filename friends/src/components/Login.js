import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = () => {
    const [name, setName] = useState({})
    const [pass, setPass] = useState({})

    const login = e =>{
        e.preventDefault();

    }
    return(
        <div>
            <form onSubmit={login}>
                <input type="text" name="username" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)}></input>
            </form>
        </div>
    );
};

export default Login