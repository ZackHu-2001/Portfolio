import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";

type ProjectCardProp = {
    imgUrl: string,
    title: string,
    description: string,
    githubLink: string,
    demoLink: string,
    isSingle: boolean,
}

const ProjectCard: React.FC<ProjectCardProp> = ({ imgUrl, title, description, githubLink, demoLink, isSingle }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 justify-center my-8">

            {isSingle ?
                <a href='https://www.youtube.com/watch?v=qv6hDonEBK4&t=316s' target='_blank' className='cursor-pointer'>
                    <img src={imgUrl} alt="" className='rounded-lg w-[30rem] hover:scale-105' />
                </a> : <></>}


            <div className="flex flex-col items-center justify-between max-w-[28rem] lg:max-w-[20rem]">
                <div className="font-bold text-2xl">{title}</div>
                <p className=" text-center text-stone-500 mt-4">{description}</p>
                <div className="flex justify-between items-center font-bold text-lg w-[15rem] mt-4">
                    <a href={githubLink} target='_blank' className='flex items-center cursor-pointer border py-1 px-2 rounded-md gap-1'>
                        <div>Code</div>
                        <VscGithubAlt />
                    </a>
                    <a href={demoLink} target='_blank' className='flex items-center cursor-pointer border py-1 px-2 rounded-md gap-1'>
                        <div>Live Demo</div>
                        <CiShare1 />
                    </a>
                </div>
            </div>

            {isSingle ? <></> :
                <a href='https://www.youtube.com/watch?v=qv6hDonEBK4&t=316s' target='_blank' className='cursor-pointer'>
                    <img src={imgUrl} alt="" className='rounded-lg w-[30rem] hover:scale-105' />
                </a>}
        </div>
    )
}

export default ProjectCard;