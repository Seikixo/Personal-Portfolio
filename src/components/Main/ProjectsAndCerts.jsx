
import html from '../../assets/html5.svg'
import css from '../../assets/css3.svg'
import tailwind from '../../assets/tailwindcss.svg'
import js from '../../assets/javascript.svg'
import ts from '../../assets/typescript.svg'
import nodejs from '../../assets/nodedotjs.svg'
import express from '../../assets/express.svg'
import socketio from '../../assets/socketdotio.svg'
import leaflet from '../../assets/leaflet.svg'
import angular from '../../assets/angular.svg'
import rxjs from '../../assets/reactivex.svg'
import react from '../../assets/react.svg'
import nestjs from '../../assets/nestjs.svg'
import laravel from '../../assets/laravel.svg'
import php from '../../assets/php.svg'
import mysql from '../../assets/mysql.svg'
import postgresql from '../../assets/postgresql.svg'
import firebase from '../../assets/firebase.svg'
import postman from '../../assets/postman.svg'
import github from '../../assets/github.svg'
import inertia from '../../assets/inertia.svg'
import shadcnui from '../../assets/shadcnui.svg'
import CertGallery from './CertGallery/CertGallery'
import ObsGallery from './ObsGallery/ObsGallery'
import EinGallery from './EinGallery/EinGallery'
import MbGallery from './MbGallery/MbGallery'
import { motion } from 'motion/react'
import CdGallery from './CdGallery/CdGallery'

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
};

function ProjectsAndCerts(){

    const logos = [
        { name: 'HTML', logo: html },
        { name: 'CSS', logo: css },
        { name: 'TailwindCSS', logo: tailwind },
        { name: 'JavaScript', logo: js },
        { name: 'TypeScript', logo: ts },
        { name: 'PHP', logo: php },
        { name: 'Socket.IO', logo: socketio },
        { name: 'Leaflet', logo: leaflet },
        { name: 'Angular', logo: angular },
        { name: 'React', logo: react },
        { name: 'ShadCn', logo: shadcnui },
        { name: 'RxJS', logo: rxjs },
        { name: 'Node.js', logo: nodejs },
        { name: 'Express.js', logo: express },
        { name: 'NestJS', logo: nestjs },
        { name: 'Laravel', logo: laravel },
        { name: 'Inertia', logo: inertia },
        { name: 'MySql', logo: mysql },
        { name: 'PostgreSQL', logo: postgresql },
        { name: 'Firebase', logo: firebase },
        { name: 'Postman', logo: postman },
        { name: 'Github', logo: github },
    ];

    const logoContainer = logos.map((logo, index) => (
        <motion.div
            key={logo.logo}
            className="relative group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
        >
          <img src={logo.logo} alt={logo.name} className="h-16 w-16 md:h-12 md:w-12" />
          <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
            {logo.name}
          </span>
        </motion.div>
    ));



    return(
        <section id="projandcert" className="proj-and-cert-container scroll-smooth">
            <div>
                <p className="font-heading text-4xl font-semibold">Projects and Certificates</p>
            </div>

            <div className='exp-content'>

                <div className='flex flex-col gap-8'>
                    <div>
                        <p className='font-heading font-semibold text-2xl'>Technologies Utilized</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {logoContainer}                 
                    </div>
                </div>    

                <div className='flex flex-col gap-8'>
                    <div>
                        <p className='font-heading font-semibold text-2xl'>Certificates</p>
                    </div>
                    <CertGallery />
                </div> 

                <div className='flex flex-wrap flex-col gap-12'>
                    <div>
                        <p className='font-heading font-bold text-2xl'>Major Projects</p>
                    </div>

                    <div className='flex flex-col flex-wrap gap-10'>

                        <div className='flex flex-wrap gap-12 md:gap-2'>
                            <div className='flex flex-col flex-wrap'>
                                <p className='font-heading font-semibold text-xl mb-3'>
                                    OBSENTRY University of Mindanao Student Vehicle Automated Monitoring System
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • A system that uses web app to monitor data relating to gps, gas sensor, and rfid.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • It monitors various processed data from sensors and displays it to admin and students.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Realtime data monitoring.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Responsive design.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Authentication and Authorization functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Duration: August 2023 - July 2024
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Role: Full Stack Developer.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Note: Kindly wait for its cold start.
                                </p>

                                <p className='font-body text-lg'>Web app url: <a href="https://um-obsentry.onrender.com/" className='text-blue-500 underline mb-2'>https://um-obsentry.onrender.com/</a></p>

                                <p className='font-body text-lg mb-2 '>Tech Stack Used:</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <div className='flex w-fit relative group'>
                                        <img src={html} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            HTML
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={css} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            CSS
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={js} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            JavaScript
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={socketio} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Socket.IO
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={leaflet} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Leaflet
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={nodejs} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Node.js
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={express} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Express.js
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={firebase} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Firebase
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={github} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Github
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col flex-wrap'>
                                <ObsGallery />
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-12 md:gap-2 mb-8'>
                            <div className='flex flex-col flex-wrap'>
                                <p className='font-heading font-semibold text-xl mb-3'>
                                    EINGRESS Automated Doorlock System Version 1
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • A system that uses web app to monitor and secure the company building.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • It records the employees detail of Jairosoft Inc. using fingerprint and rfid scanner.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Authentication and Authorization functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • CRUD, Search, Filters, and Pagination functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • File validations and upload.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Duration: February 2024 - May 2024.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Role: Frontend Developer.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Note: I can't provide web app url because its company owned.
                                </p>

                                <p className='font-body text-lg mb-2 '>Tech Stack Used:</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <div className='flex w-fit relative group'>
                                        <img src={html} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            HTML
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={css} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            CSS
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={js} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            JavaScript
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={ts} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            TypeScript
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={angular} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Angular
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={rxjs} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            RxJS
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={nestjs} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Nestjs
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={postgresql} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            PostgreSQL
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={postman} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Postman
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={github} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Github
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col flex-wrap'>
                                <EinGallery />
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-12 md:gap-2 mb-8'>
                            <div className='flex flex-col flex-wrap'>
                                <p className='font-heading font-semibold text-xl mb-3'>
                                    Car Dealer Inc.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Authentication and Authorization functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • CRUD, Search, Filters, Pagination functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Duration: September 2024.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Role: Full Stack Developer.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Note: This is an exercise project during training.
                                </p>

                                <p className='font-body text-lg mb-2 '>Tech Stack Used:</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <div className='flex w-fit relative group'>
                                        <img src={html} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            HTML
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={css} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            CSS
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={js} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            JavaScript
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={ts} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            TypeScript
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={angular} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Angular
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={rxjs} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            RxJS
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={nestjs} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Nestjs
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={postgresql} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            PostgreSQL
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={postman} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Postman
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={github} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Github
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col flex-wrap'>
                                <CdGallery />
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-12 md:gap-2 mb-8'>
                            <div className='flex flex-col flex-wrap'>
                                <p className='font-heading font-semibold text-xl mb-3'>
                                    ManageBiz POS System
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • A web-based system designed to streamline and manage business operations efficiently.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Handles records of customers, products, orders, payments, and productions.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Responsive layout.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Displays summaries and reports in dashboard.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • Authentication and Authorization functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                • CRUD, Search, Pagination, and Filters functionality.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Duration: February 2025 - April 2025.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Role: Full Stack Developer.
                                </p>
                                <p className='font-body text-lg tracking-wider'>
                                    Note: The business owner wants it to be used locally.
                                </p>

                                <p className='font-body text-lg mb-2 '>Tech Stack Used:</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <div className='flex w-fit relative group'>
                                        <img src={html} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            HTML
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={tailwind} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Tailwind
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={js} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            JavaScript
                                        </span>
                                    </div>

                                    <div className='flex w-fit relative group'>
                                        <img src={react} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            React
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={inertia} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Inertia
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={shadcnui} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            ShadCn
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={laravel} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Laravel
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={postgresql} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            PostgreSQL
                                        </span>
                                    </div>
                                    <div className='flex w-fit relative group'>
                                        <img src={github} className="h-12 w-12" />
                                        <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                                            Github
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col flex-wrap'>
                                <MbGallery />
                            </div>
                        </div>

                    </div>
                </div>    

            </div>
            
        </section>
        
    );
}

export default ProjectsAndCerts;