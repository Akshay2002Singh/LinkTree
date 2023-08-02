import React from 'react'
import Nav_bar from './Nav_bar'

function Sign_up() {
    return (
        <>
            <Nav_bar />
            <div class="form-container">
                <p class="title">Create Account</p>
                <form class="form">
                <div class="input-group">
                        <label for="username">Email</label>
                        <input type="email" name="username" id="username" placeholder="Email" />
                    </div>
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" />
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div class="input-group">
                        <label for="password">Confirm Password</label>
                        <input type="password" name="password" id="password" placeholder="Confirm Password" />
                    </div>
                    <button class="sign">Sign up</button>
                </form>
            </div>
        </>
    )
}

export default Sign_up