import React from 'react'
import { FaGithub,FaCodepen,FaHackerrank,FaInstagram,FaFacebookSquare,FaLinkedin,FaTwitter } from "react-icons/fa";
import { SiHackerearth,SiLeetcode,SiGeeksforgeeks,SiCodechef,SiCodeforces } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { HiDocumentText } from "react-icons/hi";

function View() {
    return (
        <>
            <div className="view-form-container">
                <p className="name">AKSHAY SINGH</p>
                <p className="Designation">Python Developer</p>
                <img src={process.env.PUBLIC_URL + 'avtar.png'} alt='Image Preview' id='imgPreview' />
                <p className='about'>Hi! 👋 I'm Akshay Singh, a 20-year-old engineering student pursuing BTech in Computer Science (Data Science). I am a passionate self-learner, Open source enthusiast, exploring and building projects👨‍💻 using various technologies. I am a Full Stack Web Developer, Android, Data Science and Machine Learning enthusiast.</p>

                <div className="form">
                    <div className='flex-container'>
                        <a href='' target='_blank' className="view-group half">
                            <div><CgWebsite/> Portfolio</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><HiDocumentText/> Resume</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><TbWorldWww/> Website</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                    </div>

                    <p className="sub-title">SOCIAL MEDIA</p>
                    <div className='flex-container'>
                        <a href='' target='_blank' className="view-group half">
                            <div><FaLinkedin/> LinkedIn</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><FaTwitter/> Twitter</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><FaInstagram/> Instagram</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><FaFacebookSquare/> Facebook</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                    </div>

                    <p className="sub-title">CODING PLATFORMS</p>
                    <div className='flex-container'>
                        <a href='' target='_blank' className="view-group half">
                            <div><FaHackerrank/> HackerRank</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><SiHackerearth/> HackerEarth</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><SiCodechef/> CodeChef</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><SiCodeforces/> Codeforces</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><SiLeetcode/> LeetCode</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div><SiGeeksforgeeks/> GeeksforGeeks</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div> <FaGithub/> GitHub</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                        <a href='' target='_blank' className="view-group half">
                            <div> <FaCodepen/> CodePen</div>
                            <p>
                                https://akshay2002singh.github.io/Portfolio/
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View