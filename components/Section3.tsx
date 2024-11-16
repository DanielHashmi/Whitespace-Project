import Button from "./Button"

const Section3 = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-6 md:gap-12 w-[90vw] 2xl:w-[80vw] py-20 text-start md:text-center md:items-center">
                <h1 className="text-5xl md:text-7xl font-bold">Your work, everywhere
                    you are</h1>
                <p>Access your notes from your computer, phone or tablet by synchronising
                    with various services, including whitepace, Dropbox and OneDrive. The
                    app is available on Windows, macOS, Linux, Android and iOS. A terminal
                    app is also available!</p>

                <Button btn_txt_col="white" icon text="Try Taskey" />
            </div>
        </div>
    )
}

export default Section3
