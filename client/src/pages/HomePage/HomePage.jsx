import { useState, useEffect } from "react";
import axios from "axios";
import AccCategoryCard from "../../components/AccCategoryCard/AccCategoryCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./HomePage.css";

export default function Homepage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/accomodationcategory`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main>
      <SearchForm />
      <h2 className="inspirationTitle">Les inspirations</h2>
      <div className="categoryContainer">
        {categories.map((category) => (
          <AccCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
