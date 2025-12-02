'use client'
import Link from 'next/link'
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';
import { useState } from 'react';
import Projects from "@/components/Projects";
import { motion } from 'framer-motion';

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 fixed top-0 w-full font-bold z-[99] shadow-md 
      bg-white text-black dark:bg-stone-900 dark:text-white shadow-box-shadow dark:shadow-box-shadow-dark">
        <h1 className="text-xl"><a href="#home">Zack.dev</a></h1>

        <div className="lg:hidden" onClick={() => { setModal(true) }}>
          <div className="darK:hidden">
            <img src="/hamburger menu.svg" className="w-12 h-12" alt="" />
          </div>
        </div>

        <ul className="hidden lg:flex justify-between items-center gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link href="https://zackhu.hashnode.dev/">Blogs</Link></li>
        </ul>
      </nav>


      <div className={`${modal ? 'w-full' : 'w-0'} transition-all duration-500 h-full fixed left-0 top-0 z-[100] bg-white`}>
        <div className={`${modal ? '' : 'hidden'} absolute top-8 right-16`} onClick={() => { setModal(false) }}>
          <img src="/hamburger-menu-close.svg" className="w-12 h-12" alt="" />
          {/* <svg t="1712813510715" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4651" width="3rem" height="3rem"><path d="M228.864 228.864a38.4 38.4 0 0 1 54.272 0l506.88 506.88a38.4 38.4 0 1 1-54.272 54.272l-506.88-506.88a38.4 38.4 0 0 1 0-54.272z" fill="#0F131A" p-id="4652"></path><path d="M228.7616 795.2384a38.4 38.4 0 0 1 0-54.272l506.88-506.88a38.4 38.4 0 0 1 54.272 54.272l-506.88 506.88a38.4 38.4 0 0 1-54.272 0z" fill="#0F131A" p-id="4653"></path></svg> */}
        </div>
        <div className={`${modal ? '' : 'hidden'} h-full w-full gap-16 text-3xl flex flex-col justify-center items-center`}>
          <a href="#home" onClick={() => { setModal(false) }}>Home</a>
          <a href="#about" onClick={() => { setModal(false) }}>About</a>
          <a href="#projects" onClick={() => { setModal(false) }}>Projects</a>
          <a href="#contact" onClick={() => { setModal(false) }}>Contact</a>
        </div>
      </div>

      <section id="home" className="flex justify-center bg-bg w-full">
        <div className=" py-20 px-16 my-auto max-w-[35rem] lg:my-0 lg:max-w-[65rem]">
          <div className="flex flex-col-reverse items-center relative gap-3 lg:gap-20 lg:flex-row  lg:h-[74vh]">
            <motion.div
              className="flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >

              <motion.h1
                className="mt-8 mx-0 font-bold text-center text-6xl lg:text-7xl lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Fullstack
              </motion.h1>
              <motion.h3
                className="mb-8 mx-0 font-bold text-center text-5xl lg:text-6xl lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Developer
              </motion.h3>
              <motion.p
                className="text-text-color text-lg text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I&apos;m Zack. A passionate Fullstack Developer based in Vancouver, Canada. 📍
              </motion.p>

              <motion.span
                className="flex my-6 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a aria-label="linkedin" href="https://www.linkedin.com/in/zixiang-hu/"><RxLinkedinLogo className="in-page-logo" /></a>
                <a aria-label="github" href="https://github.com/zackHu-2001/"><RxGithubLogo className="in-page-logo" /></a>
              </motion.span>

            </motion.div>
            <motion.div
              className="selfie w-80 h-80 lg:w-100 lg:h-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >

            </motion.div>
          </div>
          <motion.div
            className="flex flex-col items-center lg:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className=" border-solid border-b-2 my-4 lg:mr-16 lg:border-r-2 lg:border-b-0 lg:pr-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Tech Stack
            </motion.p>
            <div className="flex gap-2">
              <motion.div
                className="tech-stack"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=react"
                  alt="React"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=ts"
                  alt="TypeScript"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=nextjs"
                  alt="Next.js"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="Tailwind CSS"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=java"
                  alt="Java"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=spring"
                  alt="Spring"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=cs"
                  alt="C#"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                />
                <motion.img
                  className="item"
                  src="https://skillicons.dev/icons?i=dotnet"
                  alt=".NET"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-[10rem]">
        <div className="max-w-[35rem] py-0 px-16 my-0 mx-auto lg:max-w-[65rem]">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <motion.img
              className="w-[22rem] lg:w-96 rounded-2xl"
              src="/about.webp"
              alt="about"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="max-w-[35rem] flex flex-col justify-center items-center gap-6 lg:items-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h3
                className="font-bold text-lg text-center lg:text-left "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Me
              </motion.h3>
              <motion.h1
                className="font-bold text-2xl text-center lg:text-left "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Fullstack Developer based in Vancouver, Canada 📍
              </motion.h1>
              <motion.p
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hey, my name is Zack, and I&apos;m a Fullstack Developer. My passion is to create and develop a clean UI/UX for my users.
              </motion.p>
              <motion.p
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                My main stack currently is React/Next.js with TypeScript for frontend, and Java/Spring and C#/.NET for backend development.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-40">
        <motion.div
          className="max-w-[35rem] py-0 px-16 my-0 mx-auto lg:max-w-[65rem] "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <Projects />
          {/* <h1 className='w-full text-4xl font-bold my-6 tracking-tighter'>May 2024</h1>
          <hr />
          <ProjectCard
            imgUrl="Tetris.gif"
            title="Tetris AI Challenge"
            description="A Tetris game built using React and NextJS with TypeScript. The backend is hosted on EC2 with Nginx, while also featuring an AI mode incorporating both DQN and heuristic-based approaches."
            githubLink="https://github.com/ZackHu-2001/Tetris-AI"
            demoLink="https://tetris.zackhu.com/"
            isSingle={true} /> */}

          <motion.div
            className="flex flex-col justify-center items-center pt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="font-bold text-center text-2xl">
              More projects comming soon 🪵
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* <section id="effects" className="py-24 lg:py-40">
        <div className="max-w-[35rem] py-0 px-16 my-0 mx-auto lg:max-w-[65rem] ">
          <ProjectCard
            imgUrl="Tetris.gif"
            title="Tetris AI Challenge"
            description="A Tetris game built using React and NextJS with TypeScript. The backend is hosted on EC2 with Nginx, while also featuring an AI mode incorporating both DQN and heuristic-based approaches."
            githubLink="https://github.com/ZackHu-2001/Tetris-AI"
            demoLink="https://tetris.zackhu.com/"
            isSingle={true} />
          <hr />
          <div className="flex flex-col justify-center items-center pt-16">
            <div className="font-bold text-center text-2xl">
              New projects comming soon 🪵
            </div>
          </div>
        </div>
      </section> */}

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
