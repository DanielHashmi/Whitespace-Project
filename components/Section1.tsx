import Image from "next/image";
import Button from "./Button"

const Section1 = (props: { h1: string; p: string; button: string; btn_txt_col: string; image_classes: string; img_classes: string; section_classes: string; direction: string; img_src: string; image: boolean; }) => {
    return (
        <div className={`flex ${props.section_classes} justify-center`}>
            <div className="md:h-[80vh] py-12 w-[96%] 2xl:w-[80vw] flex justify-center items-center">
                <div className={`flex-col ${props.direction} flex items-center justify-between md:w-full gap-20`}>
                    <div className="md:w-1/2 w-[96%] md:h-[50vh] flex flex-col gap-12 justify-center items-center text-center md:text-start md:items-start">
                        <h1 className="text-6xl font-bold">{props.h1}</h1>
                        <p className="text-lg">{props.p}</p>
                        <Button icon btn_txt_col={props.btn_txt_col} text={props.button} />
                    </div>

                    <div className={`bg-[#c4defd] md:w-1/2 w-[96%] max-w-[30rem] md:max-w-[50%] ${props.image_classes} relative`}>
                        {props.image && <Image src={props.img_src} className={`${props.img_classes}`} fill alt="image" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1