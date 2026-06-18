function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div>
      <label>Category</label>

      <select
        value={selectedCategory}
        onChange={(e) =>
          onCategoryChange(e.target.value)
        }
      >
        <option value="">
          All Categories
        </option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;