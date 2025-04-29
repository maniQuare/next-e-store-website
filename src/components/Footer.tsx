"use client";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";

const Banner = "/website/footer-pattern.jpg";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Dashboard",
    link: "/#",
  },
  {
    title: "E store",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
export default function Footer() {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Website Logo"
                className="max-w-[50px]"
              />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
            {/* social links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <BsWhatsapp className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <CiFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#">
                <PiTelegramLogo className="text-3xl" />
              </a>
              <a href="#">
                <FiYoutube className="text-3xl" />
              </a>
              <a href="#">
                <LuTwitter className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <Link href={link.link} key={link.title}>
                      {" "}
                      <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                        <span>{link.title}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* contact-us links */}

            <div className="flex gap-2 items-end mt-4">
              <div className="py-8 px-4">
                <a className="flex items-center gap-3">
                  <CiLocationOn className="text-2xl" />
                  <p>Naihati, West Bengal</p>
                </a>

                <a
                  className="flex items-center gap-3 mt-3"
                  href="mailto:maniquare@gmail.com"
                >
                  <MdOutlineMarkEmailRead className="text-2xl" />
                  <p>maniquare@gmail.com</p>
                </a>
                <a
                  className="flex items-center gap-3 mt-3"
                  href="tel:+910123456789"
                >
                  <LuPhoneCall className="text-2xl" />
                  <p>0123456789</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
