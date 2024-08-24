import { FaLocationArrow } from "react-icons/fa6"; // Check if fa6 is correct
import { socialMedia } from "@/data"; // Ensure this path is correct
import MagicButton from "./MagicButton"; // Verify this path and component

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center z-10">
        <h1 className="text-4xl font-bold text-center mb-4 lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 text-lg text-center mb-6 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:manojitdas180306@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright © 2024 Manojit Das
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img}  width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
