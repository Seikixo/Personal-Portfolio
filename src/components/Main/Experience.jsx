
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
import CertGallery from './CertGallery/CertGallery'


function Experience(){

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
        { name: 'RxJS', logo: rxjs },
        { name: 'Node.js', logo: nodejs },
        { name: 'Express.js', logo: express },
        { name: 'NestJS', logo: nestjs },
        { name: 'Laravel', logo: laravel },
        { name: 'MySql', logo: mysql },
        { name: 'PostgreSQL', logo: postgresql },
        { name: 'Firebase', logo: firebase },
        { name: 'Postman', logo: postman },
        { name: 'Github', logo: github },
    ];

    const logoContainer = logos.map(logo =>
        <div key={logo.logo} className="relative group">
            <img src={logo.logo} alt={logo.name} className="h-16 w-16 md:h-12 md:w-12" />
            <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                {logo.name}
            </span>
        </div>
    );



    return(
        <div className="exp-container">
            <div>
                <p className="font-heading text-4xl font-semibold">Experiences</p>
            </div>

            <div className='exp-content'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='font-heading font-semibold text-2xl'>Technologies Utilized</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {logoContainer}                 
                    </div>
                </div>    

                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='font-heading font-semibold text-2xl'>Certificates</p>
                    </div>
                    <CertGallery />
                </div>    
            </div>
            
        </div>
        
    );
}

export default Experience;