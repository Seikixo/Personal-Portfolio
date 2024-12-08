import About from './About.jsx'
import Experience from './Experience.jsx'
import WhatIDo from './WhatIDo.jsx'

function Main(){
    return(
        <main className='flex flex-col min-h-screen z-10'>
                <About/>

                <Experience/>

                <WhatIDo/>
        </main>
    );
}

export default Main;