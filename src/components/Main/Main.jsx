import About from './About.jsx'
import Experience from './Experience.jsx'
import WhatIDo from './WhatIDo.jsx'

function Main(){
    return(
        <div className='grid min-h-screen grid-rows-3 grid-cols-1 z-10'>
            <header className='row-span-1'>
                <About/>
            </header>

            <main className='row-span-2'>
                <Experience/>
            </main>

            <footer className='row-span-3'>
                <WhatIDo/>
            </footer>    
        </div>
    );
}

export default Main;