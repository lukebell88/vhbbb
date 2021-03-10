
import React from "react"

import Apple from "../images/apple.svg"
import Audible from "../images/audible.svg"
import Breaker from "../images/breaker.svg"
import Google from "../images/google.svg"
import Pocketcasts from "../images/pocketcasts.svg"
import Spotify from "../images/spotify.svg"

const Followus = () => (
    <div className="social">
        <h1>Listen On</h1>
        <div className="social--gird"> 
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://open.spotify.com/show/429PsKx1NJV0ELpBz2psMb">
                    <img className="social--icon" src={Spotify} alt="Spotify Podcasts" />
                </a>
            </div>    
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://podcasts.apple.com/gb/podcast/van-hemmo-the-babbling-bell-brothers/id1517656212">
                    <img className="social--icon" src={Apple} alt="Apple Podcasts" />
                </a>
            </div>
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://pca.st/9c0n5yms">
                    <img className="social--icon" src={Pocketcasts} alt="Pocketcasts" />
                </a>
            </div>
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTVkNDYyOC9wb2RjYXN0L3Jzcw==">
                    <img className="social--icon" src={Google} alt="Google Podcasts" />
                </a>
            </div>
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://www.breaker.audio/van-hemmo-and-the-babbling-bell-brothers">
                    <img className="social--icon" src={Breaker} alt="Breaker Podcasts" />
                </a>
            </div>
            <div className="social--container">
                <a className="social--link" target="_blank" href="https://www.amazon.com/Van-Hemmo-Babbling-Bell-Brothers/dp/B08JJS9XYD">
                    <img className="social--icon" src={Audible} alt="Audible Podcasts" />
                </a>
            </div>
         </div>
    </div>
)


export default Followus