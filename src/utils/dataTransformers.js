export const filterData = (data, filters) => {
  let filtered = [...data];

  if (filters.category) {
    filtered = filtered.filter(
      item => item.category === filters.category
    );
  }

  if (filters.startDate && filters.endDate) {
    filtered = filtered.filter(item => {
      const date = new Date(item.date);

      return (
        date >= new Date(filters.startDate) &&
        date <= new Date(filters.endDate)
      );
    });
  }

  return filtered;
};