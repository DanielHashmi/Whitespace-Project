import Image from "next/image"

const Section4 = () => {
    return (
        <div className="bg-white text-black flex justify-center py-28">
            <div className="w-[96%] 2xl:w-[80vw] flex flex-col gap-20">
                <h1 className="md:text-7xl text-6xl font-bold text-center">Our sponsors</h1>
                <div className="grid md:grid-cols-4 grid-cols-1 grid-rows-1 gap-20 md:gap-0 justify-center items-center justify-self-center">
                    <Image src={'/apple.png'} height={300} width={300} className="md:w-1/4 w-20 justify-self-center" alt="apple-logo" />
                    <Image src={'/microsoft.png'} height={300} width={300} className="md:w-2/3 w-52 justify-self-center" alt="microsoft-logo" />
                    <Image src={'/slack.png'} height={300} width={300} className="md:w-2/3 w-52 justify-self-center" alt="slack-logo" />
                    <Image src={'/google.png'} height={300} width={300} className="md:w-2/3 w-52 justify-self-center" alt="google-logo" />
                </div>
            </div>
        </div>
    )
}

export default Section4
