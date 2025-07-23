import gallery from '../../assets/gallery.png'
import cog from '../../assets/cog.png'
import battery from '../../assets/battery.png'

function Experiences(){
    return(
        <section id="experience" className="experience-container scroll-smooth">
            <div className='w-full text-center'>
                <p className="font-heading text-4xl font-semibold">Experiences</p>
            </div>

            <div className="experience-content">

            <div className="experience-card">
                    <div className='flex flex-col items-start mb-4'>        
                        <div className='experience-duration'>
                            <p className="font-body text-sm bg-purple-100 px-3 py-1 rounded-full">August 2023 - July 2024</p>
                        </div>              
                        <div>
                            <p className="font-heading font-semibold text-2xl">Full Stack Developer - Student</p>
                            <p className="font-body text-lg text-gray-600">University of Mindanao</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-body tracking-wider'>
                            Started my web developer journey building responsive websites and dashboards
                            for Obsentry. It is a system that is a real-time monitoring of data's relating to gps, gas sensor, and rfid using web app.
                        </p>
                        <p className='font-body tracking-wider'>
                            Utilized emerging tech, bug fixes, and feature implementations while
                            learning industry best practices and version control workflows using Git as a student.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className="tech-tag">HTML/CSS</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">Github</span>
                            <span className="tech-tag">Firebase</span>                            
                        </div>
                    </div>
                </div>

                <div className="experience-card">
                    <div className='flex flex-col items-start mb-4'>    
                        <div className='experience-duration'>
                            <p className="font-body text-sm bg-green-100 px-3 py-1 rounded-full mb-2">February 2024 - May 2024</p>
                        </div>                  
                        <div>
                            <p className="font-heading font-semibold text-2xl">Frontend Developer - Intern</p>
                            <p className="font-body text-lg text-gray-600">Jairosoft Inc.</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-body tracking-wider'>
                            Design and implement user-friendly interfaces, follows figma mockup and prototype designs from
                            UI/UX designers. Ensures api and data integration furthermore testing and debugging.
                        </p>
                        <p className='font-body tracking-wider'>
                            We practiced Agile Scrum as our SDLC model. Uses github version control workflows also guided
                            with industries best practices. Utilized ClickUp for team collaboration, project planning, 
                            and task management.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className="tech-tag">HTML/CSS</span>
                            <span className="tech-tag">Angular</span>
                            <span className="tech-tag">NestJS</span>
                            <span className="tech-tag">PostgreSQL</span>
                            <span className="tech-tag">ClickUp</span>  
                            <span className="tech-tag">Github</span>                           
                        </div>
                    </div>
                </div>

                <div className="experience-card">
                    <div className='flex flex-col items-start mb-4'>   
                        <div className='experience-duration'>
                            <p className="font-body text-sm bg-blue-100 px-3 py-1 rounded-full"> April 2025 - July 2025</p>
                        </div>                   
                        <div>
                            <p className="font-heading font-semibold text-2xl">Full Stack Developer - Freelance</p>
                            <p className="font-body text-lg text-gray-600">Backride Pinas</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-body tracking-wider'>
                            Joined the development of responsive and user-friendly web applications using Angular and Laravel,
                            serving over 100,000+ active users. Collaborated with cross-functional teams
                            to deliver features for employees and customers.
                        </p>
                        <p className='font-body tracking-wider'>
                            Utilized tools like Sentry, Notebooklm, Postman, Responsive Viewer to elevate developer experience.
                            Integrated frontend and backend through RESTful APIs powered by Laravel
                            Ensures optimized performance in the system with bug less executions.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className="tech-tag">Angular</span>
                            <span className="tech-tag">Laravel</span>
                            <span className="tech-tag">Livewire</span>
                            <span className="tech-tag">Tailwind CSS</span>
                            <span className="tech-tag">MySQL</span>
                            <span className="tech-tag">Github</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experiences;