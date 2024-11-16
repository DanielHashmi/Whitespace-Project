import Image from "next/image"
import Button from "./Button"

const Navbar = () => {
    return (
        <div className="bg-[#043873] flex justify-center w-screen p-4 text-nowrap z-50 fixed top-[-1px]">
            <div className="flex bg-[#043873] justify-between items-center w-[96%] 2xl:w-[80vw]">
                <div className="text-white flex gap-2 font-bold text-2xl">
                    <Image src={'/logo.png'} alt="logo" width={40} height={40} />
                    <div>whitespace</div>
                </div>

                <div className="flex gap-6">
                    <div className="hidden gap-6 xl:flex">
                        <select className="bg-transparent p-4"><option>Products</option></select>
                        <select className="bg-transparent p-4"><option>Solutions</option></select>
                        <select className="bg-transparent p-4"><option>Resources</option></select>
                        <select className="bg-transparent p-4"><option>Pricing</option></select>
                    </div>
                    <div className="hidden md:flex gap-6">
                        <button className="bg-[#ffe492] text-black rounded-lg py-4 px-8">Login</button>
                        <Button icon btn_txt_col={'#ffffff'} text="Try Whitespace free" />
                    </div>
                    <Image className="invert block xl:hidden" src={'/hamburger.svg'} alt="menu" width={60} height={60} />
                </div>
            </div>
        </div>
    )
}

export default Navbar