import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactimg from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';
import nodeimg from '../assets/node.png';
import C from '../assets/C++.png';
import express from '../assets/express.png';
import mongo from '../assets/mongodb.png';

const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
        },
         {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
         {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
         {
            id:4,
            src:reactimg,
            title:'React',
            style:'shadow-blue-600',
        },
         {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400',
        },
         {
            id:6,
            src:nextjs,
            title:'NextJS',
            style:'shadow-white',
        },
         {
            id:7,
            src:github,
            title:'GitHub',
            style:'shadow-gray-500',
        },
         {
            id:8,
            src:C,
            title:'C++',
            style:'shadow-blue-600',
        },
         {
            id:9,
            src:python,
            title:'Python',
            style:'shadow-yellow-500',
        },
        {
            id:10,
            src:nodeimg,
            title:'NodeJS',
            style:'shadow-green-200',
        },
        {
            id:12,
            src:express,
            title:'ExpressJS',
            style:'shadow-gray-300',
        },
         {
            id:11,
            src:mongo,
            title:'MongoDB',
            style:'shadow-green-500',
        },
         
        
    ]


  return (
    <div name = 'experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                <p className='py-6'>Technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
               { techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} className='w-20 mx-auto' alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience