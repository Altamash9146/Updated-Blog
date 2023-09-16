import React from "react";

import FooterLogo from "../FooterLogo";
import './Footer.style.css'

const Footer = () => {
  return (
    <div className="TheMainFooter">
      <div className="theFWidth">

<div className="FGridCont">

      <div className="FSecCon">
      <div className="fLogo">
        <div className="theFProp"><FooterLogo /></div>
      </div>
      <div className="FmiddleCon">
        <div className="FmiddleSubCon">
          <div className="FDescription">
          Gives You All the latest Article of Hollywood, Bollywood, etc.Let's explore the blog...
          </div>
          <div className="FCopywrite">
            <span>©</span>2023.The Siren. All Rights reserved
          </div>
        </div>
      </div>
      </div>
     
      <div className="Fcontact">
        <h3>Contact Info</h3>
        <div>
          <span className="LocEmoji"></span> 101, Delhi,
        </div>
        <div>
          <span className="PhoneEmoji"></span> +91 87589748975
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">✉ </span>  contact@thesiren.com</pre>
        </div>
      </div>

      <div className="FRefernce">
        <h3 className="TheFReferences">Pages</h3>
        <div className="TheFBollywood"><a className="Flinks" href="/Bollywood">Bollywood</a></div>
        <div className="TheFHollywood"><a className="Flinks" href="/Hollywood">Hollywood</a></div>
        <div className="TheFTechnology"><a className="Flinks" href="/Technology">Technology</a></div>
        <div className="TheFFitness"><a className="Flinks" href="/Fitness">Fitness</a></div>
        <div className="TheFFood"><a className="Flinks" href="/Food">Food</a></div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
