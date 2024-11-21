import profileImage from '../../assets/crop.jpg'
import paperAirplane from '../../assets/paperAirplane.png'
import bulb from '../../assets/bulb.png'
import controller from '../../assets/controller.png'

function About(){
    return(
        <div className="h-[90vh] grid grid-cols-2 grid-rows-1">

            <div className="bg-dotted-pattern h-[90vh] grid grid-cols-3 grid-rows-4">

                <div className='flex justify-end items-end'>
                    <div className='size-14'>
                        <img className='animate-bounce' src={bulb} alt="" />
                    </div>
                </div>


                <div className='flex flex-col items-center gap-4 bg-slate-50 border-4 border-r-8 border-b-8 rounded-md border-black px-4 pt-4 row-start-2 row-end-4 col-start-2 col-end-2'>
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
                    <div className='size-36'>
                        <img src={controller} alt="" />
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col text-justify p-8">
                <p>Hi, I'm VAUGHN FITZ</p>
                <p>Dedicated in Designing, Building, and Innovating Web App</p>
                <p>I'am a Computer Engineer with a expertise and hands on experience in Web Development</p>
            </div>
        </div>
    );
}

export default About;