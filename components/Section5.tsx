import Image from "next/image"
import Button from "./Button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"

const Section5 = () => {
    return (
        <div className="bg-white flex justify-center items-center text-black text-center">
            <div className="w-[90vw] 2xl:w-[80vw] flex flex-col gap-12 py-20">
                <h1 className="text-6xl font-bold ">What Our Clients Says</h1>

                <Carousel>
                    <CarouselContent className="flex gap-6 items-center cursor-grab active:cursor-grabbing select-none no-drag shadow1">
                        <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                            <Card>
                                <CardContent className="text-start flex flex-col items-start gap-8 py-12 rounded-lg px-6">
                                    <Image src={'/quotes.png'} width={100} height={100} alt="quotes-icon" />

                                    <p className="font-semibold">Whitespace is designed as a collaboration tool
                                        for businesses that is a full project
                                        management solution.
                                    </p>

                                    <div className="bg-blue-950 h-[2px] w-full"></div>
                                    <div className="flex gap-6 items-start ">
                                        <Image src={'/redGirl.png'} width={100} height={100} alt="quotes-icon" />
                                        <div>
                                            <h2 className="font-bold text-xl">Oberon Shaw, MCH</h2>
                                            <p>Head of Talent Acquisition, North
                                                America</p>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                            <Card>
                                <CardContent className="text-start flex flex-col items-start gap-8 py-12 text-white bg-[#4f9cf9] rounded-lg px-6">
                                    <Image src={'/quotes2.png'} width={100} height={100} alt="quotes-icon" />

                                    <p className="font-semibold">Whitespace is designed as a collaboration tool
                                        for businesses that is a full project
                                        management solution.
                                    </p>

                                    <div className="bg-white h-[2px] w-full"></div>
                                    <div className="flex gap-6 items-start ">
                                        <Image src={'/boy.png'} width={100} height={100} alt="quotes-icon" />
                                        <div>
                                            <h2 className="font-bold text-xl">Oberon Shaw, MCH</h2>
                                            <p>Head of Talent Acquisition, North
                                                America</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                            <Card>
                                <CardContent className="text-start flex flex-col items-start gap-8 py-12 text-white bg-[#4f9cf9] rounded-lg px-6">
                                    <Image src={'/quotes2.png'} width={100} height={100} alt="quotes-icon" />

                                    <p className="font-semibold">Whitespace is designed as a collaboration tool
                                        for businesses that is a full project
                                        management solution.
                                    </p>

                                    <div className="bg-white h-[2px] w-full"></div>
                                    <div className="flex gap-6 items-start ">
                                        <Image src={'/boy2.png'} width={100} height={100} alt="quotes-icon" />
                                        <div>
                                            <h2 className="font-bold text-xl">Oberon Shaw, MCH</h2>
                                            <p>Head of Talent Acquisition, North
                                                America</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                    </CarouselContent>
                </Carousel>
            </div>
        </div >
    )
}

export default Section5
