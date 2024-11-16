import Image from "next/image"
import Button from "./Button"

const Section6 = () => {
    return (
        <div className="flex justify-center py-32 text-center">
            <div className="w-[96%] 2xl:w-[80vw] flex flex-col items-center gap-12">
                <div>
                    <div className="text-6xl font-bold">Try Whitespace</div>
                    <div className="text-6xl font-bold">Today</div>
                </div>

                <div>
                    <div className="text-2xl">Get started for free.</div>
                    <div className="text-2xl">Add your whole team as your needs grow.</div>
                </div>
                
                <Button btn_txt_col="white" icon text="Try Tackey free" />
                <div className="text-2xl">On a big team? Contact sales</div>
                <div className="flex gap-6">
                    <Image src={'/appleWhite.png'} height={50} width={50} alt="apple-logo" />
                    <Image src={'/windows.png'} height={50} width={50} alt="windows-logo" />
                    <Image src={'/android.png'} height={50} width={50} alt="android-logo" />
                </div>
            </div>
        </div>
    )
}

export default Section6
