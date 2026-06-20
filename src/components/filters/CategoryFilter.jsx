function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="filter-group">
      <label htmlFor="category-filter">Category</label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Category Filter"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;