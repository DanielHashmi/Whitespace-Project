import Image from "next/image";

const Button = (props: { text: string; btn_txt_col: string; icon: boolean }) => {
    return (
        <button style={{ color: props.btn_txt_col }} className={`bg-[#4f9cf9] rounded-lg py-4 w-48 flex justify-center gap-2 items-center`}>
            {props.text}
            {props.icon && <Image className="invert opacity-65" src={'/arrow.svg'} alt="arrow-icon" width={15} height={15} />}
        </button>
    )
}

export default Button