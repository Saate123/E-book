import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Import useParams and useNavigate
import Header from "../components/Headers";
import Footer from "../components/Footer";

function FullArticle() {
  const navigate = useNavigate();
    const { id } = useParams(); // Get the article ID from the URL parameters
    const [article, setArticle] = useState(null); // State to hold the fetched single article
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
  
    // --- Fetch the single article from Supabase ---
    useEffect(() => {
      const fetchArticle = async () => {
        if (!id) {
          // Ensure id exists before attempting to fetch
          setError("No article ID provided.");
          setLoading(false);
          return;
        }
  
        try {
          setLoading(true);
          setError(null);
  
          const { data, error: fetchError } = await supabase
            .from("articles")
            .select("title, image_url, content") // Fetch only title, image_url, and content
            .eq("id", id) // Filter by the story ID from the URL
            .single(); // Expect only one record
  
          if (fetchError) {
            throw fetchError;
          }
  
          if (data) {
            setArticle(data);
          } else {
            setArticle(null); // Article not found
          }
        } catch (err) {
          console.error("Error fetching single article:", err);
          setError("Failed to load article details. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchArticle();
    }, [id]); // Re-run effect if the 'id' parameter changes

    // --- Handle Loading, Error, and Article Not Found States ---
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
          <p className="text-xl">Loading article...</p>
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
  
    if (!article) {
      return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
          <div>
            <p className="text-xl">Article not found.</p>
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
  return (
    <div>
      <Header />
      <div className="gap-8 px-4 bg-[#504e4e] py-6 w-screen">
        <div className="bg-[#A72024] p-4 lg:mx-25 mb-6">
          <h2 className="text-2xl font-bold text-center">
            {article.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Image Section (shows first on mobile, second on desktop) */}
          {article.image_url && (
            <div className="md:order-2 md:w-1/3 w-full flex-shrink-0 flex justify-center items-start lg:mr-25 md:mr-0 mb-4 md:mb-0">
              <img
                src={article.image_url}
                alt={article.title}
                className="rounded shadow max-w-full h-auto object-contain"
              />
            </div>
          )}
          {/* Content Section */}
          <div className="flex-1 min-w-0 lg:ml-25 md:ml-0 md:order-1">
            <div className="prose max-w-none">
              <p>{article.content}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FullArticle
