import { useLoaderData } from "react-router-dom";
import AccCategoryCard from "../../components/AccCategoryCard/AccCategoryCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./HomePage.css";

export default function Homepage() {
  const categories = useLoaderData();

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
