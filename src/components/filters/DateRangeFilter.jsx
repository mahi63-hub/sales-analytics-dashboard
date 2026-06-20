function DateRangeFilter({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) {
  return (
    <>
      <div className="filter-group">
        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          aria-label="Start Date"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="end-date">End Date</label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          aria-label="End Date"
        />
      </div>
    </>
  );
}

export default DateRangeFilter;