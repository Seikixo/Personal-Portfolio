
function Header(){
    return(
        <header className="z-20 sticky top-0 w-full bg-amber-50 flex flex-row border-b-4 border-b-black">
            <div className="w-full p-8 flex flex-row justify-between">
                <div>
                    <p>Vaughn</p>
                </div>

                <div>
                    <ul className="flex gap-8">
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