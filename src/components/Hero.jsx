import HERO_WORK from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse text-center sm:text-left sm:flex-row justify-between p-4 md:pl-12 lg:pl-[12%] mt-16">
      <div className="">
        <h1 className="text-4xl md:text4xl lg:text-8xl mt-8 sm:mt-0 font-bold leading-tight">
          More than just shorter links
        </h1>
        <h4 className="text-lg lg:text-2xl mt-2 sm:mt-0 font-medium text-[#bfbfbf] sm:w-5/6">
          Build your brand's recognition and get detailed insights on how your
          links are preforming
        </h4>
        <button className="text-[20px] md:text-[14px] lg:text-[20px] text-white font-bold py-4 px-10 md:py-2 md:px-6 lg:py-4 lg:px-10 mt-4 lg:mt-12 bg-[#2acfcf] rounded-full hover:bg-[#82eeee]">
          Get Started
        </button>
      </div>
      <div>
        <img
          src={HERO_WORK}
          alt="illustration-working"
          className="md:w-[700px] lg:w-[1320px]"
        />
      </div>
    </div>
  );
};

export default Hero;
