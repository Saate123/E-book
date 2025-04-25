import React from "react";
import Img from "../assets/WOYINGI.jpeg.jpg";
import Img2 from "../assets/TARI.jpeg.jpg";
import { useParams } from "react-router-dom";
import Header from "../components/Headers";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const bookDetails = {
  "book-of-secrets": {
    title: "Woyingi: God is a Woman",
    description: (
      <>
        ‘Casts its own powerful brand of dark magic’ – The Mirror A dark tale of
        folklore and disappearances on the Isle of Skye. Audrey Hart travels to
        Skye and to the mansion of a reclusive folklorist to collect the folk
        and fairy tales of the local people. It is 1857, the Highland Clearances
        have left devastation and poverty, and the crofters are suspicious and
        hostile, claiming they no longer know their stories. Then Audrey
        discovers the body of a young girl washed up in the bay beneath Lanerly,
        and the crofters reveal that it is only a matter of weeks since another
        girl disappeared. They believe the girls are victims of the restless
        dead: spirits who take the form of birds. At first, Audrey suspects that
        the girls are being abducted, but as events accumulate she begins to
        wonder if something else is at work. Something which may be linked to
        the death of her own mother, many years before.
      </>
    ),
    image: Img,
    para: (
      <>
        The Book of Secrets is a gripping historical thriller where the reader’s
        dilemma is that we are rooting for both sides, the investigator and the
        women he is hunting. It is a hugely entertaining read but also an
        important one in an era when women’s rights are being called into
        question. Magnificent.’ LIZ NUGENT ‘An exceptional novel, which immerses
        you in the mysterious, gothic world of seventeenth century Italy, yet
        also remains deeply relevant for our times. I was completely gripped
        right up to its devastating conclusion which is both profoundly
        affecting and masterfully drawn. Moving, compelling, and a stunning
        evocation of Baroque Rome, this is Anna Mazzola’s finest work yet’.
        ELODIE HARPER
      </>
    ),
  },
  "house-of-whispers": {
    title: "Tari-Ere: The Picky Virgin",
    description: (
      <>
        ‘Casts its own powerful brand of dark magic’ – The Mirror A dark tale of
        folklore and disappearances on the Isle of Skye. Audrey Hart travels to
        Skye and to the mansion of a reclusive folklorist to collect the folk
        and fairy tales of the local people. It is 1857, the Highland Clearances
        have left devastation and poverty, and the crofters are suspicious and
        hostile, claiming they no longer know their stories. Then Audrey
        discovers the body of a young girl washed up in the bay beneath Lanerly,
        and the crofters reveal that it is only a matter of weeks since another
        girl disappeared. They believe the girls are victims of the restless
        dead: spirits who take the form of birds. At first, Audrey suspects that
        the girls are being abducted, but as events accumulate she begins to
        wonder if something else is at work. Something which may be linked to
        the death of her own mother, many years before.
      </>
    ),
    image: Img2,
    para: (
      <>
        The Book of Secrets is a gripping historical thriller where the reader’s
        dilemma is that we are rooting for both sides, the investigator and the
        women he is hunting. It is a hugely entertaining read but also an
        important one in an era when women’s rights are being called into
        question. Magnificent.’ LIZ NUGENT ‘An exceptional novel, which immerses
        you in the mysterious, gothic world of seventeenth century Italy, yet
        also remains deeply relevant for our times. I was completely gripped
        right up to its devastating conclusion which is both profoundly
        affecting and masterfully drawn. Moving, compelling, and a stunning
        evocation of Baroque Rome, this is Anna Mazzola’s finest work yet’.
        ELODIE HARPER
      </>
    ),
  },
};

const Book = () => {
  const { bookId } = useParams();
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
      <div className="max-w-7xl mx-auto py-10 px-4 text-white">
        <section className="flex flex-col lg:flex-row items-start gap-8">
          <div className="text-white bg-[#202020] w-full p-6 rounded-md">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 bg-[#A72024] p-4">
              {book.title}
            </h2>
            <div className="text-lg leading-8 space-y-4">
              <p>{book.description}</p>
              <p>{book.para}</p>
            </div>
          </div>
          <div className="w-full lg:w-[300px] flex-shrink-0">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-md w-full shadow-lg"
            />
          </div>
        </section>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Book;
