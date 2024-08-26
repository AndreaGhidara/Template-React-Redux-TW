import SwitchTheme from "../SwitchTheme/SwitchTheme";

export default function Navbar() {
    return (
        <nav className="w-[1200px] mx-auto flex justify-between py-2">
            <div>
                LOGO
            </div>
            <div className="flex">
                LINk
                <div className="ps-5">
                    <SwitchTheme />
                </div>
            </div>
        </nav>
    )
}
