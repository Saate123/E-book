import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon, // Import icons for convenience
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function StoryPopup() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the story ID from the URL parameters
  const [story, setStory] = useState(null); // State to hold the fetched single story
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // --- Fetch the single story from Supabase ---
  useEffect(() => {
    const fetchStory = async () => {
      if (!id) {
        // Ensure id exists before attempting to fetch
        setError("No story ID provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from("stories")
          .select("title, image_url, content") // Fetch only title, image_url, and content
          .eq("id", id) // Filter by the story ID from the URL
          .single(); // Expect only one record

        if (fetchError) {
          throw fetchError;
        }

        if (data) {
          setStory(data);
        } else {
          setStory(null); // Story not found
        }
      } catch (err) {
        console.error("Error fetching single story:", err);
        setError("Failed to load story details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]); // Re-run effect if the 'id' parameter changes

  // --- Handle Loading, Error, and Story Not Found States ---
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <p className="text-xl">Loading story...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div>
          <p className="text-red-500 text-xl">Error: {error}</p>
          <button
            className="bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div>
          <p className="text-xl">Story not found.</p>
          <button
            className="bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const storyShareUrl = `https://linda-x.com/#/story/${id}`;
  const shareTitle = `Read "${story.title}" by Linda on My Ebook Site!`;
  const shareDescription = story?.content?.slice(0, 100) + (story?.content?.length > 100 ? "..." : "");

  // --- Main Render for Displaying the Story ---
  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl p-6 mt-8 mb-8 animate-fade-in relative">
        {/* Back button in top-left */}
        <Link to="/">
          <button className="absolute bottom-0 right-0 lg:-left-26 text-white w-[100px] hover:text-blue-700 font-semibold flex items-center gap-1 p-3 bg-[#E02B20] ">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back
          </button>
        </Link>

        {/* Story image */}
        {story.image_url && (
          <img
            src={story.image_url}
            alt={story.title}
            className="w-full max-h-80 object-cover rounded-md mb-6"
          />
        )}

        <h1 className="font-serif text-2xl md:text-3xl text-gray-900 mb-1">
          {story.title}
        </h1>

        {/* Story content */}
        <div
          id="popup-story-content"
          className="text-gray-800 whitespace-pre-line leading-relaxed"
          style={{
            fontSize: "1.1rem",
          }}
        >
          {story.content}
        </div>

        {/* Share write-up */}
        <div className="mt-6 mb-2 text-[#E02B20] font-semibold text-base">
          Enjoyed this story? Share it with your friends!
        </div>

        <div className="flex gap-2 mt-2.5">
          <FacebookShareButton
            url={storyShareUrl}
            title={shareTitle}
            summary={shareDescription}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={storyShareUrl}
            title={shareTitle}
            summary={shareDescription}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={storyShareUrl}
            title={shareTitle}
            summary={shareDescription}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={storyShareUrl}
            title={shareTitle}
            summary={shareDescription}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
}

export default StoryPopup;
