import { Link } from "react-router-dom";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import { categories, questionsData } from "../constants";

const Home = () => {
  return (
    <div className="container">
      <Header />

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            style={{ textDecoration: "none" }}
          >
            <CategoryCard
              title={category.title}
              description={category.description}
              questionCount={questionsData[category.id]?.length || 0}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
