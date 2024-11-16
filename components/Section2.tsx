import Image from "next/image"
import Button from "./Button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"

const Section2 = () => {
    return (
        <div className="bg-white flex justify-center items-center text-black text-center">
            <div className="w-[90vw] 2xl:w-[80vw] flex flex-col gap-12 py-20">
                <h1 className="text-6xl font-bold ">Choose Your Plan</h1>
                <p className="text-lg">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the
                    right plan for you.
                </p>


                <Carousel>
                    <CarouselContent className="flex gap-6 items-center cursor-grab active:cursor-grabbing select-none no-drag">
                        <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                            <Card>
                                <CardContent className="text-start flex flex-col items-start gap-6 border border-yellow-400 rounded-lg p-12">
                                    <h2 className="text-2xl font-semibold">Free</h2>
                                    <h3 className="text-4xl font-bold">$0</h3>
                                    <p className="font-semibold">Capture ideas and find them quickly</p>
                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Sync unlimited devices</h3>
                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>10 GB monthly uploads</h3>
                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>200 MB max. note size</h3>

                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Customize Home dashboard and access extra widgets</h3>

                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Connect primary Google Calendar account</h3>
                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Add due dates, reminders, and notifications to your tasks</h3>
                                    </div>

                                    <button className="font-semibold border border-yellow-400 rounded-lg  w-48 py-4">Get Started</button>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                            <Card>
                                <CardContent className="text-start flex flex-col items-start gap-6 md:py-20 text-white bg-[#043873] rounded-lg md:px-12 p-12">
                                    <h2 className="text-2xl font-semibold">Personal</h2>
                                    <h3 className="text-4xl font-bold text-[#ffe492]">$11.99</h3>
                                    <p className="font-semibold">Capture ideas and find them quickly</p>
                                    <div className="flex gap-6 items-center">
                                        <Image src={'/check.png'} width={20} height={20} alt="check-icon" />
                                        <h3>Sync unlimited devices</h3>
                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <Image src={'/check.png'} width={20} height={20} alt="check-icon" />
                                        <h3>10 GB monthly uploads</h3>
                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <Image src={'/check.png'} width={20} height={20} alt="check-icon" />
                                        <h3>200 MB max. note size</h3>

                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <Image src={'/check.png'} width={20} height={20} alt="check-icon" />
                                        <h3>Customize Home dashboard and access extra widgets</h3>

                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <Image src={'/check.png'} width={20} height={20} alt="check-icon" />
                                        <h3>Connect primary Google Calendar account</h3>
                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <Image src={'/check.png'} width={20} height={20} alt="check-icon" />
                                        <h3>Add due dates, reminders, and notifications to your tasks</h3>
                                    </div>
                                    <Button btn_txt_col="white" icon={false} text="Get Started" />
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="lg:basis-1/3 md:basis-1/2 ">
                            <Card>
                                <CardContent className="text-start flex flex-col items-start gap-6 border border-yellow-400 rounded-lg p-12">
                                    <h2 className="text-2xl font-semibold">Organization</h2>
                                    <h3 className="text-4xl font-bold">$49.99</h3>
                                    <p className="font-semibold">Capture ideas and find them quickly</p>
                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Sync unlimited devices</h3>
                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>10 GB monthly uploads</h3>
                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>200 MB max. note size</h3>

                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Customize Home dashboard and access extra widgets</h3>

                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Connect primary Google Calendar account</h3>
                                    </div>

                                    <div className="flex gap-6">
                                        <Image src={'/check.svg'} width={20} height={20} alt="check-icon" />
                                        <h3>Add due dates, reminders, and notifications to your tasks</h3>
                                    </div>

                                    <button className="font-semibold border border-yellow-400 rounded-lg  w-48 py-4">Get Started</button>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                    </CarouselContent>
                </Carousel>
            </div>
        </div >
    )
}

export default Section2
