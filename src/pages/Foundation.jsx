import Contact from "../components/Contact"; // Assuming src/components/Contact.jsx
import Footer from "../components/Footer"; // Assuming src/components/Footer.jsx
import Header from "../components/Headers"; // Assuming src/components/Headers.jsx
import Carousel from "../components/Carousel"; // Assuming src/components/Carousel.jsx
import bookImage from "../assets/book.webp"; // Assuming src/assets/book.webp
import AboutFdn from "../components/AboutFdn";
import Img from "../assets/values.png"
import Img2 from "../assets/healing.png"
import Img3 from "../assets/source.png";
import Img4 from "../assets/revive.png"
import Img5 from "../assets/modern.png"

function Foundation() {
  // Gallery images and write-ups
  // const galleryImages = [
  //   {
  //     src: bookImage,
  //     alt: "Gallery 1",
  //     caption: "Distributing books to children in rural communities.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 2",
  //     caption: "Volunteers conducting a health awareness seminar.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 3",
  //     caption: "Women participating in our skill development workshop.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 4",
  //     caption: "Community members at a clean water project site.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 5",
  //     caption:
  //       "Children enjoying new learning materials provided by the foundation.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 6",
  //     caption: "Medical professionals offering free checkups during outreach.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 7",
  //     caption: "Foundation team collaborating with local leaders.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 8",
  //     caption: "Celebrating International Women’s Day with beneficiaries.",
  //   },
  //   {
  //     src: bookImage,
  //     alt: "Gallery 9",
  //     caption: "Volunteers planting trees for a greener community.",
  //   },
  // ];

  return (
    <div>
      <Header />
      <div className="bg-[#262626] min-h-screen">
        {/* Carousel Section */}
        <div className="w-full mb-10">
          <Carousel />
        </div>
        {/* About Section */}
        <AboutFdn />
        {/* Activities Section */}
        <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Grout Foundation Response
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Passing on Values Through Folktales",
                  imageAlt: Img,
                  description:
                    "Teaching African etiquette, wisdom, and moral values using culturally rich folktales.",
                },
                {
                  title: "Creating Healing Spaces",
                  imageAlt: Img2,
                  description:
                    "Establishing safe, culturally-rooted environments for trauma-affected children and youth to process pain and rediscover hope.",
                },
                {
                  title: "Training Modern Griots",
                  imageAlt: Img5,
                  description:
                    "Equipping a new generation of youth mentors and cultural guides to carry the sacred responsibility of storytelling and identity restoration.",
                },
                {
                  title: "Producing Storytelling Resources",
                  imageAlt: Img3,
                  description:
                    "Developing powerful print and digital tools—books, animations, audio, and curriculum—that preserve and spread African stories.",
                },
                {
                  title: "Reviving Dignity & Discipline",
                  imageAlt: Img4,
                  description:
                    "Reintroducing the ancestral code of honor, respect, and self-restraint as a compass for today's youth.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-sm mb-2 mt-1.5 shadow flex flex-col items-center"
                >
                  <img
                    src={card.imageAlt}
                    alt={bookImage}
                    className="w-full h-40 object-center rounded-t-sm mb-3"
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
        {/* <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Gallery Of Our Foundation
              </h2>
            </div>

            <div className="flex flex-col gap-6 mb-8">

              <div className="flex flex-col gap-6 items-center sm:flex-row sm:gap-0 sm:justify-center">
                <div className="flex flex-col gap-6">
                  {galleryImages.slice(0, 2).map((img) => (
                    <div key={img.alt} className="flex flex-col items-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full max-w-xs h-48 object-cover rounded-md shadow-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-6 ml-0 sm:ml-6">
                  {galleryImages.slice(2, 5).map((img) => (
                    <div key={img.alt} className="flex flex-col items-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full max-w-xs h-48 object-cover rounded-md shadow-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col gap-6 ml-0 sm:ml-6">
                  {galleryImages.slice(5, 9).map((img) => (
                    <div key={img.alt} className="flex flex-col items-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full max-w-xs h-48 object-cover rounded-md shadow-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Foundation;
