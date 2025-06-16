import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Ensure this path is correct
import { Helmet } from "react-helmet-async"; // <-- IMPORT HELMET


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
        setError("No story ID provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // IMPORTANT: Fetch description and subtitle from Supabase for meta tags
        const { data, error: fetchError } = await supabase
          .from("stories")
          .select("title, subtitle, description, image_url, content")
          .eq("id", id)
          .single();

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
            onClick={() => navigate(-1)}
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
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  const pageTitle = `${story.title} - Short Stories by Linda`;
  const pageDescription = story.description
    ? story.description.substring(0, 160) +
      (story.description.length > 160 ? "..." : "")
    : story.content.substring(0, 160) +
      (story.content.length > 160 ? "..." : ""); // Fallback to content if description is empty
  const pageImage = story.image_url;
  const pageUrl = `${window.location.origin}/story/${story.id}`;

  // --- Main Render for Displaying the Story ---
  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-4">
      {/* ===== CRUCIAL PART FOR SOCIAL SHARING PREVIEWS ===== */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph / Facebook / LinkedIn Meta Tags */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />{" "}
        {/* Use 'article' for individual stories */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />{" "}
        {/* THIS IS THE IMAGE FOR THE PREVIEW */}
        <meta property="og:site_name" content="My Ebook Site" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        {/* 'summary_large_image' for a prominent image */}
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6 mt-8 mb-8 animate-fade-in relative">
        {/* Back button positioning for better usability */}
        <Link to="/" className="absolute -top-12 left-0 sm:left-4">
          <button className="text-white w-[100px] hover:bg-gray-700 font-semibold flex items-center gap-1 p-3 bg-[#E02B20] rounded-md transition duration-300">
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
        {story.subtitle && (
          <p className="italic text-gray-500 mb-3 text-lg">{story.subtitle}</p>
        )}

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
      </div>
    </div>
  );
}

export default StoryPopup;
