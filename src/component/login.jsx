import React, {useState} from 'react'
import axios from 'axios'

export default (props)=>{

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function sendLogin(){
        axios
        .post('http://18.189.174.99:3000/login',
        {
            email:login,
            password:password
        }, {withCredentials:true})
        .then((res) => {
            alert(res.data);
        })
        .catch((err) => {
            alert(err);
        });
    }

    function sendLogout(){
        axios
        .post('http://18.189.174.99:3000/logout',{withCredentials:true})
        .then((res) => {
            alert(res.data);
        })
        .catch((err) => {
            alert(err);
        });
    }

    return(
        <div>
            <input type="text" value={login} onChange={e=>setLogin(e.target.value)}/>
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={sendLogin}>Login</button>          
            <button onClick={sendLogout}>Logout</button>          
        </div>
    )
}