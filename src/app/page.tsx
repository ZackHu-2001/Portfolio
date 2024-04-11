'use client'
// import Image from "next/image";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';
import { useState } from 'react';

export default function Home() {
  const [modal, setModal] = useState(false);
  
  return (
    <>
      <nav className="flex justify-between items-center py-8 px-16 fixed top-0 w-full font-bold z-[99] shadow-md 
      bg-white text-black dark:bg-stone-900 dark:text-white shadow-box-shadow dark:shadow-box-shadow-dark">
        <h1 className="text-xl"><a href="#home">Zack.dev</a></h1>

        <div className="lg:hidden" onClick={() => {setModal(true)}}>
          <div className="darK:hidden">
            <img src="/hamburger menu.svg" className="w-12 h-12" alt="" />
          </div>
          <div className="hidden dark:inline">
            <img src="/hamburger menu.svg" className="w-12 h-12" alt="" />
          </div>
        </div>

        <ul className="hidden lg:flex justify-between items-center gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

            
      <div className={`${modal ? 'w-full' : 'w-0'} transition-all duration-300 h-full fixed left-0 top-0 z-[100] bg-white`}>
        <div className={`${modal ? '' : 'hidden'} absolute top-8 right-16`} onClick={() => {setModal(false)}}>
            <img src="/hamburger-menu-close.svg" className="w-12 h-12" alt="" />
          {/* <svg t="1712813510715" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4651" width="3rem" height="3rem"><path d="M228.864 228.864a38.4 38.4 0 0 1 54.272 0l506.88 506.88a38.4 38.4 0 1 1-54.272 54.272l-506.88-506.88a38.4 38.4 0 0 1 0-54.272z" fill="#0F131A" p-id="4652"></path><path d="M228.7616 795.2384a38.4 38.4 0 0 1 0-54.272l506.88-506.88a38.4 38.4 0 0 1 54.272 54.272l-506.88 506.88a38.4 38.4 0 0 1-54.272 0z" fill="#0F131A" p-id="4653"></path></svg> */}
        </div>
        <div className={`${modal ? '' : 'hidden'} h-full w-full gap-16 text-3xl flex flex-col justify-center items-center`}>
          <a href="#home" onClick={() => {setModal(false)}}>Home</a>
          <a href="#about" onClick={() => {setModal(false)}}>About</a>
          <a href="#projects" onClick={() => {setModal(false)}}>Projects</a>
          <a href="#contact" onClick={() => {setModal(false)}}>Contact</a>
        </div>
      </div>

      <section id="home" className="flex justify-center bg-bg h-screen w-full">
        <div className=" py-0 px-16 my-auto max-w-[35rem] lg:my-0 lg:max-w-[65rem]">
          <div className="flex flex-col-reverse pt-20 items-center relative gap-3 lg:gap-20 lg:flex-row lg:h-[47rem]">
            <div className="flex flex-col items-center lg:items-start">

              <h1 className="my-8 mx-0 font-bold text-center text-5xl lg:text-6xl lg:text-left">Front-End React Developer</h1>
              <p className="text-text-color text-lg text-center lg:text-left">Hi, I&apos;m Zack. A passionate Front-end React Developer based in Vancouver, Canada. 📍</p>

              <span className="flex my-6 gap-4">
                <a aria-label="linkedin" href="https://www.linkedin.com/in/zixiang-hu/"><RxLinkedinLogo className="in-page-logo" /></a>
                <a aria-label="github" href="https://github.com/zackHu-2001/"><RxGithubLogo className="in-page-logo" /></a>
              </span>

            </div>
            <div className="selfie w-80 h-80 lg:w-100 lg:h-100">

            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row">
            <p className=" border-solid border-b-2 my-4 lg:mr-16 lg:border-r-2 lg:border-b-0 lg:pr-4">Tech Stack</p>
            <div className="flex gap-2">
              <div className="tech-stack">
                <img className="item" src="https://skillicons.dev/icons?i=react" alt="jsIcon" />
                <img className="item" src="https://skillicons.dev/icons?i=nextjs" alt="jsIcon" />
                <img className="item" src="https://skillicons.dev/icons?i=ts" alt="jsIcon" />
                <img className="item" src="https://skillicons.dev/icons?i=tailwind" alt="jsIcon" />
                <img className="item" src="https://skillicons.dev/icons?i=sass" alt="jsIcon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-[10rem]">
        <div className="max-w-[35rem] py-0 px-16 my-0 mx-auto lg:max-w-[65rem]">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <img className="w-[22rem] lg:w-96 rounded-2xl" src="/about.webp" alt="about" />
            <div className="max-w-[35rem] flex flex-col justify-center items-center gap-6 lg:items-start">
              <h3 className="font-bold text-lg text-center lg:text-left ">About Me</h3>
              <h1 className="font-bold text-2xl text-center lg:text-left ">Front-end Developer based in Vancouver, Canada 📍</h1>
              <p className="text-center lg:text-left" >Hey, my name is Zack, and I&apos;m a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
              <p className="text-center lg:text-left">My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="projects" className="py-24 lg:py-48">
        <div className="max-w-[35rem] py-0 px-16 my-0 mx-auto lg:max-w-[65rem] ">
          <div className="flex flex-col justify-center items-center">

            <div className="font-bold text-center text-2xl">
              New projects comming soon 🪵
            </div>
          </div>
        </div>
      </section>

      <section id="contact">

      </section>

      {/* <a href="mailto:zackhu2001@gmail.com">zackhu2001@gmail.com</a> */}

      <footer>
        <div className=" max-w-[35rem] py-0 px-16 my-0 mx-auto lg:max-w-[65rem]">
          <div className="flex gap-8 items-center flex-col lg:flex-row lg:justify-between">
            <div className=" text-lg font-bold">
              Copyright © 2024. All rights are reserved
            </div>
            <div className="flex gap-2">
              <RiGithubLine className="in-footer-logo" />
              <RiLinkedinLine className="in-footer-logo" />
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
