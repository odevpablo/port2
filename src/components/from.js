import React from "react";
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";



const From = () =>{
    return(
        <div className="from">
            <h2>Entre em contato:</h2>
            <div className="icons">
                <a href="https://www.linkedin.com/in/odevpablo/"><FaLinkedin size={45} className="rotated-icon"/></a>
                <a href="https://github.com/odevpablo"><FaGithub size={45}/></a>
                <a href="https://www.instagram.com/odevpablo/"><FaInstagram size={45}/></a>
            </div>
         </div>
    );
};

export default From;
