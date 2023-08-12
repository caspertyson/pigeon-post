import React from 'react';
import '../style/LandingPage.css';
import NavBar from './NavBar'
import Pigeon from '../Images/landingPagePigeon.png'
import CheckMark from '../Images/landingPageCheckmark.png'


const LandingPage = () => {
    return (
        <div id="landingPageBox">
            <NavBar/>
            <div id="landingPageContainer">
                <div id="landingPageLeft">
                    <h1>Pigeon Post: Where Every <br/>Message is a Journey, Not Just a Send.</h1>
                    <p id='landingPageDescription'>In an era dominated by instant gratification, a chat app with intentional delays evokes a sense of nostalgia, reminiscent of the days when we eagerly awaited letters in the mail. This anticipation not only fosters thoughtful communication, where every word is penned with care and purpose, but also promotes mindfulness, encouraging users to be present in the moment and savor the richness of genuine connections. </p>
                    <div className='landingPageDivCheckMark'>
                        <img className="landingPageCheckMark" src={CheckMark} alt='checkMark'/>
                        <p>Relive the nostalgia</p>
                    </div>
                    <div className='landingPageDivCheckMark'>
                        <img className="landingPageCheckMark" src={CheckMark} alt='checkMark'/>
                        <p>Relax and make genuine connections</p>
                    </div>
                    <button id="landingPageLogin">Log in</button>
                    <button id="landingPageSignup">Sign Up</button>
                </div>
                <div id="landingPageRight">
                    <img src={Pigeon} alt="Description of Image" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
