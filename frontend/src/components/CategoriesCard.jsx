function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
