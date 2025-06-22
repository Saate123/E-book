import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

// Fix: Removed import for 'react-share-social' and imported components from 'react-share'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon, // Import icons for convenience
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"; // IMPORTANT: Ensure 'react-share' is installed: npm install react-share

function OtherBooks() {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]); // State to hold our fetched stories
  const [loading, setLoading] = useState(true); // Tracks if data is still loading
  const [error, setError] = useState(null); // Stores any error messages

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Clear any previous errors

        // Fetch only the necessary preview data from your 'stories' table
        const { data, error } = await supabase
          .from("stories")
          .select("id, title, subtitle, description, image_url"); // Requesting only these columns

        if (error) {
          // If Supabase returns an error, throw it
          // Log the full Supabase error object for better debugging
          console.error("Supabase fetch error:", error);
          throw new Error(
            error.message || "Failed to fetch data from Supabase."
          );
        }

        if (data) {
          setStories(data); // Update state with fetched stories
        }
      } catch (err) {
        console.error("Error fetching stories:", err); // Log the detailed error
        setError("Failed to load stories. Please try again later."); // User-friendly error message
      } finally {
        setLoading(false); // End loading, regardless of success or failure
      }
    };

    fetchStories(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  // --- Conditional Rendering for Loading, Error, and No Stories ---
  if (loading) {
    return (
      <div className="max-w-screen p-10 bg-black relative min-h-screen flex justify-center items-center">
        <p className="text-white text-xl">Loading stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen p-10 bg-black relative min-h-screen flex justify-center items-center">
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className="max-w-screen p-10 bg-black relative min-h-screen flex justify-center items-center">
        <p className="text-white text-xl">
          No stories found yet. Time to write some!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen p-10 bg-black relative">
      <h1 className="text-center text-3xl md:text-5xl mb-10 text-[#E02B20]">
        Short Stories By Linda
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-300">
        {stories.map((story) => {
          const storyShareUrl = `https://linda-x.com/#/story/${story.id}`;
          const shareTitle = `Read "${story.title}" by Linda on My Ebook Site!`; // Customize share title
          const shareDescription = story.description.substring(0, 150) + "..."; // Customize share description

          return (
            <div
              key={story.id} // Use the unique 'id' from Supabase for React's key prop
              className="flex gap-4 items-start bg-gray-100 rounded-lg shadow-md p-3 relative flex-wrap"
            >
              <img
                src={story.image_url} // Use the image_url from Supabase
                alt={story.title}
                className="w-30 h-40 object-cover rounded-md shadow"
              />
              <div className="flex-1">
                <h2 className="m-0 mb-2 font-serif text-xl text-gray-900">
                  {story.title}
                </h2>
                {/* Conditionally render subtitle if it exists */}
                {story.subtitle && (
                  <p className="italic text-gray-500 mb-3">{story.subtitle}</p>
                )}
                <p className="text-gray-700 mb-2">{story.description}</p>
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  {" "}
                  {/* Container for buttons and social share */}
                  <button
                    className="text-black px-2 py-2 font-semibold hover:bg-[#E02B20] hover:text-white transition rounded"
                    onClick={() => navigate(`/story/${story.id}`)}
                  >
                    Read more...
                  </button> 
                  <h5 className="font-bold">OR</h5>
                  {/* Share Buttons */}
                  <div className="flex gap-2 items-center">
                    {" "}
                    {/* Encourage readers to share the book */}
                    <p className="text-sm text-gray-600 mb-1">
                      Share with friends!
                    </p>
                    {/* Social Media Share Buttons */}
                    <FacebookShareButton
                      url={storyShareUrl}
                      title={shareTitle}
                      // For Facebook, 'quote' is usually preferred for text
                      quote={shareTitle}
                      // image_url prop is generally ignored by Facebook for rich previews
                      // Ensure Open Graph meta tags are correctly set on the shared page (StoryPopup.jsx)
                    >
                      <FacebookIcon size={28} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={storyShareUrl}
                      title={shareTitle}
                      // Twitter also relies heavily on Twitter Card meta tags for rich previews
                    >
                      <TwitterIcon size={28} round />
                    </TwitterShareButton>
                    <LinkedinShareButton
                      url={storyShareUrl}
                      title={shareTitle}
                      summary={shareDescription}
                      // LinkedIn also relies on Open Graph meta tags for rich previews
                    >
                      <LinkedinIcon size={28} round />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                      url={storyShareUrl}
                      title={shareTitle}
                      // Whatsapp's preview behavior can vary, often simpler than FB/LI
                    >
                      <WhatsappIcon size={28} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OtherBooks;
