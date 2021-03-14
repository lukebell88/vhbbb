
import React from "react"

import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"

const Footer = () => (
    <div className="social">
        <h2>Follow Us</h2>
        <div className="social--gird"> 
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://www.instagram.com/vhbbbpod/">
                    <img className="social--icon" src={Instagram} alt="VHBBB Instagram" />
                </a>
            </div>    
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://twitter.com/vhbbbpod">
                    <img className="social--icon" src={Twitter} alt="VHBBB Twitter" />
                </a>
            </div>
         </div>
         <p>&#169; Van Hemmo &#38; The Babbling Bell Brothers</p>
    </div>
)


export default Footer