
function Header(){
    return(
        <header className="flex flex-row z-40 top-0 w-full bg-custom-beige  border-b-4 border-b-black
        md:sticky">
            <div className="w-full p-6 flex flex-row justify-between">
                
                <div className="font-heading text-2xl font-bold tracking-wider">
                    <p>Vaughn</p>
                </div>

                <div>
                    <ul className="flex flex-wrap gap-8 font-body tracking-widest
                    md: ">
                        <li>About Me</li>
                        <li>What I do</li>
                        <li>Experiences</li>
                    </ul>
                </div>
            </div>

        </header>
    );
}

export default Header;