import { filterData, getCategorySales, getMonthlySales } from "../utils/dataTransformers";

const testData = [
  { id: 1, category: "Electronics", sales: 120, date: "2026-01-15" },
  { id: 2, category: "Electronics", sales: 95, date: "2026-01-20" },
  { id: 3, category: "Books", sales: 80, date: "2026-02-01" },
  { id: 4, category: "Books", sales: 65, date: "2026-02-05" },
];

test("filterData filters by category", () => {
  const filters = { category: "Electronics", startDate: "", endDate: "" };
  const result = filterData(testData, filters);
  expect(result.length).toBe(2);
  expect(result[0].category).toBe("Electronics");
});

test("filterData filters by date range", () => {
  const filters = { category: "", startDate: "2026-01-16", endDate: "2026-02-04" };
  const result = filterData(testData, filters);
  expect(result.length).toBe(2);
  expect(result[0].date).toBe("2026-01-20");
});

test("getCategorySales groups sales by category", () => {
  const result = getCategorySales(testData);
  expect(result.find((item) => item.category === "Electronics").sales).toBe(215);
  expect(result.find((item) => item.category === "Books").sales).toBe(145);
});

test("getMonthlySales groups sales by month", () => {
  const result = getMonthlySales(testData);
  expect(result.find((item) => item.month === "Jan").sales).toBe(215);
  expect(result.find((item) => item.month === "Feb").sales).toBe(145);
});