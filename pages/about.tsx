import Link from 'next/link';
import React, { useState } from 'react';


const aboutTravelX: React.CSSProperties = {
  width: "auto", /* 354px */
  height: "auto", /* 58px */
  whiteSpace: "pre",
  padding: 20,
  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
  fontWeight: 800,
  fontStyle: "normal",
  fontFamily: `"Be Vietnam Pro", serif`,
  color: "#ffffff",
  fontSize: 48,
  letterSpacing: 0,
  lineHeight: 1.2,
}

const frame = {
  width: "auto",
  height: "auto",
  background: "linear-gradient(180deg, rgba(217, 168, 250, 0.5) 0%, hsl(266, 100%, 90%) 100%)",
  overflow: "hidden",
}

const aboutDesc: React.CSSProperties = {
  width: "auto", /* 871px */
  height: "auto", /* 48px */
  marginLeft: 20,
  whiteSpace: "pre",
  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
  fontWeight: 700,
  fontStyle: "normal",
  fontFamily: `"Be Vietnam Pro", serif`,
  color: "#ffffff",
  fontSize: 20,
  letterSpacing: 0,
  lineHeight: 1.2,
}

const meetTheTeam: React.CSSProperties = {
  width: "auto", /* 194px */
  height: "auto", /* 29px */
  padding: 20,
  whiteSpace: "pre",
  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.53)",
  fontWeight: 800,
  fontStyle: "normal",
  fontFamily: `"Be Vietnam Pro", serif`,
  color: "#ffffff",
  fontSize: 24,
  letterSpacing: 0,
  lineHeight: 1.2,
}

const aboutCard1: React.CSSProperties = {
  width: 400,
  height: 250,
  padding: 20,
  marginLeft: 20,
  boxShadow: "0px 0.6032302072222955px 0.6032302072222955px -1.25px rgba(0, 0, 0, 0.18), 0px 2.290210571630906px 2.290210571630906px -2.5px rgba(0, 0, 0, 0.15887), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625)",
  background: "linear-gradient(180deg, #ff57f1 0%, #3B1FA5 100%)",
  overflow: "visible",
  borderRadius: 20,
}

const aboutCard2: React.CSSProperties = {
  width: 400,
  height: 250,
  padding: 20,
  marginLeft: 420,
  boxShadow: "0px 0.6032302072222955px 0.6032302072222955px -1.25px rgba(0, 0, 0, 0.18), 0px 2.290210571630906px 2.290210571630906px -2.5px rgba(0, 0, 0, 0.15887), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625)",
  background: "linear-gradient(180deg, #ff57f1 0%, #3B1FA5 100%)",
  overflow: "visible",
  borderRadius: 20,
}

const cardFrame = {
  width: 128,
  height: 128,
  marginLeft: 10,
  background: "black",
  borderRadius: 25,
}

const cardFrame2: React.CSSProperties = {
  width: 128,
  height: 128,
  marginLeft: 10,
  background: "black",
  borderRadius: 25,
}

const Name: React.CSSProperties = {
  width: "auto", /* 193px */
  height: "auto", /* 58px */
  marginLeft: 150,
  whiteSpace: "pre",
  fontWeight: 800,
  fontStyle: "normal",
  fontFamily: `"Be Vietnam Pro", serif`,
  color: "#ffffff",
  fontSize: 24,
  letterSpacing: 0,
  lineHeight: 1.2,
  textAlign: "center",
}


const cardDesc: React.CSSProperties = {
  width: "auto", /* 212px */
  height: "auto", /* 72px */
  whiteSpace: "pre",
  fontWeight: 400,
  paddingLeft: 150,
  paddingTop: 10,
  fontStyle: "normal",
  fontFamily: `"Be Vietnam Pro", serif`,
  color: "#ffffff",
  fontSize: 15,
  letterSpacing: 0,
  lineHeight: 1.2,
  textAlign: "left",
}

export default function about() {
  return (
    <>
    <div style ={frame}>
        <h1 style={aboutTravelX}>About TravelX</h1>
        <p style={aboutDesc}>A block-chain encrypted security program designed to provide top of the end</p>
        <p style={aboutDesc}>security in a matter of seconds, instantaneous matching and verifying clients information.</p>
        <p style={meetTheTeam}>Meet The Team!</p>

        <div className="p-2"></div>

        <div style = {aboutCard1}>
          <div style={Name}>Christian Leyva</div>
          <div style={cardFrame}>
          <div style={cardDesc}>Technical Experience</div>
          <div style={cardDesc}>Java, Python,</div>
           <div style={cardDesc}>React.js, Linux, JUnit,</div>
           <div style={cardDesc}>Javascript, Vite, Blender,</div>
           <div style={cardDesc}>Three.js (WebGL framework)</div>
           </div>
        <div style = {aboutCard2}>
           <div style={Name}>Jasjot Singh</div>
           <div style={cardFrame2}>
           <div style={cardDesc}>Technical Experience</div>
           <div style={cardDesc}>Java, C++, C, Python, </div>
           <div style={cardDesc}>and Unix</div>
           <div style={cardDesc}></div>
           <div style={cardDesc}></div>
           </div>
         </div>
        </div>

        <div className="p-2"></div>
        

        <div className="p-2"></div>

        <div style = {aboutCard1}>
           <div style={Name}>Sprash Saini</div>
           <div style={cardFrame}>
           <div style={cardDesc}>Technical Experience</div>
           <div style={cardDesc}>C++, C, Java,</div>
           <div style={cardDesc}>Python, SQL, JavaScript, React,</div>
           <div style={cardDesc}>Node.js, RedHat Linux, </div>
           <div style={cardDesc}>Unit testing for Software Packages</div>
           </div>
           <div style = {aboutCard2}>
           <div style={Name}>Ocean Tober</div>
           <div style={cardFrame2}>
           <div style={cardDesc}>Technical Experience</div>
           <div style={cardDesc}>Java, Python,</div>
           <div style={cardDesc}>c++, Unix Scripting inc.</div>
           <div style={cardDesc}>Bash, Perl, Awk and work</div>
           <div style={cardDesc}>with SQL databasing.</div>
           </div>
        </div>

        </div>

        <div className="p-2"></div>

        <div className="p-2"></div>

        <div style = {aboutCard1}>
           <div style={Name}>Zane Williams</div>
           <div style={cardFrame}>
           <div style={cardDesc}>Technical Experience</div>
           <div style={cardDesc}>Java, C++,</div>
           <div style={cardDesc}>C, minimal Python,</div>
           <div style={cardDesc}>and Assembly</div>
           <div style={cardDesc}></div>
           </div>
        </div>

        <div className="p-2"></div>

        <div className="p-2">
        <Link href="/">
           <button
              className='bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors'
              type="button">Dashboard
           </button>
        </Link>
        </div>
    </div>
    </>
  )
}