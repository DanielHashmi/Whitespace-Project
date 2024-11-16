import Footer from "@/components/Footer";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";

const Home = () => {

  return (
    <div className="bg-[#043873]">
      <Section1
        img_classes="xl:px-20"
        image_classes="bg-[#c4defd] lg:h-[50vh] h-[40vh]"
        section_classes="pt-[50px] text-[#ffffff] bg-[#043873]"
        image={false}
        img_src=""
        direction="md:flex-row"
        btn_txt_col="#ffffff"
        h1="Get More Done with whitespace"
        p="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        button="Try Whitespace free"
      />
      <Section1
        img_classes="xl:px-20"
        image_classes="bg-[#c4defd] lg:h-[50vh] h-[40vh]"
        section_classes="pt-[50px] text-black bg-[#ffffff]"
        image={false}
        img_src=""
        direction="md:flex-row"
        btn_txt_col="#ffffff"
        h1="Project Management"
        p="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app them to a note."
        button="Get Started"
      />
      <Section1
        img_classes="xl:px-20"
        image_classes="bg-[white] lg:h-[50vh] sm:h-[45vh] h-[35vh]"
        section_classes="pt-[50px] text-black px-10 sm:px-0 bg-[#ffffff]"
        img_src="/whitespace.png"
        image
        direction="md:flex-row-reverse"
        btn_txt_col="#ffffff"
        h1="Try it now"
        p="With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        button="Work together"
      />
      <Section1
        img_classes="xl:px-20"
        image_classes="bg-[#c4defd] lg:h-[50vh] h-[40vh]"
        section_classes="pt-[50px] text-[#ffffff] bg-[#043873]"
        image={false}
        img_src=""
        direction="md:flex-row"
        btn_txt_col="#ffffff"
        h1="Use as Extension"
        p="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        button="Let’s Go"
      />
      <Section1
        img_classes="xl:px-20"
        image_classes="bg-[#c4defd] lg:h-[50vh] h-[40vh]"
        section_classes="pt-[50px] text-black bg-[#ffffff]"
        image={false}
        img_src=""
        direction="md:flex-row-reverse"
        btn_txt_col="#ffffff"
        h1="Customize it to your needs"
        p="Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        button="Let’s Go"
      />
      <Section2 />
      <Section3 />
      <Section1
        img_classes="xl:px-20"
        image_classes="bg-[white] sm:h-[35vh] h-[30vh]"
        img_src='/image.png'
        section_classes="pt-[50px] text-black bg-[#ffffff]"
        image
        direction="flex-col-reverse md:flex-row"
        btn_txt_col="#ffffff"
        h1="100% your data"
        p="The app is open source and your notes are saved to an open
format, so you ll always have access to them. Uses End-To End
Encryption (E2EE) to secure your notes and ensure no one but
yourself can access them"
        button="Read more"
      />
      <Section4 />
      <Section1
        img_classes=""
        image_classes="bg-[#043873]] lg:h-[50vh] sm:h-[45vh] h-[35vh]"
        section_classes="pt-[50px] text-white bg-[#043873]]"
        img_src="/image2.png"
        image
        direction="flex-col-reverse md:flex-row-reverse"
        btn_txt_col="#ffffff"
        h1="Work with Your Favorite Apps Using whitespace"
        p="Whitespace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
        button="Read more"
      />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default Home