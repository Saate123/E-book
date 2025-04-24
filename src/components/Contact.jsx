import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center py-16 px-4 sm:px-8 md:px-16 bg-[#080808] gap-8">
      {/* Readers Club Section */}
      <div className="bg-[#202020] w-full lg:w-[550px] p-6 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold p-3 mb-6 bg-[#A72024]">
          Join my Readers' Club
        </h2>
        <p className="text-base md:text-lg leading-8 mb-6">
          Join my Readers Club to receive a FREE short story, plus news of
          giveaways, book recommendations, writing tips and more.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 bg-[#323131] pl-5 rounded-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-[#323131] pl-5 rounded-sm"
          />
          <button
            type="submit"
            className="w-full text-center text-white bg-[#a72024] h-12 text-lg"
          >
            Join
          </button>
        </form>
      </div>

      {/* Contact Section */}
      <div className="bg-[#202020] w-full lg:w-[550px] p-6 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold p-3 mb-6 bg-[#A72024]">
          Contact me
        </h2>
        <div className="text-base md:text-lg leading-8 space-y-4">
          <p>Do get in touch.</p>
          <p>
            Write to me at{" "}
            <a href="mailto:anna@annamazzola.com" className="underline">
              anna@annamazzola.com
            </a>{" "}
            or contact me on social media below.
          </p>
          <p>
            For events and publicity contact Sarah Lundy at Orion Publishing:{" "}
            <a href="mailto:sarah.lundy@orionbooks.co.uk" className="underline">
              sarah.lundy@orionbooks.co.uk
            </a>
          </p>
          <p>
            My literary agent is{" "}
            <a href="#" className="underline">
              Juliet Mushens
            </a>{" "}
            at Mushens Entertainment.
          </p>
          <p>
            My TV agent is{" "}
            <a href="#" className="underline">
              Emily Hayward-Whitlock
            </a>{" "}
            at The Artists' Partnership.
          </p>
          <p className="text-center font-semibold">Say hello on social media</p>
          <div className="flex justify-center gap-4 text-2xl">
            <a
              href="https://www.facebook.com/share/16H5Kn7dHk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a72024] p-2 rounded-full"
            >
              <FaFacebookF className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/linda-somiari-stewart-858556150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a72024] p-2 rounded-full"
            >
              <FaLinkedinIn className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a72024] p-2 rounded-full"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
