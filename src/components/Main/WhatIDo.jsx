import gallery from '../../assets/gallery.png'
import cog from '../../assets/cog.png'
import battery from '../../assets/battery.png'

function WhatIDo(){
    return(
        <div className="do-container">
            <div>
                <p className="font-heading text-4xl font-semibold">What I do?</p>
            </div>

            <div className="roles-content">

                <div className="role-card">
                    <div className='flex justify-evenly'>                      
                        <p className="font-heading font-semibold text-2xl">Frontend Developer</p>
                        <div className='size-9'>
                            <img src={gallery} alt="" />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-body'>
                            I convert UI/UX mockups from figma into web pages that is functional,
                            ensures responsiveness across multiple device platform, 
                            collaborates with fellow UI/UX designer, backend developer, and product manager.
                        </p>
                        <p className='font-body'>
                            The responsibilties that I also handled included fixing bugs, adding new features,
                            api and data integration.
                        </p>
                    </div>
                </div>

                <div className="role-card">
                    <div className='flex justify-evenly'>                      
                        <p className="font-heading font-semibold text-2xl">Backend Developer</p>
                        <div className='size-10'>
                            <img src={cog} alt="" />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-body'>
                            I developed api along with its server side logics and database interactions
                            whether its relational database or non-relational database also I implemented
                            authorization and authentication.
                        </p>
                        <p className='font-body'>
                            I tested my api using api testing applications and implemented security measures
                            with the consideration of performance optimization in the backend.
                        </p>
                    </div>
                </div>

                <div className="role-card">
                    <div className='flex justify-evenly'>                      
                        <p className="font-heading font-semibold text-2xl">Full Stack Developer</p>
                        <div className='size-10'>
                            <img src={battery} alt="" />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-body'>
                            As a full stack developer I developed web apps handling both Frontend
                            and Backend responsibilties. I utilized the tools that is necessary to
                            execute my task.
                        </p>
                        <p className='font-body'>
                            I use version control system and project management tools to manage the
                            progress of the development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatIDo;