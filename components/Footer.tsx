import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Footer = () => {
    return (
        <div className="flex flex-col gap-6 items-center p-6" >
            <div className="flex flex-col items-center sm:items-start text-nowrap text-center sm:text-start lg:flex-row gap-20 lg:gap-6 w-[96%] 2xl:w-[80vw]">
                <div className="lg:w-1/5 flex flex-col items-center sm:items-start justify-center lg:justify-start gap-3 sm:mr-12">
                    <div className="text-white flex items-center gap-2 font-bold text-2xl">
                        <Image src={'/logo.png'} alt="logo" width={40} height={40} />
                        <div className="sm:text-6xl lg:text-2xl">whitespace</div>
                    </div>
                    <p className="w-1/2 lg:w-full text-wrap">
                        whitespace was created for
                        the new ways we live and
                        work. We make a better
                        workspace around the world
                    </p>
                </div>

                <div className="sm:w-1/5 flex flex-col gap-3">
                    <div className="font-bold">Product</div>
                    <Link href={'/'}>Overview</Link>
                    <Link href={'/'}>Pricing</Link>
                    <Link href={'/'}>Customer stories</Link>
                </div>

                <div className="sm:w-1/5 flex flex-col gap-3">
                    <div className="font-bold">Resources</div>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>Guides & tutorials</Link>
                    <Link href={'/'}>Help center</Link>
                </div>

                <div className="sm:w-1/5 flex flex-col gap-3">
                    <div className="font-bold">Company</div>
                    <Link href={'/'}>About us</Link>
                    <Link href={'/'}>Careers</Link>
                    <Link href={'/'}>Media kit</Link>
                </div>

                <div className="lg:w-1/5 flex items-center sm:items-start flex-col gap-3">
                    <div className="font-bold text-3xl">Try It Today</div>
                    <p className="sm:w-1/5 w-1/2 lg:w-full text-wrap">Get started for free.
                        Add your
                        whole team as your needs grow
                    </p>
                    <Button btn_txt_col="white" icon text="Start today" />
                </div>

            </div>
            <div className="bg-[#ffffff26] h-[1px] w-[96%] 2xl:w-[80vw] hidden lg:block"></div>

            <div className="flex justify-between lg:flex-row items-center sm:items-start flex-col w-[96%] gap-6 pt-20 lg:pt-0 lg:gap-20 2xl:w-[80vw]">
                <div className="flex text-nowrap flex-col sm:flex-row gap-6 justify-between items-center w-full xl:w-1/2">
                    <div className="flex items-center">
                        <Image src={'/globe.png'} width={20} height={20} alt="globe-icon" />
                        <select className="bg-transparent">
                            <option>English</option>
                        </select>
                    </div>

                    <div>Terms & privacy</div>
                    <div>Security</div>
                    <div>Status</div>
                    <div>©2021 Whitespace LLC.</div>
                </div>
                <div className="bg-[#ffffff26] h-[1px] w-[96%] 2xl:w-[80vw] block lg:hidden"></div>

                <div className="flex gap-6 items-center justify-end xl:w-1/2">
                    <Image className="invert" src={'/facebook.svg'} width={10} height={10} alt="facebook-icon" />
                    <Image className="invert" src={'/twitter.svg'} width={15} height={15} alt="twitter-icon" />
                    <Image className="invert" src={'/linkedin.svg'} width={15} height={15} alt="linkedin-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer
