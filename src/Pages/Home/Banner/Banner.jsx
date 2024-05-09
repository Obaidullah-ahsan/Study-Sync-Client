import "./Banner.css";

const Banner = () => {
  return (
    <div className="md:h-[560px] banner flex items-center">
      <div className="flex flex-col m-5 md:ml-16 md:max-w-xl lg:max-w-2xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Join Us for Online Group <br /> Study Sessions!
        </h1>
        <p className="text-white">
          Step into a world of shared wisdom and collective achievement with our
          online study circle! Discover the transformative power of
          collaborative learning as we come together to conquer academic
          challenges and unlock new realms of knowledge.
        </p>
        <div>
          <a className="btn w-32 text-white border-none bg-[#5FCF80] text-base">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
