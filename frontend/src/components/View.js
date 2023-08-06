import React from 'react'
import Nav_bar from './Nav_bar';
import Sign_in from './Sign_in'
import Foot from './Foot';
import { useState, useEffect } from 'react';
// icons
import { FaGithub, FaCodepen, FaHackerrank, FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHackerearth, SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { HiDocumentText } from "react-icons/hi";


function View(props) {
    const backend_url = 'http://localhost:3000'
    const [userData, setUserData] = useState({})
    useEffect(() => {
        if (props.authToken !== null) {
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

    if (props.authToken === null) {
        return <Sign_in authToken={props.authToken} setAuthToken={props.setAuthToken} />
    }

    return (
        <>
            <Nav_bar authToken={props.authToken} setAuthToken={props.setAuthToken} />
            <div className="view-form-container">
                {userData.name !== "" ? <p className="name"> {userData.name} </p> : ""}
                {userData.designation !== "" ? <p className="Designation"> {userData.designation} </p> : ""}
                <img src={process.env.PUBLIC_URL + 'avtar.png'} alt='Image Preview' id='imgPreview' />
                {userData.about !== "" ?
                    <p className='about'>{userData.about}</p>
                    : ""}

                <div className="form">
                    <div className='flex-container'>
                        {userData.portfolio !== "" ?
                            <a href={userData.portfolio} target='_blank' className="view-group half">
                                <div><CgWebsite /> Portfolio</div>
                                <p>
                                    {userData.portfolio}
                                </p>
                            </a>
                            : ""}
                        {userData.resume !== "" ?
                            <a href={userData.resume} target='_blank' className="view-group half">
                                <div><HiDocumentText /> Resume</div>
                                <p>
                                    {userData.resume}
                                </p>
                            </a>
                            : ""}
                        {userData.website !== "" ?
                            <a href={userData.website} target='_blank' className="view-group half">
                                <div><TbWorldWww /> Website</div>
                                <p>
                                    {userData.website}
                                </p>
                            </a>
                            : ""}
                    </div>
                    {userData.instagram || userData.facebook || userData.linkedIn || userData.twitter ?
                        <p className="sub-title">SOCIAL MEDIA</p>
                        : ""}
                    <div className='flex-container'>
                        {userData.linkedIn !== "" ?
                            <a href={userData.linkedIn} target='_blank' className="view-group half">
                                <div><FaLinkedin /> LinkedIn</div>
                                <p>
                                    {userData.linkedIn}
                                </p>
                            </a>
                            : ""}
                        {userData.twitter !== "" ?
                            <a href={userData.twitter} target='_blank' className="view-group half">
                                <div><FaTwitter /> Twitter</div>
                                <p>
                                    {userData.twitter}
                                </p>
                            </a>
                            : ""}
                        {userData.instagram !== "" ?
                            <a href={userData.instagram} target='_blank' className="view-group half">
                                <div><FaInstagram /> Instagram</div>
                                <p>
                                    {userData.instagram}
                                </p>
                            </a>
                            : ""}
                        {userData.facebook !== "" ?
                            <a href={userData.facebook} target='_blank' className="view-group half">
                                <div><FaFacebookSquare /> Facebook</div>
                                <p>
                                    {userData.facebook}
                                </p>
                            </a>
                            : ""}
                    </div>

                    {userData.hackerRank || userData.hackerEarth || userData.codeChef || userData.codeforces || userData.leetCode || userData.geeksforgeeks || userData.gitHub || userData.codePen ?
                        <p className="sub-title">CODING PLATFORMS</p>
                        : ""}
                    <div className='flex-container'>
                        {userData.hackerRank !== "" ?
                            <a href={userData.hackerRank} target='_blank' className="view-group half">
                                <div><FaHackerrank /> HackerRank</div>
                                <p>
                                    {userData.hackerRank}
                                </p>
                            </a>
                            : ""}
                        {userData.hackerEarth !== "" ?
                            <a href={userData.hackerEarth} target='_blank' className="view-group half">
                                <div><SiHackerearth /> HackerEarth</div>
                                <p>
                                    {userData.hackerEarth}
                                </p>
                            </a>
                            : ""}
                        {userData.codeChef !== "" ?
                            <a href={userData.codeChef} target='_blank' className="view-group half">
                                <div><SiCodechef /> CodeChef</div>
                                <p>
                                    {userData.codeChef}
                                </p>
                            </a>
                            : ""}
                        {userData.codeforces !== "" ?
                            <a href={userData.codeforces} target='_blank' className="view-group half">
                                <div><SiCodeforces /> Codeforces</div>
                                <p>
                                    {userData.codeforces}
                                </p>
                            </a>
                            : ""}
                        {userData.leetCode !== "" ?
                            <a href={userData.leetCode} target='_blank' className="view-group half">
                                <div><SiLeetcode /> LeetCode</div>
                                <p>
                                    {userData.leetCode}
                                </p>
                            </a>
                            : ""}
                        {userData.geeksforgeeks !== "" ?
                            <a href={userData.geeksforgeeks} target='_blank' className="view-group half">
                                <div><SiGeeksforgeeks /> GeeksforGeeks</div>
                                <p>
                                    {userData.geeksforgeeks}
                                </p>
                            </a>
                            : ""}
                        {userData.gitHub !== "" ?
                            <a href={userData.gitHub} target='_blank' className="view-group half">
                                <div> <FaGithub /> GitHub</div>
                                <p>
                                    {userData.gitHub}
                                </p>
                            </a>
                            : ""}
                        {userData.codePen !== "" ?
                            <a href={userData.codePen} target='_blank' className="view-group half">
                                <div> <FaCodepen /> CodePen</div>
                                <p>
                                    {userData.codePen}
                                </p>
                            </a>
                            : ""}
                    </div>
                </div>
            </div>
            <Foot />
        </>
    )
}

export default View