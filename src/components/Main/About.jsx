import profileImage from '../../assets/crop.jpg'
import paperAirplane from '../../assets/paperAirplane.png'
import bulb from '../../assets/bulb.png'
import controller from '../../assets/controller.png'
import spring1 from '../../assets/spring1.png'
import house from '../../assets/house.png'
import sky from '../../assets/sky.png'

function About(){
    return(
        <div className="h-[90vh] grid grid-cols-2 grid-rows-1">

            <div className="bg-dotted-pattern h-[90vh] grid grid-cols-3 grid-rows-4 border-r-4 border-black" >

                <div className='flex justify-end items-end row-start-1 row-end-1 col-start-1 col-end-1'>
                    <div className='size-12'>
                        <img className='animate-bounce' src={bulb} alt="" />
                    </div>
                </div>


                <div className='flex flex-col z-20 items-center gap-4 bg-slate-50 border-4 border-r-8 border-b-8 rounded-md border-black px-4 pt-4 row-start-2 row-end-4 col-start-2 col-end-2'>
                    <div className='size-56 border-4 justify-center items-center border-black rounded-md'>
                       <img className='flex w-full h-full object-cover' src={profileImage} alt="" /> 
                    </div>

                    <div>
                        <p>LinkedIn:</p>
                        <p>Github:</p>
                        <p>Email: vaughnfitz27@gmail.com</p>
                    </div>
                </div>

                <div className='flex justify-end row-start-4 row-end-4 col-start-2 col-end-2'>
                    <div className='size-16'>
                        <img src={controller} alt="" />
                    </div>
                </div>

                <div className='flex row-start-2 row-end-2 col-start-3 col-end-3'>
                    <div className='size-12'>
                        <img src={paperAirplane} alt="" />
                    </div>
                </div>

                <div className='flex relative row-start-3 row-end-3 col-start-1 col-end-1'>
                    <div className='absolute left-48 top-14 size-36'>
                        <img src={house} alt="" />
                    </div>
                </div>
                
            </div>

            <div className="grid grid-rows-2 grid-cols-1 p-8">
                <div className='flex flex-col relative justify-end row-start-1 row-end-1  text-justify'>
                    <div className='size-12'>
                        <img src={sky} alt="" />
                    </div>
                    <p className='font-heading font-semibold text-5xl mb-8'>Dedicated and Passionate Web Developer</p>
                    <p className='font-body text-2xl mb-2 tracking-wide'>I am VAUGHN FITZ BENEDICTO,</p>
                    <p className='font-body text-l text-slate-700 tracking-wider'>a Computer Engineer with a expertise and hands on experience in Web Development</p>

                </div>
                <div className='grid grid-col-2 grid-rows-1 row-start-2 row-end-2'>
                    <div className='flex justify-end items-center w-full h-full col-start-2 col-end-2 p-4'>
                        <div className='size-28'>
                            <img src={spring1} alt="" />
                        </div>                          
                    </div>
                </div>



            </div>
        </div>
    );
}

export default About;