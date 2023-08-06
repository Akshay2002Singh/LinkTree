import React, { useEffect, useState } from 'react'
import Nav_bar from './Nav_bar'
import Foot from './Foot'
import Sign_in from './Sign_in'
import Alertmst from './Alertmst'

function Edit(props) {
    const backend_url = 'http://localhost:3000'
    const [userData, setUserData] = useState({})
    const [msg, setMsg] = useState("")
    useEffect(() => {
        if (props.authToken != null) {
            fetch(`${backend_url}/api/linktree/view`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authToken": props.authToken,
                },
            }).then((response => response.json())).then((d) => {
                if (d.msg === 'data found') {
                    delete d.data._id;
                    delete d.data.__v;
                    delete d.data.username;
                    setUserData(d.data)
                }
            }).catch(error => console.log(error))
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        // Submit data to backend 
        const response = await fetch(`${backend_url}/api/linktree/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authToken": props.authToken
            },
            body: JSON.stringify(userData),
        }).catch(error => console.log(error))

        const data = await response.json(); 
        if(data.msg === 'data submitted'){
            setMsg("Data Submitted")
        }
        window.scrollTo(0, 0)
    }

    function handleInput(e) {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        // console.log(userData)
    }


    if (props.authToken === null) {
        return <Sign_in authToken={props.authToken} setAuthToken={props.setAuthToken} />
    }
    return (
        <>
            <Nav_bar authToken={props.authToken} setAuthToken={props.setAuthToken} />
            <Alertmst msg={msg} setMsg={setMsg} />
            <div class="link-form-container">
                <p class="title">EDIT LINK TREE</p>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="link-input-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your name here" value={userData.name} onChange={handleInput} />
                    </div>
                    <div class="link-input-group">
                        <label for="designation">Designation</label>
                        <input type="text" name="designation" id="designation" placeholder="Your designation here" value={userData.designation} onChange={handleInput} />
                    </div>
                    <div class="link-input-group">
                        <label for="Profile">Profile photo</label>
                        <input type="file" name="Profile" id="Profile" accept="image/*" onChange={(event) => document.getElementById("imgPreview").src = event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : process.env.PUBLIC_URL + 'avtar.png'} />
                        <img src={process.env.PUBLIC_URL + 'avtar.png'} alt='Image Preview' id='imgPreview' />
                    </div>
                    <div class="link-input-group">
                        <label for="about">About</label>
                        <input type="text" name="about" id="about" placeholder="About section" value={userData.about} onChange={handleInput} />
                    </div>
                    <div className='flex-container'>
                        <div class="link-input-group half">
                            <label for="portfolio">Portfolio</label>
                            <input type="text" name="portfolio" id="portfolio" placeholder="Portfolio profile url here" value={userData.portfolio} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="resume">Resume</label>
                            <input type="text" name="resume" id="resume" placeholder="Resume profile url here" value={userData.resume} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="website">Website</label>
                            <input type="text" name="website" id="website" placeholder="Website profile url here" value={userData.website} onChange={handleInput} />
                        </div>
                    </div>

                    <p class="sub-title">SOCIAL MEDIA</p>
                    <div className='flex-container'>
                        <div class="link-input-group half">
                            <label for="linkedIn">LinkedIn</label>
                            <input type="text" name="linkedIn" id="linkedIn" placeholder="LinkedIn profile url here" value={userData.linkedIn} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="twitter">Twitter</label>
                            <input type="text" name="twitter" id="twitter" placeholder="Twitter profile url here" value={userData.twitter} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="instagram">Instagram</label>
                            <input type="text" name="instagram" id="instagram" placeholder="Instagram profile url here" value={userData.instagram} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="facebook">Facebook</label>
                            <input type="text" name="facebook" id="facebook" placeholder="Facebook profile url here" value={userData.facebook} onChange={handleInput} />
                        </div>
                    </div>
                    <p class="sub-title">CODING PLATFORMS</p>
                    <div className='flex-container'>
                        <div class="link-input-group half">
                            <label for="hackerRank">HackerRank</label>
                            <input type="text" name="hackerRank" id="hackerRank" placeholder="HackerRank profile url here" value={userData.hackerRank} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="hackerEarth">HackerEarth</label>
                            <input type="text" name="hackerEarth" id="hackerEarth" placeholder="HackerEarth profile url here" value={userData.hackerEarth} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="codeChef">CodeChef</label>
                            <input type="text" name="codeChef" id="codeChef" placeholder="CodeChef profile url here" value={userData.codeChef} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="codeforces">Codeforces</label>
                            <input type="text" name="codeforces" id="codeforces" placeholder="Codeforces profile url here" value={userData.codeforces} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="leetCode">LeetCode</label>
                            <input type="text" name="leetCode" id="leetCode" placeholder="LeetCode profile url here" value={userData.leetCode} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="geeksforgeeks">GeeksforGeeks</label>
                            <input type="text" name="geeksforgeeks" id="geeksforgeeks" placeholder="GeeksforGeeks profile url here" value={userData.geeksforgeeks} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="gitHub">GitHub</label>
                            <input type="text" name="gitHub" id="gitHub" placeholder="GitHub profile url here" value={userData.gitHub} onChange={handleInput} />
                        </div>
                        <div class="link-input-group half">
                            <label for="codePen">CodePen</label>
                            <input type="text" name="codePen" id="codePen" placeholder="CodePen profile url here" value={userData.codePen} onChange={handleInput} />
                        </div>
                    </div>

                    <button class="sign" type='submit'>Save</button>
                </form>
            </div>
            <Foot />
        </>
    )
}

export default Edit