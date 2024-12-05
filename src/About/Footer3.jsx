import "../index.css";

function Footer3() {
  return (
    <footer className="bg-[#161616] text-white px-6 md:px-[130px] py-10 md:py-[50px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold">
            Let’s create something amazing together.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-2">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button className="bg-white py-2 px-6 rounded-full text-base font-medium text-[#161616] hover:bg-transparent hover:text-white hover:border-[1px] hover:border-zinc-300 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
          <button className="border-[1px] border-zinc-300 py-2 px-6 rounded-full text-base font-medium hover:bg-white hover:text-[#161616] transition-all duration-300 transform hover:scale-105">
            View All Works
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-zinc-700 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Neriah. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-all duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-all duration-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-all duration-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
