import React from 'react'
import Nav_bar from './Nav_bar'

function Edit() {
    return (
        <>
            <Nav_bar />
            <div class="link-form-container">
                <p class="title">EDIT LINK TREE</p>
                <form class="form">
                    <div class="link-input-group">
                        <label for="Name">Name</label>
                        <input type="text" name="Name" id="Name" placeholder="Your name here" />
                    </div>
                    <div class="link-input-group">
                        <label for="Designation">Designation</label>
                        <input type="text" name="Designation" id="Designation" placeholder="Your Designation here" />
                    </div>
                    <div class="link-input-group">
                        <label for="Profile">Profile photo</label>
                        <input type="file" name="Profile" id="Profile" accept="image/*" onChange={(event) => document.getElementById("imgPreview").src = event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : process.env.PUBLIC_URL + 'avtar.png' } />
                        <img src={process.env.PUBLIC_URL + 'avtar.png'} alt='Image Preview' id='imgPreview' />
                    </div>
                    <div class="link-input-group">
                        <label for="About">About</label>
                        <input type="text" name="About" id="About" placeholder="About section" />
                    </div>
                    <div className='flex-container'>
                        <div class="link-input-group half">
                            <label for="Portfolio">Portfolio</label>
                            <input type="text" name="Portfolio" id="Portfolio" placeholder="Portfolio profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="Resume">Resume</label>
                            <input type="text" name="Resume" id="Resume" placeholder="Resume profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="Website">Website</label>
                            <input type="text" name="Website" id="Website" placeholder="Website profile url here" />
                        </div>
                    </div>

                    <p class="sub-title">SOCIAL MEDIA</p>
                    <div className='flex-container'>
                        <div class="link-input-group half">
                            <label for="LinkedIn">LinkedIn</label>
                            <input type="text" name="LinkedIn" id="LinkedIn" placeholder="LinkedIn profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="Twitter">Twitter</label>
                            <input type="text" name="Twitter" id="Twitter" placeholder="Twitter profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="insta">Instagram</label>
                            <input type="text" name="insta" id="insta" placeholder="Instagram profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="fb">Facebook</label>
                            <input type="text" name="fb" id="fb" placeholder="Facebook profile url here" />
                        </div>
                    </div>
                    <p class="sub-title">CODING PLATFORMS</p>
                    <div className='flex-container'>
                        <div class="link-input-group half">
                            <label for="HackerRank">HackerRank</label>
                            <input type="text" name="HackerRank" id="HackerRank" placeholder="HackerRank profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="HackerEarth">HackerEarth</label>
                            <input type="text" name="HackerEarth" id="HackerEarth" placeholder="HackerEarth profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="CodeChef">CodeChef</label>
                            <input type="text" name="CodeChef" id="CodeChef" placeholder="CodeChef profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="Codeforces">Codeforces</label>
                            <input type="text" name="Codeforces" id="Codeforces" placeholder="Codeforces profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="LeetCode">LeetCode</label>
                            <input type="text" name="LeetCode" id="LeetCode" placeholder="LeetCode profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="GeeksforGeeks">GeeksforGeeks</label>
                            <input type="text" name="GeeksforGeeks" id="GeeksforGeeks" placeholder="GeeksforGeeks profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="GitHub">GitHub</label>
                            <input type="text" name="GitHub" id="GitHub" placeholder="GitHub profile url here" />
                        </div>
                        <div class="link-input-group half">
                            <label for="CodePen">CodePen</label>
                            <input type="text" name="CodePen" id="CodePen" placeholder="CodePen profile url here" />
                        </div>
                    </div>

                    <button class="sign">Save</button>
                </form>
            </div>
        </>
    )
}

export default Edit