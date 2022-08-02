import React from "react"
import profilepicture from "../images/Profilepicture.png"
import linkedinLogo from "../images/linkedin.png"
import emailogo from "../images/emaillogo.png"

export default function Profile()
{
    return(
        <profile>
            <img src={profilepicture} alt="profilepic" className="Profile--profilepic"/>
            <h1 className="Profile--name">Jake Yip</h1>
            <h3 className="Profile--title">Fullstack Developer</h3>
            <h3 className="Profile--website">Evil Geniuses</h3>
            <div className="Profile--buttons">
                <button type="button" className="Profile--emailbutton"><img src={emailogo} alt = "" className="Profile--buttonemailogo"/>Email</button> 
                <button type="button" className="Profile--linkedinbutton"><img src={linkedinLogo} alt = "" className="Profile--buttonlinkedinlogo"/>Linkedin</button> 
            </div>


        </profile>
    )
}