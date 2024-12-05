function Hero2() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/bg2.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Overlay for better text visibility */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold">Let’s Connect</h1>
        <p className="mt-4 text-sm md:text-lg max-w-xl mx-auto">
          Get in touch with your design needs. We’re here to bring your vision
          to life.
        </p>
      </div>
    </section>
  );
}

export default Hero2;
