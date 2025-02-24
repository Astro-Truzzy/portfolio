import React from "react";
import MagicButton from "./MagicButton";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";
// import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple"> your </span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:taresy.dev@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Astro.Dev
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-8 text-[24px]">
          <a href="https://github.com/Astro-Truzzy" target="_blank">
            {" "}
            <FaGithub />{" "}
          </a>
          <a href="https://wa.link/ooki5s" target="_blank">
            {" "}
            <FaWhatsapp />{" "}
          </a>
          <a href="https://www.linkedin.com/in/trust-williams/" target="_blank">
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a href="https://facebook.com/trust.williams.1428" target="_blank">
            {" "}
            <FaFacebookSquare />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
