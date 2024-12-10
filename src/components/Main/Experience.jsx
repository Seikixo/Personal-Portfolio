
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

function Experience(){

    const logos = [
        { name: 'HTML', logo: html },
        { name: 'CSS', logo: css },
        { name: 'TailwindCSS', logo: tailwind },
        { name: 'JavaScript', logo: js },
        { name: 'TypeScript', logo: ts },
        { name: 'Node.js', logo: nodejs },
        { name: 'Express.js', logo: express },
        { name: 'Socket.IO', logo: socketio },
        { name: 'Leaflet', logo: leaflet },
        { name: 'Angular', logo: angular },
        { name: 'RxJS', logo: rxjs },
        { name: 'React', logo: react },
        { name: 'NestJS', logo: nestjs },
        { name: 'Laravel', logo: laravel },
        { name: 'PHP', logo: php },
    ];

    const logoContainer = logos.map(logo =>
        <div key={logo.logo} className="relative group">
            <img src={logo.logo} alt={logo.name} className="h-16 w-16" />
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
                <div>
                    <p className='font-heading text-3xl'>Technologies Utilized</p>
                </div>

                <div className="flex gap-2">
                    {logoContainer}                 
                </div>
            </div>
            
        </div>
        
    );
}

export default Experience;