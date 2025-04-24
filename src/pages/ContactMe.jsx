import React from "react";
import BackgroundImg from "../assets/about-bg.jpg";
import Img from "../assets/FB_IMG_1743869068178.jpg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Header from "../components/Headers";
import Footer from "../components/Footer";

function ContactMe() {
  return (
    <div>
      <Header />

      <div
        className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat px-4 py-16 flex justify-center"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>

        <div className="relative z-10 max-w-6xl w-full space-y-12">
          {/* Section 1: Contact Info */}
          <section className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-[300px] flex-shrink-0">
              <img
                src={Img}
                alt="Contact Anna"
                className="rounded-md w-full shadow-lg"
              />
            </div>

            <div className="text-white bg-[#202020] w-full p-6 rounded-md">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 bg-[#A72024] p-4">
                Contact Me
              </h2>
              <div className="text-lg leading-8 space-y-4">
                <p>
                  If you’d like to reach out, please feel free to email me at{" "}
                  <a
                    href="mailto:hello@linda-x.com"
                    className=" text-[#A72024]"
                  >
                    hello@linda-x.com.
                  </a>{" "}
                  I love hearing from readers, fellow writers, and kindred
                  spirits.
                </p>
                <p>
                  Want to be the first to hear about new releases, exclusive
                  giveaways, inspiring reads, behind-the-scenes writing notes,
                  and literary events?
                </p>
                <p>
                  Join{" "}
                  <span className="text-[#a72024]">
                    *Linda’s Readers Circle*!
                  </span>
                </p>
                <p>
                  I’m also active on{" "}
                  <a
                    href="https://www.facebook.com/share/16H5Kn7dHk/"
                    className=" text-[#A72024]"
                  >
                    Facebook,
                  </a>{" "}
                  <a
                    href="https://www.instagram.com/lindasomiari"
                    className=" text-[#A72024]"
                  >
                    Instagram,
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.linkedin.com/in/linda-somiari-stewart-858556150"
                    className=" text-[#A72024]"
                  >
                    LinkedIn.
                  </a>{" "}
                  Let’s connect!
                </p>
                <p>
                  For event bookings, media appearances, or publicity-related
                  inquiries, kindly email me directly{" "}
                  <a
                    href="mailto:booklinda@linda-x.com "
                    className=" text-[#A72024]"
                  >
                    booklinda@linda-x.com.
                  </a>{" "}
                </p>
              </div>

              <div className="text-center mt-6">
                <p className="mb-3">Say hello on social media</p>
                <div className="flex justify-center gap-4 text-2xl">
                  <a
                    href="https://www.facebook.com/share/16H5Kn7dHk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a72024] p-2 hover:bg-[#87191d] transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/linda-somiari-stewart-858556150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a72024] p-2 hover:bg-[#87191d] transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/lindasomiari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a72024] p-2 hover:bg-[#87191d] transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Reader's Club */}
          <section className=" text-white max-w-4xl mx-auto py-10">
            <h2 className="text-3xl w-full sm:text-4xl md:text-5xl p-3 mb-10 bg-[#A72024] inline-block">
              Join My Reader’s Club
            </h2>
            <form className="space-y-4 bg-[#323131] p-6 ">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-12 bg-white text-black pl-4 rounded-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-12 bg-white text-black pl-4 rounded-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 bg-white text-black pl-4 rounded-sm"
              />
              <button className="w-full h-12 bg-[#a72024] hover:bg-[#87191d] text-white text-lg rounded-sm transition">
                Join
              </button>
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactMe;
