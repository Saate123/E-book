import React, { useState } from "react";
import Img from "../assets/Tamara.jpg";
import Img2 from "../assets/tariere.jpg";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Headers";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import backgroundImage from "../assets/background.jpg";
import backgroundImage2 from "../assets/background2.webp";
import Img3 from "../assets/Piano.webp";
import Img5 from "../assets/The Square of Lost Songs.jpg";
import Img4 from "../assets/praise-bits-2.webp";
import { X } from "lucide-react"; // Importing the X icon from react-feather

const bookDetails = {
  "woyingi-god-is-a-woman": {
    title: "Tamara: The Gender of God",
    description: [
      "Long before we saw ourselves here, Tamara ruled the multiverse. But history remembers only what power permits. This is the Ijaw mythology of the one the world unmade, the name they silenced, the gender they rewrote.",
      "A bold retelling rooted in ancestral memory and mythic resistance, Tamara: The Gender of God reclaims the forgotten feminine at the heart of creation and dares to ask: What if God is She?",
    ],
    image: Img,
    para: (
      <dl>
        <div>
          <dd>
            “Tamara is a powerful reawakening. Linda has masterfully brought to
            light a sacred truth that has long been buried—the divine feminine.
            It’s deeply spiritual, intellectually engaging, and emotionally
            healing.”
          </dd>
          <dt className="font-semibold">Dr. Amaka O.</dt>
        </div>
        <div>
          <dd>
            “This book gave me chills in the best way. Tamara invites you to
            question, reflect, and reconnect with your spiritual roots. It’s not
            just a book—it’s an awakening wrapped in story.”
          </dd>
          <dt className="font-semibold">Ebiye D.</dt>
        </div>
      </dl>
    ),
    bg: backgroundImage,
    picture: Img3,
    scribe: "Praise for Tamara: The Gender of God",
    link: "https://docs.google.com/document/d/1w-e5com2ytLpSq62yGDoJmZLm9GgOrpZqqaMFu1doZg/edit?usp=sharing",
  },
  "tari-ere-the-picky-virgin": {
    title: "She Who Loved A Lie",
    description: [
      "An Ijaw Folktale About Love, Loss and Return. She Who Loved a Lie: An Ijaw folktale of love, loss, and return",
      "Tari-Ere was a proud virgin-beautiful, bold, and unimpressed by the many suitors who sought her hand. But when a mysterious stranger arrived, speaking sweet words and cloaked in charm, her guarded heart gave way.",
      "She had no idea she was marrying a water god in disguise.",
      "Swept into the oceanic realm, Tari-Ere wept as she discovered the truth. Trapped between worlds, stripped of all she knew, she found the strength to endure and by a twist of fate, was returned to her people.",
      "Now wiser and humbled, Tari-Ere listens to the wisdom of her parents and opens her heart anew. This time, she chooses with clarity.",
      "She Who Loved a Lie is a timeless tale from the Niger Delta reminding young hearts that not all that glitters is true love, and that sometimes the path to joy begins with a painful awakening.",
    ],
    image: Img2,
    para: (
      <dl>
        <div>
          <dd>
            “She who loved a lie is a stunning blend of folklore and life
            lessons. It’s beautifully written, rich in culture, and full of
            heart. I laughed, I held my breath, and I learned.”
          </dd>
          <dt className="font-semibold">Koko Briggs</dt>
        </div>
        <div>
          <dd>
            “An enchanting story that reminds us how powerful the wisdom of our
            ancestors can be. I loved how Linda wove magic, tradition, and
            emotion into every chapter.”
          </dd>
          <dt className="font-semibold">Tamara Owei</dt>
        </div>
      </dl>
    ),
    bg: backgroundImage2,
    scribe: "Praise for Tari-Ere: The Picky Virgin",
    picture: Img4,
    link: "https://docs.google.com/document/d/1FM2U1JiqMEdgFQtdNB2umZHgOKp34UKVPPiBinDfIGU/edit?usp=sharing",
  },
  "the-square-of-lost-sons": {
    title: "The Square of Lost Sons: A Modern Griot Tales",
    description: [
      "In a world that traded wisdom for wireless, and firelight for false light, the griot returns…",
      "The Square of Lost Sons is a soul-stirring collection of modern folktales that echo with the wisdom of ancient drums and the defiance of forgotten tongues. From wind-shamed princes and dancing daughters who could not stop, to eagles who dreamed beyond the clouds and spiders repaying old debts, Linda Somiari-Stewart revives the griot’s sacred calling: to remember, to rebuke, to restore.",
      "Each tale is a fire lit against forgetfulness, a song for the children of the diaspora and dreamers who long for rootedness. Here, ancestral spirits speak not from graves but from the spaces we once abandoned— courtyards, firesides, names, and truths.",
      "If you have ever longed to sit at the feet of elders or wondered what the wind forgot to tell you, this book will bring you home.",
    ],
    image: Img5,
    para: (
      <dl>
        <div>
          <dd>
            “The square of lost songs is a powerful reawakening. Linda has
            masterfully brought to light a sacred truth that has long been
            buried—the divine feminine. It’s deeply spiritual, intellectually
            engaging, and emotionally healing.”
          </dd>
          <dt className="font-semibold">Dr. Amaka O.</dt>
        </div>
        <div>
          <dd>
            “This book gave me chills in the best way. Tamara invites you to
            question, reflect, and reconnect with your spiritual roots. It’s not
            just a book—it’s an awakening wrapped in story.”
          </dd>
          <dt className="font-semibold">Ebiye D.</dt>
        </div>
      </dl>
    ),
    bg: backgroundImage,
    picture: Img3,
    scribe: "Praise for Tamara: The Gender of God",
    link: "",
  },
};

