import Contact from "../components/Contact"; // Assuming src/components/Contact.jsx
import Footer from "../components/Footer"; // Assuming src/components/Footer.jsx
import Header from "../components/Headers"; // Assuming src/components/Headers.jsx
import Carousel from "../components/Carousel"; // Assuming src/components/Carousel.jsx
import bookImage from "../assets/book.webp"; // Assuming src/assets/book.webp

function Foundation() {
  // Gallery images and write-ups
  const galleryImages = [
    { src: bookImage, alt: "Gallery 1", caption: "Distributing books to children in rural communities." },
    { src: bookImage, alt: "Gallery 2", caption: "Volunteers conducting a health awareness seminar." },
    { src: bookImage, alt: "Gallery 3", caption: "Women participating in our skill development workshop." },
    { src: bookImage, alt: "Gallery 4", caption: "Community members at a clean water project site." },
    { src: bookImage, alt: "Gallery 5", caption: "Children enjoying new learning materials provided by the foundation." },
    { src: bookImage, alt: "Gallery 6", caption: "Medical professionals offering free checkups during outreach." },
    { src: bookImage, alt: "Gallery 7", caption: "Foundation team collaborating with local leaders." },
    { src: bookImage, alt: "Gallery 8", caption: "Celebrating International Women’s Day with beneficiaries." },
    { src: bookImage, alt: "Gallery 9", caption: "Volunteers planting trees for a greener community." },
  ];

  return (
    <div>
      <Header />
      <div className="bg-[#262626] min-h-screen">
        {/* Carousel Section */}
        <div className="w-full mb-10">
          <Carousel />
        </div>
        {/* About Section */}
        <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                About the Foundation
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full gap-8 mt-4">
              <div className="flex-1 max-w-full md:max-w-[48%] lg:max-w-[50%] text-center md:text-left">
                <p className="text-white leading-relaxed text-base sm:text-lg">
                  Our foundation is dedicated to empowering communities through
                  education, health, and social initiatives. We strive to make a
                  positive impact by supporting underprivileged groups and
                  fostering sustainable development. We believe in creating a
                  lasting legacy by providing resources and opportunities that
                  uplift individuals and strengthen the fabric of society.
                </p>
              </div>
              <div className="flex-1 max-w-full md:max-w-[48%] lg:max-w-[40%] flex justify-center md:justify-end">
                <img
                  src={bookImage}
                  alt="Book"
                  className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Activities Section */}
        <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Grout Foundation Response
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Education Initiative",
                  imageAlt: "Education Initiative",
                  description:
                    "Providing scholarships and learning materials to underprivileged children, fostering a brighter future.",
                },
                {
                  title: "Health Outreach",
                  imageAlt: "Health Outreach",
                  description:
                    "Organizing free medical camps and awareness drives to improve community health and well-being.",
                },
                {
                  title: "Women Empowerment",
                  imageAlt: "Women Empowerment",
                  description:
                    "Supporting women through skill development programs and entrepreneurship opportunities.",
                },
                {
                  title: "Community Development",
                  imageAlt: "Community Development",
                  description:
                    "Building sustainable infrastructure and promoting social initiatives for holistic growth.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-sm mb-2 mt-1.5 shadow flex flex-col items-center"
                >
                  <img
                    src={bookImage}
                    alt={card.imageAlt}
                    className="w-full h-35 object-cover rounded-t-sm mb-3"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#A72024] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-sm text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Gallery Of Our Foundation
              </h2>
            </div>
            {/* Gallery Section */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex flex-col gap-6 items-center sm:flex-row sm:gap-0 sm:justify-center">
                {/* First column: 2 images */}
                <div className="flex flex-col gap-6">
                  {galleryImages.slice(0, 2).map((img, idx) => (
                    <div key={img.alt} className="flex flex-col items-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full max-w-xs h-48 object-cover rounded-md shadow-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center">{img.caption}</p>
                    </div>
                  ))}
                </div>
                {/* Second column: 3 images */}
                <div className="flex flex-col gap-6 ml-0 sm:ml-6">
                  {galleryImages.slice(2, 5).map((img, idx) => (
                    <div key={img.alt} className="flex flex-col items-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full max-w-xs h-48 object-cover rounded-md shadow-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center">{img.caption}</p>
                    </div>
                  ))}
                </div>
                {/* Third column: 4 images */}
                <div className="flex flex-col gap-6 ml-0 sm:ml-6">
                  {galleryImages.slice(5, 9).map((img, idx) => (
                    <div key={img.alt} className="flex flex-col items-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full max-w-xs h-48 object-cover rounded-md shadow-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Foundation;
