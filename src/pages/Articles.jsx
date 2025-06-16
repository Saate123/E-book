import Header from "../components/Headers";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

function Articles() {
  // const navigate = useNavigate();
  const [articles, setArticles] = useState([]); // State to hold our fetched articles
  const [loading, setLoading] = useState(true); // Tracks if data is still loading
  const [error, setError] = useState(null);

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
  }, []);

  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 bg-[#A72024] p-4 w-2xs text-white">
          Articles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading && <p>Loading articles...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && articles.length === 0 && (
            <p>No articles found.</p>
          )}
          {!loading && !error && articles.map((article) => (
            <div key={article.id} className="bg-gray-200 p-4 rounded-lg">
              <Link to={`/article/${article.id}`}>
                <img src={article.image_url || ""} alt={article.title} />
                <p>{article.title}</p>
              </Link>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Articles;
