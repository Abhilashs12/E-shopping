import CategoryCard from "./CategoriesCard";

const categories = [
  {
    title: "Fashion",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
  },
  {
    title: "Electronics",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
  },
  {
    title: "Shoes",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    title: "Accessories",
    image: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg",
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Shop by Category</h2>

        <button className="text-blue-600 font-semibold">View All →</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
