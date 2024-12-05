import "../index.css";

function Hero3() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#161616] text-white px-6 md:px-[130px] py-10 md:py-[50px] gap-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Title and Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-6xl font-medium palanquin gradient">
            SHOWCASING DESIGN WORK. BASED IN BENIN, NIGERIA.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            quam odio aut quas iure ipsa esse delectus temporibus omnis aliquid
            ab itaque voluptatum deserunt, minus nam magnam sequi vero
            veritatis?
          </p>
        </div>

        {/* Divider */}
        <div className="bg-gray-500 w-full h-[1px]"></div>

        {/* Design Approach */}
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm text-gray-400">{`//DesignApproach`}</p>
          <div className="flex flex-wrap gap-4">
            {[
              "Innovative",
              "Elegant",
              "Detail-oriented",
              "Collaborative",
              "Professional",
            ].map((approach) => (
              <button
                key={approach}
                className="px-6 py-3 bg-[#e50f19] text-[#161616] rounded-full text-sm font-medium hover:scale-105 hover:text-white transition-colors"
              >
                {approach}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center">
        <img
          src="/laptop.png"
          className="rounded-3xl shadow-lg max-w-full md:max-w-[500px]"
          alt="Laptop Design"
        />
      </div>
    </section>
  );
}

export default Hero3;
