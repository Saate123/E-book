import React, { useState } from "react";
import Img from "../assets/WOYINGI.jpeg.jpg";
import Img2 from "../assets/TARI.jpeg.jpg";
import { useParams } from "react-router-dom";
import Header from "../components/Headers";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import backgroundImage from "../assets/background.jpg";
import backgroundImage2 from "../assets/background2.webp";
import Img3 from "../assets/Piano.webp";
import Img4 from "../assets/praise-bits-2.webp";
import { X } from "lucide-react"; // Importing the X icon from react-feather

const bookDetails = {
  "woyingi-god-is-a-woman": {
    title: "Woyingi: God is a Woman",
    description: (
      <>
        ‘Casts its own powerful brand of dark magic’ – The Mirror A dark tale of
        folklore and disappearances on the Isle of Skye. Audrey Hart travels to
        Skye and to the mansion of a reclusive folklorist to collect the folk
        and fairy tales of the local people.
        <br /> It is 1857, the Highland Clearances have left devastation and
        poverty, and the crofters are suspicious and hostile, claiming they no
        longer know their stories. Then Audrey discovers the body of a young
        girl washed up in the bay beneath Lanerly, and the crofters reveal that
        it is only a matter of weeks since another girl disappeared.
        <br /> They believe the girls are victims of the restless dead: spirits
        who take the form of birds. At first, Audrey suspects that the girls are
        being abducted, but as events accumulate she begins to wonder if
        something else is at work. Something which may be linked to the death of
        her own mother, many years before.
      </>
    ),
    image: Img,
    para: (
      <>
        The Book of Secrets is a gripping historical thriller where the reader’s
        dilemma is that we are rooting for both sides, the investigator and the
        women he is hunting. It is a hugely entertaining read but also an
        important one in an era when women’s rights are being called into
        question. Magnificent.’ LIZ NUGENT <br /> ‘An exceptional novel, which
        immerses you in the mysterious, gothic world of seventeenth century
        Italy, yet also remains deeply relevant for our times. I was completely
        gripped right up to its devastating conclusion which is both profoundly
        affecting and masterfully drawn. Moving, compelling, and a stunning
        evocation of Baroque Rome, this is Anna Mazzola’s finest work yet’.
        ELODIE HARPER
      </>
    ),
    bg: backgroundImage,
    picture: Img3,
    scribe: "Praise for Woyingi: God is a Woman",
    link: "https://docs.google.com/document/d/1w-e5com2ytLpSq62yGDoJmZLm9GgOrpZqqaMFu1doZg/edit?usp=sharing",
  },
  "tari-ere-the-picky-virgin": {
    title: "Tari-Ere: The Picky Virgin",
    description: (
      <>
        ‘Casts its own powerful brand of dark magic’ – The Mirror A dark tale of
        folklore and disappearances on the Isle of Skye. Audrey Hart travels to
        Skye and to the mansion of a reclusive folklorist to collect the folk
        and fairy tales of the local people. <br />
        It is 1857, the Highland Clearances have left devastation and poverty,
        and the crofters are suspicious and hostile, claiming they no longer
        know their stories. Then Audrey discovers the body of a young girl
        washed up in the bay beneath Lanerly, and the crofters reveal that it is
        only a matter of weeks since another girl disappeared.
        <br /> They believe the girls are victims of the restless dead: spirits
        who take the form of birds. At first, Audrey suspects that the girls are
        being abducted, but as events accumulate she begins to wonder if
        something else is at work. Something which may be linked to the death of
        her own mother, many years before.
      </>
    ),
    image: Img2,
    para: (
      <>
        The Book of Secrets is a gripping historical thriller where the reader’s
        dilemma is that we are rooting for both sides, the investigator and the
        women he is hunting. It is a hugely entertaining read but also an
        important one in an era when women’s rights are being called into
        question. Magnificent.’ LIZ NUGENT <br /> ‘An exceptional novel, which
        immerses you in the mysterious, gothic world of seventeenth century
        Italy, yet also remains deeply relevant for our times. I was completely
        gripped right up to its devastating conclusion which is both profoundly
        affecting and masterfully drawn. Moving, compelling, and a stunning
        evocation of Baroque Rome, this is Anna Mazzola’s finest work yet’.
        ELODIE HARPER
      </>
    ),
    bg: backgroundImage2,
    scribe: "Praise for Tari-Ere: The Picky Virgin",
    picture: Img4,
    link: "https://docs.google.com/document/d/1FM2U1JiqMEdgFQtdNB2umZHgOKp34UKVPPiBinDfIGU/edit?usp=sharing",
  },
};

const Book = () => {
  const { bookId } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

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
        <section className="relative z-10 flex flex-col lg:flex-row items-start gap-8 px-4 lg:px-12 py-10">
          <div className="text-white w-full lg:w-3/5 rounded-md mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 bg-[#A72024] p-4">
              {book.title}
            </h2>

            <div className="text-lg leading-8 space-y-4">
              <p>{book.description}</p>
            </div>

            {/* Button aligned to the right */}
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
                className="fixed inset-0 z-[1000] flex items-center justify-center px-4 overflow-hidden"
                style={{ position: "fixed", overflow: "hidden" }}
              >
                <div className="rounded-lg p-6 w-full text-center">
                  <div className="flex justify-end mb-10">
                    <X
                      className="text-2xl text-white"
                      onClick={() => setShowPopup(false)}
                    />
                  </div>
                  <div className="flex justify-around bg-[#262626] py-7 mb-4">
                    <button
                      className="bg-[#eb2e34] text-white px-4 py-2 rounded w-[110px]"
                      onClick={() => {
                        setShowPopup(false);
                        setShowComingSoon(true);
                      }}
                    >
                      Amazon
                    </button>
                    <button
                      className="bg-[#eb2e34] text-white px-4 py-2 rounded w-[110px]"
                      onClick={() => {
                        setShowPopup(false);
                        setShowComingSoon(true);
                      }}
                    >
                      Selar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Coming Soon Modal */}
            {showComingSoon && (
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
            )}
          </div>

          <div className="w-full lg:w-[300px] flex-shrink-0 lg:pr-4">
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

        <section className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-2 px-4 py-10">
          {/* Image with background box */}
          <div className="flex justify-center w-full lg:w-1/3">
            <div className="bg-[#262626] p-4 rounded-md shadow-lg">
              <a href={book.link}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-40 sm:w-48 md:w-56 lg:w-40 xl:w-40 rounded shadow-md object-contain"
                />
              </a>
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
      </div>
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
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl">
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
