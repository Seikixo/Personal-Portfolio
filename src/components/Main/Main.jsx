import About from './About.jsx'
import Experience from './Experience.jsx'
import WhatIDo from './WhatIDo.jsx'

function Main(){
    return(
        <div className='min-h-screen grid grid-rows-3 grid-cols-1 z-10'>
            <div className='row-span-1'>
                <About/>
            </div>

            <div className='row-span-2'>
                <Experience/>
            </div>

            <div className='row-span-3'>
                <WhatIDo/>
            </div>    
        </div>
    );
}

export default Main;