import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className=" w-full flex justify-center py-16 px-4 sm:px-8 md:px-16 bg-[#080808]">
      <div className="bg-[#202020] w-[550px] p-5 mr-10 text-white">
        <h2 className="text-3xl sm:text-4xl md:text-4xl p-3  mb-6 bg-[#A72024] ">
          Join my Readers' Club
        </h2>
        <p className="text-lg leading-8">
          Join my Readers Club to receive a FREE short story, plus news of
          giveaways, book recommendations, writing tips and more.
        </p>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 bg-[#323131] mb-5 pl-5 rounded-sm"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full h-12 bg-[#323131] mb-5 pl-5 rounded-sm"
          />
          <button className="w-full text-center text-white bg-[#a72024] h-12 text-lg ">
            Join
          </button>
        </form>
      </div>
      <div className="text-white bg-[#202020] w-[550px] p-5 ">
        <h2 className="text-3xl sm:text-4xl md:text-4xl p-3 mb-6 bg-[#A72024] ">
          Contact me
        </h2>
        <div className="text-lg leading-8">
          <p className="mb-3">Do get in touch.</p>
          <p className="mb-3">
            Write to me on <a href="">anna@annamazzola.com</a> or contact me on
            social media on the links below. I'm on BlueSky, Instagram, Facebook
            and Threads.
          </p>
          <p className="mb-3">
            For events and publicity please contact Sarah Lundy at Orion
            Publishing at <a href="">sarah.lundy@orionbooks.co.uk</a>
          </p>
          <p className="mb-3">
            My literary agent is <a href="">Juliet Mushens</a> at Mushens
            Entertainment.
          </p>
          <p className="mb-3">
            My TV agent is <a href="">Emily Hayward-Whitlock</a> at The Artists'
            Partnership.
          </p>
          <p className="text-center mb-3">Say hello on social media</p>
          <div className="text-white flex justify-center text-[24px] items-center gap-3">
            <Link
              to="https://www.facebook.com/share/16H5Kn7dHk/"
              className="bg-[#a72024] p-1.5"
            >
              <FaFacebookF className=" cursor-pointer" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/linda-somiari-stewart-858556150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="bg-[#a72024] p-1.5"
            >
              <FaLinkedinIn className=" cursor-pointer" />
            </Link>
            <Link
              to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw=="
              className="bg-[#a72024] p-1.5"
            >
              <FaInstagram className=" cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
