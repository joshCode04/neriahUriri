function Body2() {
  return (
    <section className="bg-[#161616] text-white px-6 md:px-[130px] py-10 md:py-[50px]">
      {/* Contact Section */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Designer
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <button className="flex justify-center gap-2 hover:underline text-center bg-[#A9A9A9] text-[#161616] py-[23px] px-[25px] rounded-full w-auto md:w-[500px] text-lg font-medium hover:scale-105 transition-transform">
            <span className="text-3xl">
              <ion-icon name="mail"></ion-icon>
            </span>
            neriahuriri36@gmail.com
          </button>

          <button className="flex justify-center gap-2 hover:underline text-center bg-[#A9A9A9] text-[#161616] py-[23px] px-[25px] rounded-full w-auto md:w-[500px] text-lg font-medium hover:scale-105 transition-transform">
            <span className="text-3xl">
              <ion-icon name="call"></ion-icon>
            </span>
            +234 800 123 4567
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Drop a Message</h2>
        <form
          action="mailto:neriahuriri36@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-6"
        >
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              className="flex-1 bg-[#161616] border border-[#A9A9A9] text-white py-4 px-6 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="flex-1 bg-[#161616] border border-[#A9A9A9] text-white py-4 px-6 rounded-md focus:outline-none"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="Company Name"
              placeholder="Company Name"
              className="flex-1 bg-[#161616] border border-[#A9A9A9] text-white py-4 px-6 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="Phone Number"
              placeholder="Phone Number"
              className="flex-1 bg-[#161616] border border-[#A9A9A9] text-white py-4 px-6 rounded-md focus:outline-none"
            />
          </div>

          {/* Project Details */}
          <textarea
            name="Project Details"
            placeholder="Project Details"
            className="w-full bg-[#161616] border border-[#A9A9A9] text-white py-4 px-6 rounded-md focus:outline-none h-40 resize-none"
          ></textarea>

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#E50F19] text-white py-4 px-24 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Body2;
