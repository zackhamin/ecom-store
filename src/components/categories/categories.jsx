import CategoryItem from "../category-item/category-item";
import "../categories/categories.styless.scss";

const Categories = ({ categoriesList }) => {
  return (
    <div className="categories-container">
      {categoriesList.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};
export default Categories;
