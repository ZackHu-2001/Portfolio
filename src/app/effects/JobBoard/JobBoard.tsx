'use client'
import { useEffect, useState } from 'react';
import './index.css';

const jobStoriesUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const jobDetailsUrl = "https://hacker-news.firebaseio.com/v0/item/";

interface CardProps {
    by: string,
    time: number,
    title: string,
    url?: string
}

const Card: React.FC<CardProps> = ({ by, time, title, url }) => {
    const formattedTime = new Date(time * 1000).toLocaleDateString();
    return (
        <div className='flex flex-col justify-between px-4 py-2 w-[30rem] h-[7rem] border-zinc-400 border-2 rounded-md'>
            <a href={url} target='_blank' className='text-xl font-bold hover:underline'>{title}</a>
            <div className='flex flex-row justify-between'>
                <div >By {by}</div>
                <div>{formattedTime}</div>
            </div>
        </div>
    )
}

async function fetchJob(id: number): Promise<object> {
    const response = await fetch(`${jobDetailsUrl}${id}.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (!response.ok) {
        throw new Error(`HTPP error! status: ${response.status}`);
    }

    const content = response.json();
    return content;
}

async function getJobList(): Promise<object> {
    const response = await fetch(jobStoriesUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })

    let res = await response.json();
    return res;
}

export default function JobBoard() {
    const [jobList, setJobList] = useState<number[]>([]);
    const [currentPosition, setcurrentPosition] = useState(0);
    const [jobPosts, setjobPosts] = useState<object[]>([]);
    const [isReady, setIsReady] = useState<boolean>(true);
    const [finished, setFinished] = useState<boolean>(false);

    async function getNextSixPosts() {
        const nextPosition = Math.min(currentPosition + 6, jobList.length - 1);
        const targetIdList = jobList.slice(currentPosition, nextPosition);
        const jobPromises = targetIdList.map(id => fetchJob(id));
        const newJobPosts = await Promise.all(jobPromises);
        setjobPosts([...jobPosts, ...newJobPosts]);
        setIsReady(true);

        setcurrentPosition(nextPosition);
    }

    useEffect(() => {
        const fetchJobList = async () => {
            const response = await fetch(jobStoriesUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const jobs = await response.json();
            setJobList(jobs);
        }

        fetchJobList();
    }, [])

    return <>
        <div className='flex flex-col justify-between items-center py-12 h-min-[100vh] '>
            <div className='text-3xl pb-2'>Job Board</div>
            <div className='flex flex-col gap-4 pb-8'>
                {jobPosts.map((content, id) => {
                    return <Card by={content.by} time={content.time} title={content.title} url={content.url} key={id} />
                })}
            </div>
            <button onClick={() => {
                if (finished) {
                    return;
                }
                if (currentPosition == jobList.length - 1) {
                    setFinished(true);
                    return;
                }
                getNextSixPosts();
                setIsReady(false);
            }}
                className='rounded-lg bg-gray-400 w-32 h-12 '
                disabled={finished}
            >{finished ? "The End" : isReady ? "Get Jobs" : "Loading..."}</button>
        </div>

    </>
}
