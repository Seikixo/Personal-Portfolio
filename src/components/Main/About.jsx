import profileImage from '../../assets/crop.jpg'
import paperAirplane from '../../assets/paperAirplane.png'
import bulb from '../../assets/bulb.png'
import controller from '../../assets/controller.png'
import spring1 from '../../assets/spring1.png'
import house from '../../assets/house.png'
import sky from '../../assets/sky.png'
import githubO from '../../assets/github-o.png'
import githubB from '../../assets/github-b.png'
import linkedinO from '../../assets/linkedin-o.png'
import linkedinB from '../../assets/linkedin-b.png'
import gmailO from '../../assets/gmail-o.png'
import gmailB from '../../assets/gmail-b.png'
import '../../styles.css'

function About(){
    return(
        <section id="about-me" className="about-container scroll-smooth">

            <div className="about-content1">
                <div className='flex flex-col relative justify-end row-start-1 row-end-1  text-justify p-4 pb-0'>
                    <div className='size-12'>
                        <img className='animate-backAndForth' src={sky} alt="" />
                    </div>
                    <p className='font-heading font-bold text-5xl text-wrap mb-10'>Dedicated and Committed to this craft</p>
                    <p className='font-body font-semibold text-xl tracking-wide'>I am Vaughn Fitz Benedicto,</p>
                    <p className='font-body text-lg text-slate-700 tracking-wider'>a Computer Engineer with a expertise and hands on experience in Web Development.</p>

                </div>
                <div className='grid grid-cols-2 grid-rows-1 row-start-2 row-end-2'>

                    <div className='flex flex-col justify-center col-start-1 col-end-1 gap-4 p-4'>

                        <a className="btn group" 
                        href="https://github.com/Seikixo">
                            <div className='relative w-5 h-5'>
                                <img className='btn-img1' src={githubO} alt="Github Default" /> 
                                <img className='btn-img2' src={githubB} alt="Github Hover" />
                            </div>
                            
                            <span className="relative z-10">Github</span>
                        </a>
                        <a className="btn group" 
                        href="https://www.linkedin.com/in/vaughn-fitz-benedicto-aab456226/">
                            <div className='relative w-5 h-5'>
                                <img className='btn-img1' src={linkedinO} alt="LinkedIn Default" /> 
                                <img className='btn-img2' src={linkedinB} alt="LinkedIn Hover" />
                            </div>

                            <span className="relative z-10">LinkedIn</span>
                        </a>
                        <a className='btn group' 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=vaughnfitz27@gmail.com&su=Your+Subject+Here&body=Your+message+here">
                             <div className='relative w-5 h-5'>
                                <img className='btn-img1' src={gmailO} alt="Gmail Default" /> 
                                <img className='btn-img2' src={gmailB} alt="Gmail Hover" />
                            </div>

                            <span className="relative z-10">Gmail</span>
                        </a>

                    </div>

                    <div className='flex justify-end items-center w-full h-full col-start-2 col-end-2 p-4'>
                        <div className='size-32'>
                            <img src={spring1} alt="" />
                        </div>                          
                    </div>
                </div>
            </div>

            <div className="about-content2" >
                <div className='flex justify-end items-end row-start-1 row-end-1 col-start-1 col-end-1' >
                    <div className='size-12'>
                        <img className='animate-pulse' src={bulb} alt="" />
                    </div>
                </div>

                <div className='flex justify-end row-start-4 row-end-4 col-start-2 col-end-2 '>
                    <div className='size-16'>
                        <img src={controller} alt="" />
                    </div>
                </div>

                <div className="profile-card">
                    <div className='flex relative w-full h-full items-center justify-center '>
                       <img className='w-full h-full object-cover absolute border-custom  border-custom-black rounded-md' src={profileImage} alt="" /> 
                    </div>

                    <div className='flex flex-col static'>
                        <p className='font-body'>#Computer Engineer</p>
                        <p className='font-body'>#Full Stack Web Developer</p>
                    </div>
                </div>
                
            </div>

        </section>
    );
}

export default About;