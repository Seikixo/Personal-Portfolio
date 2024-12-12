import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwindcss.svg'

function Footer(){

    return(
        <footer className="flex flex-row justify-center z-40 w-full border-t-4 border-t-black p-10">
            <div className='flex flex-row flex-wrap items-center gap-2'>
                <p className='font-heading font-semibold'>Made with: </p>
                <div className='flex w-fit relative group'>
                    <img src={react} className="h-16 w-16 md:h-12" />
                    <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                        React
                    </span>
                </div>

                <div className='flex w-fit relative group'>
                    <img src={tailwind} className="h-16 w-16 md:h-12" />
                    <span className="flex absolute bottom-14 right-10 rounded-md bg-custom-white text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                        TailwindCSS
                    </span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;