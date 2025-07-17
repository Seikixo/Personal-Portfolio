import About from './About.jsx'
import ProjectsAndCerts from './ProjectsAndCerts.jsx'
import Experiences from './Experiences.jsx'

function Main(){
    return(
        <main className='flex flex-col min-h-screen z-30'>
                <About/>
                <Experiences/>
                <ProjectsAndCerts/>              
        </main>
    );
}

export default Main;