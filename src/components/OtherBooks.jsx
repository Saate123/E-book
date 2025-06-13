import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Ensure this path is correct

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
          throw error; // If Supabase returns an error, throw it
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

  // --- Main Render for Displaying Stories ---
  return (
    <div className="max-w-screen p-10 bg-black relative">
      <h1 className="text-center text-3xl md:text-5xl mb-10 text-[#E02B20]">
        Short Stories By Linda
      </h1>
      <div className="grid gap-8 transition-all duration-300">
        {stories.map((story) => (
          <div
            key={story.id} // Use the unique 'id' from Supabase for React's key prop
            className="flex gap-6 items-start bg-gray-100 rounded-lg shadow-md p-5 relative flex-wrap"
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
              <button
                className=" text-black px-4 py-2 font-semibold hover:bg-[#E02B20] hover:text-white transition"
                // Navigate to a detailed story page using the story's ID
                onClick={() => navigate(`/story/${story.id}`)}
              >
                Read more...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherBooks;
