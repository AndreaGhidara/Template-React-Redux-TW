import Loader from "../Loader/Loader";

export default function Hero() {
    return (
        <div className="w-full h-[550px] bg-blue-400 dark:bg-[--color_bg_dark] flex justify-center items-end">
            <h1>
                <Loader />
            </h1>
        </div>
    )
}
