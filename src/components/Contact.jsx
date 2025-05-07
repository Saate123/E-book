import React, { useRef, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_27fbrvj",
        "template_amzz8ak",
        form.current,
        "bYP_o4Ly5gn1Uy9zu"
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSubmitted(true);
        },
        (error) => {
          setIsLoading(false);
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center py-16 px-4 sm:px-8 md:px-16 bg-[#080808] gap-8">
      {/* Readers Club Section */}
      <div className="bg-[#202020] w-full lg:w-[550px] p-6 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold p-3 mb-6 bg-[#A72024]">
          Join my Readers' Club
        </h2>
        <p className="text-base md:text-lg leading-8 mb-6">
          Join my Readers Club to receive a FREE short stories, plus news of
          giveaways, book recommendations, writing tips and more.
        </p>

        {isSubmitted ? (
          <div className="bg-[#202020] p-6 rounded-md text-center shadow-md">
            <p className="text-lg text-white">
              Thanks for joining me!,Look out for the email asking you to confirm
              your address.
            </p>
          </div>
        ) : (
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="first-name"
              className="w-full h-12 bg-[#323131] pl-5 rounded-sm"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full h-12 bg-[#323131] pl-5 rounded-sm"
            />
            <button
              type="submit"
              className="w-full text-center text-white bg-[#a72024] h-12 text-lg"
            >
              {isLoading ? (
                <span className="animate-pulse tracking-widest">...</span>
              ) : (
                "Join"
              )}
            </button>
          </form>
        )}
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
            <Link
              to="mailto: hello@linda-x.com"
              className="text-[#a72024] hover:underline"
            >
              hello@linda-x.com
            </Link>{" "}
            or contact me on social media below.
          </p>
          <p>
            For events and publicity contact me directly:{" "}
            <Link
              to="mailto:booklinda@linda-x.com"
              className="text-[#a72024] hover:underline"
            >
              booklinda@linda-x.com.
            </Link>
          </p>
          <p className="text-center font-semibold">Say hello on social media</p>
          <div className="flex justify-center gap-4 text-2xl">
            <Link
              to="https://www.facebook.com/share/16H5Kn7dHk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a72024] p-2 rounded-full"
            >
              <FaFacebookF className="cursor-pointer" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/linda-somiari-stewart-858556150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a72024] p-2 rounded-full"
            >
              <FaLinkedinIn className="cursor-pointer" />
            </Link>
            <Link
              to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a72024] p-2 rounded-full"
            >
              <FaInstagram className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
