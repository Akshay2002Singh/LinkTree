import React from 'react'
import Nav_bar from './Nav_bar'
import Foot from './Foot'
import { Link, useNavigate } from 'react-router-dom'
import Alertmst from './Alertmst'
import { useState } from 'react'


function Sign_in(props) {
    const navigate = useNavigate()
    const backend_url = 'http://localhost:3000'
    const [user, setUser] = useState({
        'username': '',
        'password': '',
    })
    const [msg, setMsg] = useState("")

    function handleInput(e) {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        // console.log(user)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("yes")
        // Submit data to backend 
        const response = await fetch(`${backend_url}/api/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'username' : user.username,
                'password' : user.password
            }),
        }).catch(error => console.log(error))
        const data = await response.json(); 
        // console.log(data)
        if(data.error){
            if(data.error === 'Validation error')
                setMsg("Input Values are not appropriate")
            else if (data.error === 'invalid user')
                setMsg("User does not exist")
            else if (data.error === 'invalid password')
                setMsg("Incorrect Password")
        }else{
            props.setAuthToken(data.authToken)
            localStorage.setItem("authtoken", data.authToken);
            setMsg('')
            navigate('/')
        }
    }


    return (
        <>
            <Nav_bar authToken={props.authToken} setAuthToken={props.setAuthToken} />
            <Alertmst msg={msg} setMsg={setMsg} />
            <div class="form-container">
                <p class="title">Login</p>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" required value={user.username} onChange={handleInput} />
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required value={user.password} onChange={handleInput} />
                        <div class="forgot">
                        </div>
                    </div>
                    <button class="sign" type='submit'>Sign in</button>
                </form>
                <p class="signup">Don't have an account?
                    <Link rel="noopener noreferrer" to="/sign_up"> Sign up</Link>
                </p>
            </div>
            <Foot />
        </>
    )
}

export default Sign_in