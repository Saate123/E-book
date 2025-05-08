import React, { useRef, useState } from "react";
import Img from "../assets/FB_IMG_1743869048255.jpg";
import BackgroundImg from "../assets/background3.jpg";
import emailjs from "@emailjs/browser";

function Newsletter() {
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
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white py-20 px-10">
        <div className="flex justify-center md:justify-end lg:mr-15 ">
          <img
            src={Img}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm shadow-lg"
          />
        </div>
        <div className="py-5">
          <h3 className="text-3xl sm:text-4xl text-[#D7FF00] md:text-5xl leading-tight mb-10">
            Join my Readers' Club
          </h3>
          <p className="text-lg mb-10">
            Join my Readers' Club to receive a FREE short stories, plus news of
            giveaways, book recommendations, writing tips and more.
          </p>
          {isSubmitted ? (
            <div className="bg-[#202020] p-6 rounded-md text-center shadow-md">
              <p className="text-lg text-white">
                Thanks for joining me! Look out for the email asking you to
                confirm your address.
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
      </div>
    </div>
  );
}

export default Newsletter;
