"use client"

const Banner = "/website/orange-pattern.jpg"
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
export default function NotifiedProducts(){
  return (
    <div
      data-aos="zoom-in"
      className="bg-gradient-to-r from-[#48E9F1] to-[#373973]"
      // style={BannerImg}

    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-black"
          />
        </div>
      </div>
    </div>
  );
}