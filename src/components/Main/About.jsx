import profileImage from '../../assets/crop.jpg'
import paperAirplane from '../../assets/paperAirplane.png'
import bulb from '../../assets/bulb.png'
import controller from '../../assets/controller.png'
import spring1 from '../../assets/spring1.png'
import house from '../../assets/house.png'
import sky from '../../assets/sky.png'

function About(){
    return(
        <div className="grid grid-cols-2 grid-rows-1 h-[90vh] z-20 ">

            <div className="bg-x-pattern h-[90vh] grid grid-cols-3 grid-rows-4 border-r-4 border-black" >

                <div className='flex justify-end items-end row-start-1 row-end-1 col-start-1 col-end-1'>
                    <div className='size-12'>
                        <img className='animate-pulse' src={bulb} alt="" />
                    </div>
                </div>


                <div className='grid grid-col-1 grid-rows-[250px,1fr] z-40 items-center bg-custom-white border-custom rounded-md border-custom-black shadow-custom-black px-4 pt-4 row-start-2 row-end-4 col-start-2 col-end-2'>
                    <div className='flex relative w-full h-full items-center justify-center '>
                       <img className='w-full h-full object-cover absolute border-custom  border-custom-black rounded-md' src={profileImage} alt="" /> 
                    </div>

                    <div>
                        <p className='font-body'>#Computer Engineer</p>
                        <p className='font-body'>#Full Stack Web Developer</p>
                    </div>
                </div>

                <div className='flex justify-end row-start-4 row-end-4 col-start-2 col-end-2'>
                    <div className='size-16'>
                        <img src={controller} alt="" />
                    </div>
                </div>

                <div className='flex relative row-start-3 row-end-3 col-start-1 col-end-1'>
                    <div className='absolute left-48 top-14 size-36'>
                        <img src={house} alt="" />
                    </div>
                </div>
                
            </div>

            <div className="grid grid-rows-2 grid-cols-1 p-8">
                <div className='flex flex-col relative justify-end row-start-1 row-end-1  text-justify p-4'>
                    <div className='size-12'>
                        <img className='animate-backAndForth' src={sky} alt="" />
                    </div>
                    <p className='font-heading font-semibold text-5xl mb-10'>Dedicated and Passionate Web Developer</p>
                    <p className='font-body text-xl tracking-wide'>I am VAUGHN FITZ BENEDICTO,</p>
                    <p className='font-body text-l text-slate-700 tracking-wider'>a Computer Engineer with a expertise and hands on experience in Web Development</p>

                </div>
                <div className='grid grid-col-2 grid-rows-1 row-start-2 row-end-2'>

                    <div className='flex flex-col justify-center col-start-1 col-end-1 gap-4 p-4'>
                        <a className='flex justify-center w-[70%] font-body font-bold border-custom border-custom-black shadow-custom-black rounded-md text-body text-custom-orange bg-custom-blue cursor-pointer hover:border-custom hover:border-custom-blue hover:shadow-custom-blue hover:text-custom-beige hover:bg-custom-white hover:text-black'
                        href="https://github.com/Seikixo">Github</a>
                        <a className='flex justify-center w-[70%] font-body font-bold border-custom border-custom-black shadow-custom-black rounded-md text-body text-custom-orange bg-custom-blue cursor-pointer hover:border-custom hover:border-custom-blue hover:shadow-custom-blue hover:text-custom-beige hover:bg-custom-white hover:text-black' 
                        href="https://www.linkedin.com/in/vaughn-fitz-benedicto-aab456226/">LinkedIn</a>
                        <a className='flex justify-center w-[70%] font-body font-bold border-custom border-custom-black shadow-custom-black rounded-md text-body text-custom-orange bg-custom-blue cursor-pointer hover:border-custom hover:border-custom-blue hover:shadow-custom-blue hover:text-custom-beige hover:bg-custom-white hover:text-black' 
                        href="">Gmail</a>
                    </div>

                    <div className='flex justify-end items-center w-full h-full col-start-2 col-end-2 p-4'>
                        <div className='size-32'>
                            <img src={spring1} alt="" />
                        </div>                          
                    </div>
                </div>



            </div>
        </div>
    );
}

export default About;