import React from "react";
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function AllArticles() {
  const [activeTitle, setActiveTitle] = React.useState("All Articles");
  // Ensure the parent div uses flex to place SideNav and body side by side
  const [articles, setArticles] = useState([]); // State to hold our fetched articles
  const [loading, setLoading] = useState(true); // Tracks if data is still loading
  const [error, setError] = useState(null); // Stores any error messages

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Clear any previous errors

        // Fetch only the necessary preview data from your 'articles' table
        const { data, error } = await supabase
          .from("articles")
          .select("id, title, subtitle, description, image_url"); // Requesting only these columns

        if (error) {
          throw error; // If Supabase returns an error, throw it
        }

        if (data) {
          setArticles(data); // Update state with fetched articles
        }
      } catch (err) {
        console.error("Error fetching articles:", err); // Log the detailed error
        setError("Failed to load articles. Please try again later."); // User-friendly error message
      } finally {
        setLoading(false); // End loading, regardless of success or failure
      }
    };

    fetchArticles(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Modal state for delete confirmation
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const { error } = await supabase.from("articles").delete().eq("id", deleteId);
      if (error) {
        throw error;
      }
      setArticles((prev) => prev.filter((article) => article.id !== deleteId));
      setShowModal(false);
      setDeleteId(null);
    } catch (err) {
      alert("Failed to delete article. Please try again.");
      console.error("Delete error:", err);
      setShowModal(false);
      setDeleteId(null);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  if (loading) {
    return (
      <div className="max-w-screen p-10 bg-black relative min-h-screen flex justify-center items-center">
        <p className="text-white text-xl">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <SideNav setActiveTitle={setActiveTitle} />
      <div className="ml-5 p-6">
        <h1 className="text-2xl font-bold mb-4">{activeTitle}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <p>Loading articles...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && articles.length === 0 && (
            <p>No articles found.</p>
          )}
          {!loading &&
            !error &&
            articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md flex flex-col items-center transition hover:shadow-lg"
              >
                <img
                  src={article.image_url || ""}
                  alt={article.title}
                  className="w-20 h-auto block mb-4 rounded-t-lg object-cover"
                />
                <p className="font-semibold text-lg mb-2 p-4 text-center">{article.title}</p>
                <p className="text-gray-600 mb-4 text-center p-4">{article.description}</p>
                <button
                  className="px-4 py-2 font-semibold bg-[#E02B20] text-white rounded hover:bg-red-700 transition"
                  onClick={() => handleDeleteClick(article.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        {/* Delete Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-blur z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <p className="mb-4">
                Are you sure you want to delete this article?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllArticles;
