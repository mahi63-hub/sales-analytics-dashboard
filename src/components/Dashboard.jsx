import { useState, useEffect } from "react";
import data from "../data/mockData.json";
import { filterData } from "../utils/dataTransformers";
import CategoryFilter from "./filters/CategoryFilter";
function Dashboard() {
  const [filters, setFilters] = useState({
    category: "",
    startDate: "",
    endDate: "",
  });

  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const result = filterData(data, filters);

      if (result.length === 0) {
        setError("No data found");
      } else {
        setError("");
      }

      setFilteredData(result);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  const categories = [
    ...new Set(
      data.map(item => item.category)
    )
  ];

  return (
    <>
    <div>
      <h1>Sales Analytics Dashboard</h1>
      <p>Total Records: {filteredData.length}</p>

      {filteredData.map((item) => (
        <div key={item.id}>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
      <CategoryFilter
        categories={categories}
        selectedCategory={filters.category}
        onCategoryChange={(value) =>
          setFilters(prev => ({
            ...prev,
            category: value,
          }))
        }
      />
      
    </>
  );
}

export default Dashboard;