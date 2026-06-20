# Sales Analytics Dashboard

## Overview

Sales Analytics Dashboard is an interactive and responsive web application built using React, Vite, and Recharts. The application enables users to explore and analyze sales data through dynamic filters, KPI metrics, and visual data representations.

The dashboard demonstrates modern frontend development practices, including component-based architecture, state management, data transformation, responsive design, accessibility considerations, testing, and containerization using Docker.

---

## Features

### Data Visualization

- Monthly Sales Trend using a Line Chart
- Category-wise Sales Analysis using a Bar Chart
- Category Distribution using a Pie Chart

### Dynamic Filtering

- Filter sales data by category
- Filter sales data by date range
- Real-time updates across all visualizations

### KPI Metrics

- Total Sales
- Total Orders
- Average Sale
- Highest Sale

### User Experience

- Responsive layout for mobile, tablet, and desktop devices
- Loading state handling
- Empty state handling
- Interactive chart tooltips

### Testing

- Unit tests implemented using Vitest
- Data transformation functions tested

### Containerization

- Docker support through Dockerfile
- Docker Compose configuration included

---

## Technologies Used

### Frontend

- React
- Vite

### Data Visualization

- Recharts

### Styling

- CSS3
- Flexbox
- Media Queries

### Testing

- Vitest

### Containerization

- Docker
- Docker Compose

---

## Project Structure

```text
sales-analytics-dashboard/
│
├── src/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── LineChart.jsx
│   │   │   ├── BarChart.jsx
│   │   │   └── PieChart.jsx
│   │   │
│   │   ├── filters/
│   │   │   ├── CategoryFilter.jsx
│   │   │   └── DateRangeFilter.jsx
│   │   │
│   │   └── common/
│   │       └── LoadingSpinner.jsx
│   │
│   ├── data/
│   │   └── mockData.json
│   │
│   ├── utils/
│   │   └── dataTransformers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation

### Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd sales-analytics-dashboard
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application Locally

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## Running Tests

Execute all tests:

```bash
npm test
```

or

```bash
npx vitest
```

Expected output:

```text
All tests passed successfully
```

---

## Docker Setup

### Build the Docker Image

```bash
docker compose build
```

### Start the Container

```bash
docker compose up
```

Access the application at:

```text
http://localhost:5173
```

### Stop the Container

```bash
docker compose down
```

---

## Dataset Information

The application uses a static JSON dataset containing more than 50 sales records.

Each record includes:

```json
{
  "id": 1,
  "date": "2026-01-01",
  "category": "Electronics",
  "region": "North",
  "sales": 120,
  "profit": 35
}
```

Dataset fields:

| Field | Description |
|---------|-------------|
| id | Unique transaction identifier |
| date | Transaction date |
| category | Product category |
| region | Sales region |
| sales | Sales amount |
| profit | Profit amount |

---

## Data Flow

The dashboard follows the workflow below:

```text
Mock Dataset
      ↓
Filter Processing
      ↓
Data Transformation
      ↓
Aggregated Data
      ↓
Charts and KPI Metrics
      ↓
User Interface
```

---

## Accessibility Features

The application includes accessibility improvements such as:

- Semantic HTML elements
- Keyboard-accessible form controls
- ARIA labels for interactive inputs
- Responsive layouts
- Readable typography and spacing

---

## Responsive Design

The dashboard is optimized for:

- Mobile Devices
- Tablets
- Desktop Screens

Responsive behavior is implemented using:

- CSS Flexbox
- Media Queries
- Responsive chart containers

---

## Screenshots

### Dashboard Overview

Add dashboard screenshot here.

### Filtered Dashboard

Add filtered dashboard screenshot here.

### Mobile View

Add mobile responsive screenshot here.

---

## Future Enhancements

Potential improvements include:

- Backend API integration
- Authentication and authorization
- Export reports to PDF or Excel
- Dark mode support
- Advanced analytics and forecasting
- Real-time data updates