const Book = () => {
  const { bookId } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  const book = bookDetails[bookId];

  if (!book) {
    return (
      <div className="text-center text-black py-20">
        <h2 className="text-3xl">Book Not Found</h2>
        <p className="mt-4">The book you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-16"
        style={{ backgroundImage: `url(${book.bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 pr-4 bg-[#080808] opacity-90 z-0"></div>
        <section className="relative z-10 flex flex-col lg:flex-row items-start gap-8 px-4 py-10">
          <div className="text-white w-full lg:w-3/5 rounded-md mx-auto">
            <h2 className="text-3xl lg:text-3xl text-center font-semibold mb-6 bg-[#A72024] p-4">
              {book.title}
            </h2>

            <ul className="list-none pl-6 text-lg sm:text-xl">
              {Array.isArray(book.description) ? (
                book.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>{book.description}</li>
              )}
            </ul>

            <div className="hidden md:flex mt-6 justify-end">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-[#048152] text-white px-6 py-3 hover:bg-transparent hover:border-2 hover:border-[#A72024] hover:text-[#A72024] transition"
              >
                ORDER NOW
              </button>
            </div>
            {showPopup && (
              <div
                className="fixed inset-0 z-[1000] flex items-center justify-between px-4 overflow-hidden"
                style={{ position: "fixed", overflow: "hidden" }}
              >
                <div className="rounded-lg p-6 w-full text-center">
                  <div className="flex justify-end mb-10">
                    <X
                      size={40}
                      className="text-2xl text-white"
                      onClick={() => setShowPopup(false)}
                    />
                  </div>
                  <div className="grid gap-4 bg-[#262626] py-7 mb-4 lg:grid-cols-2">
                    <Link to="https://www.kobo.com/gb/en/search?query=linda+somiari+stewart&ac=1&acp=linda+somiari+stewart&ac.author=linda+somiari+stewart&sort=Temperature&fclanguages=en">
                      <button className="bg-[#eb2e34] text-white px-4 py-2 rounded w-[200px] lg:w-[150px] mx-auto">
                        Kobo.com
                      </button>
                    </Link>
                    {/* <button
                      className="bg-[#eb2e34] text-white px-4 py-2 rounded w-[200px] lg:w-[150px] mx-auto"
                      onClick={() => {
                        setShowPopup(false);
                        setShowComingSoon(true);
                      }}
                    >
                      Selar
                    </button> */}
                    <Link to="https://books.by/linda-somiari-stewart#she-who-loved-a-lie">
                      <button className="bg-[#eb2e34] text-white  px-4 py-2 rounded w-[200px] lg:w-[150px] mx-auto">
                        Book.by
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Coming Soon Modal */}
            {/* {showComingSoon && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
                <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
                  <h2 className="text-lg font-semibold text-[#A72024] mb-4">
                    Coming Soon on Amazon!
                  </h2>
                  <p className="mb-6 text-gray-700">
                    Stay tuned for availability.
                  </p>
                  <button
                    className="bg-[#A72024] text-white px-4 py-2 rounded hover:bg-[#8e1a1e] transition"
                    onClick={() => setShowComingSoon(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )} */}
          </div>

          <div className="w-full lg:w-[350px] flex-shrink-0 lg:mr-14">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-md w-full shadow-lg"
            />
          </div>

          <div className="block md:hidden mt-6 order-3 w-full text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="w-[180px] bg-[#048152] hover:bg-transparent hover:border hover:border-[#A72024] text-black hover:text-[#A72024] px-5 py-3 text-sm transition-all duration-300"
            >
              ORDER NOW
            </button>
          </div>
        </section>
      </div>

      <section className=" w-full flex flex-col bg-[#080808] lg:flex-row items-center gap-2 px-4 py-10">
        {/* Image with background box */}
        <div className="flex justify-center w-full lg:w-1/3">
          <div className="bg-[#262626] p-4 rounded-md shadow-lg border-2 border-[#f9f9f9]">
            <Link to={book.link}>
              <img
                src={book.image}
                alt={book.title}
                className="w-40 sm:w-48 md:w-56 lg:w-40 xl:w-40 rounded shadow-md object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="bg-[#262626] text-white text-center p-10 rounded-md shadow-md text-sm sm:text-base">
            AUDIO EXTRACT COMING SOON.....
          </div>
          <div className="bg-[#262626] text-white text-left p-3 rounded-md shadow-md text-sm sm:text-base">
            Read the first chapter free (click the image)
          </div>
        </div>
      </section>

      <section
        className="relative w-full flex flex-col gap-8 py-10 items-center"
        style={{
          backgroundImage: `url(${book.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>

        {/* Image and Scribe */}
        <div className="relative z-10 w-full flex flex-col items-center gap-6">
          <div className="bg-black text-white p-4 rounded-md w-full flex flex-col items-center shadow-lg">
            <img
              src={book.picture}
              alt="Book"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain rounded"
            />
            <h1 className="mt-4 text-lg sm:text-xl md:text-3xl font-semibold text-[#A72024] text-center">
              {book.scribe}
            </h1>
          </div>

          {/* Centered Paragraph */}
          <div className="flex justify-center items-center w-full">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl p-1.5">
              {book.para}
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Book;
