import "../index.css";

function Hero() {
  return (
    <section className="bg-[#161616] text-white px-6 md:px-[130px] py-10 md:py-[80px]">
      <div className="flex flex-col md:flex-row items-center md:items-start animate-fadeIn">
        <div className="flex flex-col gap-6 md:gap-14 py-6 md:py-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl animate-slideIn">
            Hello, <span className="gradient">I’m Neriah.</span> Creative
            Designer in Nigeria.
          </h1>
          <p className="animate-fadeIn delay-150 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. At libero sit nec tincidunt
            eu at semper. Pharetra duis ipsum laoreet amet sem imperdiet cras
            feugiat. Lacinia feugiat duis pellentesque et nec ipsum est.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-9 items-center">
            <button className="bg-white py-2 px-6 md:py-2.5 md:px-7 rounded-full text-base md:text-lg font-medium text-[#161616] hover:bg-transparent hover:text-white hover:border-[1px] hover:border-zinc-300 transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
            <button className="border-[1px] border-zinc-300 py-2 px-6 md:py-2.5 md:px-6 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-[#161616] transition-all duration-300 transform hover:scale-105">
              View All Works
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-10 animate-scaleUp delay-200">
          <img
            src="/profile.png"
            alt=""
            className="animate-fadeIn rounded-full w-48 md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
