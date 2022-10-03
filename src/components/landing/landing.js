import React, { useEffect } from "react";
import "./landing.css";
import Typewriter from "typewriter-effect";
import ParticleBackground from "../../particleBackground";
import Aos from "aos";
import "aos/dist/aos.css";
import discord from "../../images/dc.png"

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id='hero' className='landing-main'>
        {/* <a className="atag" href='#about'>
          <div data-aos='fade-up' className='hvr-shutter-in-vertical name'>
            {" "}

            REVA Hack{" "}
          </div>
        </a> */}
        <h1 data-aos='fade-up' className="test">
          REVA HACK
        </h1>
        <div data-aos='fade-up' className='name-2'>
          <Typewriter
            options={{
              strings: ["Innovate For a Better Tomorrow..", "The Hack Is Back.."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* After Coming soon gets over */}
        <div data-aos='fade-up' className='main-buttons'>
        {/* <div 
	className="apply-button" 
	data-hackathon-slug="reva-hack" 
	data-button-theme="light"
	style={{height: "44px",width: "312px"}}
></div> */}
        <a href="https://forms.gle/JizDPzoqmiB4M1Y88" target="_blank" rel="noreferrer">
          <button className="landing-btn" style={{ letterSpacing : "2px" }}>Pre Register Now</button>
          </a>
          <a href="https://discord.gg/6Sv9ZdQ4er" target="_blank" rel="noreferrer">
        <button className="landing-btn" style={{ letterSpacing : "2px" }}> <span>
          Join Us On 
          </span> 
          <img style={{marginLeft:"10px"}} height="40px" width="40px" src={discord} alt="" /></button>
          </a>
      </div>
        <ParticleBackground />
      </div>
    </>
  );
};

export default Landing;
