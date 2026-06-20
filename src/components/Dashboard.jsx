import { useState, useEffect } from "react";
import data from "../data/mockData.json";
import { filterData, getCategorySales, getMonthlySales } from "../utils/dataTransformers";
import CategoryFilter from "./filters/CategoryFilter";
import DateRangeFilter from "./filters/DateRangeFilter";
import SalesLineChart from "./charts/LineChart";
import SalesBarChart from "./charts/BarChart";
import CategoryPieChart from "./charts/PieChart";
import LoadingSpinner from "./common/LoadingSpinner";

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
        setError("No data found for the selected filters");
      } else {
        setError("");
      }

      setFilteredData(result);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  const categories = [...new Set(data.map((item) => item.category))];

  const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0);
  const totalOrders = filteredData.length;
  const averageSales = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;
  const maxSale = filteredData.length > 0 ? Math.max(...filteredData.map((item) => item.sales)) : 0;

  const categorySalesData = getCategorySales(filteredData);
  const monthlySalesData = getMonthlySales(filteredData);

  if (isLoading) {
    return (
      <div className="loading-state">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Sales Analytics Dashboard</h1>
        <span className="record-count">Total Records: {filteredData.length}</span>
      </div>

      <div className="filters-section">
        <div className="filters">
          <CategoryFilter
            categories={categories}
            selectedCategory={filters.category}
            onCategoryChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                category: value,
              }))
            }
          />

          <DateRangeFilter
            startDate={filters.startDate}
            endDate={filters.endDate}
            onStartDateChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                startDate: value,
              }))
            }
            onEndDateChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                endDate: value,
              }))
            }
          />
        </div>
      </div>

      {error && (
        <div className="error-state">
          <p>{error}</p>
        </div>
      )}

      {!error && (
        <>
          <div className="kpi-container">
            <div className="kpi-card">
              <h3>Total Sales</h3>
              <div className="value">${totalSales.toLocaleString()}</div>
            </div>
            <div className="kpi-card">
              <h3>Total Orders</h3>
              <div className="value">{totalOrders.toLocaleString()}</div>
            </div>
            <div className="kpi-card">
              <h3>Average Sale</h3>
              <div className="value">${averageSales.toLocaleString()}</div>
            </div>
            <div className="kpi-card">
              <h3>Highest Sale</h3>
              <div className="value">${maxSale.toLocaleString()}</div>
            </div>
          </div>

          <div className="chart-grid">
            <div className="chart-container full-width">
              <h3>Monthly Sales Trend</h3>
              <SalesLineChart data={monthlySalesData} />
            </div>

            <div className="chart-container">
              <h3>Sales by Category</h3>
              <SalesBarChart data={categorySalesData} />
            </div>

            <div className="chart-container">
              <h3>Category Distribution</h3>
              <CategoryPieChart data={categorySalesData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;