import React from "react";
import { ReactDOM } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./../../STYLE/team.css"
const Gallery = () => {
  return (
    <>
      <div class="main">
        <div class="profile-card">
          <div class="img">
            <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="" />
          </div>
          <div class="caption">
            <h3>Vin Diesel</h3>
            <p>Senior App Developer</p>
            <div class="social-links">
              <a href="/">
                <FaInstagram/>
              </a>
              <a href="/">
                <FaLinkedinIn/>
              </a>
              <a href="/">
                <SiGmail/>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt=""/>
          </div>
          <div class="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
            <div class="social-links">
              <a href="/">
              <FaInstagram/>
              </a>
              <a href="/">
              <FaLinkedinIn/>
              </a>
              <a href="/">
              <SiGmail/>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" alt="" />
          </div>
          <div class="caption">
            <h3>Tom Cruise</h3>
            <p>Full Stact Developer</p>
            <div class="social-links">
              <a href="/">
              <FaInstagram/>
              </a>
              <a href="/">
              <FaLinkedinIn/>
              </a>
              <a href="/">
              <SiGmail/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
