import React from "react"
import twitterLogo from "../images/twitter.png"
import instagramLogo from "../images/instagram.png"
import youtubeLogo from "../images/youtube.png"
import githublogo from "../images/github.png"


export default function Footer()
{
    return (
        <footer className="socials">
            <img src={twitterLogo} alt="Twitter Logo" className="twitter--icon"/>
            <img src={instagramLogo} alt="Instagram Logo" className="instagram--icon"/>
            <img src={githublogo} alt="Github Logo" className="github--icon"/>
            <img src={youtubeLogo} alt="Youtube Logo" className="youtube--icon"/>
            
        </footer>
    )
}