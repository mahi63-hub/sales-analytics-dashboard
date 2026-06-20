export const filterData = (data, filters) => {
  let filtered = [...data];

  if (filters.category) {
    filtered = filtered.filter((item) => item.category === filters.category);
  }

  if (filters.startDate && filters.endDate) {
    filtered = filtered.filter((item) => {
      const date = new Date(item.date);
      return date >= new Date(filters.startDate) && date <= new Date(filters.endDate);
    });
  }

  return filtered;
};

export const getCategorySales = (data) => {
  const categoryMap = {};

  data.forEach((item) => {
    if (!categoryMap[item.category]) {
      categoryMap[item.category] = 0;
    }
    categoryMap[item.category] += item.sales;
  });

  return Object.keys(categoryMap).map((category) => ({
    category,
    sales: categoryMap[category],
  }));
};

export const getMonthlySales = (data) => {
  const monthlyMap = {};

  data.forEach((item) => {
    const month = new Date(item.date).toLocaleString("default", { month: "short" });

    if (!monthlyMap[month]) {
      monthlyMap[month] = 0;
    }
    monthlyMap[month] += item.sales;
  });

  return Object.keys(monthlyMap).map((month) => ({
    month,
    sales: monthlyMap[month],
  }));
};