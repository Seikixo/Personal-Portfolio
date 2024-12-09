import About from './About.jsx'
import Experience from './Experience.jsx'
import WhatIDo from './WhatIDo.jsx'

function Main(){
    return(
        <main className='flex flex-col min-h-screen z-10'>
                <About/>
                <WhatIDo/>
                <Experience/>              
        </main>
    );
}

export default Main;