import React from 'react'
import SocialMediaComponent from '../socialMediaComponent/socialMediaComponent'
import { Link } from 'react-scroll';

export default function Footer() {
  return (
      <div className="footer w-full">
          <div className="footer-container flex flex-col gap-1 justify-center items-center bg-black w-full  h-[9em]">
              <SocialMediaComponent customClassIcon={""} />
              <div className="copy-right text-white font-mono">
                  <p>@ <Link to="home" smooth={true} duration={500} offset={-50} className="cursor-pointer">Mahmoud Essam</Link>, All right reserved.</p>
              </div>
          </div>
          
      </div>
  );
}
