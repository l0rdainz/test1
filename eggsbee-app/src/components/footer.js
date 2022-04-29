import React from "react";
import { FaFacebookSquare,FaDiscord,FaLinkedin} from 'react-icons/fa';

import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

          <FaFacebookSquare/> <spacer></spacer>
          <FaDiscord/> <spacer></spacer>
          <FaLinkedin/>
      </div>
      <p> &copy; 2022 www.dynacyte.com</p>
    </div>
  );
}

export default Footer;