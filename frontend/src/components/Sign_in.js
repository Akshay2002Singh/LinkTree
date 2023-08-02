import React from 'react'
import Nav_bar from './Nav_bar'

function Sign_in() {
    return (
        <>
            <Nav_bar />
            <div class="form-container">
                <p class="title">Login</p>
                <form class="form">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" />
                        <div class="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button class="sign">Sign in</button>
                </form>
                <p class="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="#" class=""> Sign up</a>
                </p>
            </div>
        </>
    )
}

export default Sign_in