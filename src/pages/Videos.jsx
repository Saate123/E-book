import React, { useEffect, useState } from "react";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import supabase from "../config/supabaseClient"; // Adjust the import based on your project structure

function Videos() {
   const [videos, setVideos] = useState([]); // State to hold our fetched videos
    const [loading, setLoading] = useState(true); // Tracks if data is still loading
    const [error, setError] = useState(null); // Stores any error messages
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          setLoading(true); // Start loading
          setError(null); // Clear any previous errors
  
          // Fetch only the necessary preview data from your 'videos' table
          const { data, error } = await supabase
            .from("videos")
            .select("id, url"); // Requesting only these columns
  
          if (error) {
            // If Supabase returns an error, throw it
            // Log the full Supabase error object for better debugging
            console.error("Supabase fetch error:", error);
            throw new Error(
              error.message || "Failed to fetch data from Supabase."
            );
          }
  
          if (data) {
            setVideos(data); // Update state with fetched videos
          }
        } catch (err) {
          console.error("Error fetching videos:", err); // Log the detailed error
          setError("Failed to load videos. Please try again later."); // User-friendly error message
        } finally {
          setLoading(false); // End loading, regardless of success or failure
        }
      };
  
      fetchVideos(); // Call the fetch function when the component mounts
    }, []);

  return (
    <div>
      <Header />
      <div className="video py-8 bg-[#262626]">
        <div className="wrapper max-w-6xl mx-auto">
          {loading ? (
            <div className="text-white text-center py-8">Loading...</div>
          ) : error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div className="flex justify-center" key={video.id}>
                  <iframe
                    className="rounded-lg"
                    width="350"
                    height="250"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Videos;
