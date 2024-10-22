import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkendInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <InstagramIcon /> <FacebookIcon /> <TwitterIcon /> <LinkendInIcon />
        </div>
        <p>&copy; 2024pizza.com</p>
      
    </div>
  )
}

export default Footer;
