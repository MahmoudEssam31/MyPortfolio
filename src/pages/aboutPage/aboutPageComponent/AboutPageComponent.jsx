import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import CustomContainerMain from '../../../componant/customContainter/customContainerMain/CustomContainerMain'
import { LuFacebook } from 'react-icons/lu'
import { MdWhatsapp } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import SocialMediaComponent from '../../../componant/common/socialMediaComponent/socialMediaComponent'

export default function AboutPageComponent() {
  return (
      <div className="bg-gray-300 lg:w-[72%] w-full dark:bg-amber-100 lg:pb-[2em]">
          <CustomContainerMain>
              <div className="home-container flex lg:flex-row flex-col gap-10 lg:mt-16 mt-8 w-full ">
                  <div className="home-container-img  lg:w-1/3 w-full  group">
                      <div className="home-img bg-amber-100 z-100 lg:w-full md:w-[80%] sm:w-[90%] lg:h-[15.37em] md:h-[31.37em] sm:h-[30.37em] h-[21.37em] overflow-hidden border-22 border-black dark:bg-amber-100 dark:border-white relative mx-auto">
                          <img src="/aboutImg/3.jpeg" alt="" className="z-100 w-full h-full object-cover" />
                          <div className="overflow absolute inset-0 bottom-120 bg-black opacity-25 group-hover:bottom-0 transition-all duration-300"></div>
                          <div className="social absolute bottom-120 group-hover:bottom-[1em] transition-all duration-300">
                              <SocialMediaComponent customClass="flex-col " />
                          </div>
                      </div>
                  </div>
                  <div className="home-container-text flex flex-col gap-5 lg:w-1/2 w-full">
                      <h2 className="text-[2rem] font-bold">Hello, I'm Mahmoud, Based in Egypt</h2>
                      <p className="text-[1.1rem] font-serif">
                          I'm a passionate Front-End Developer with experience in building responsive and interactive web applications using HTML, CSS, JavaScript, and modern frameworks like React and
                          Tailwind CSS. I enjoy turning creative designs into functional, user-friendly interfaces, and I’m always eager to learn new technologies and improve my coding skills.
                      </p>
                      <div className="home-contact flex flex-col gap-8">
                          <div className="home-contact-details flex flex-col gap-2 text-[1.2rem]">
                              <a href="mailto:mabounar@gmail.com" className="email font-mono cursor-pointer flex flex-row gap-2 items-center">
                                  <span>Email:</span>
                                  <span>mabounar@gmail.com</span>
                              </a>
                              <a href="tel:00201220204045" className="phone font-mono flex flex-row gap-2 items-center">
                                  <span>Phone:</span>
                                  <span>002-01220204045</span>
                              </a>
                              <div className="phone font-mono flex flex-row gap-2 items-center lg:pb-0 pb-6">
                                  <span>Freelancer:</span>
                                  <span> Available</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </CustomContainerMain>
      </div>
  );
}
