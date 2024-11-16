# Roxiler MERN Stack Coding Challenge

This project is a solution to the **Roxiler MERN Stack Coding Challenge**. It consists of a frontend and a backend deployed on **Vercel** and **Render**, respectively. The application provides APIs and a frontend interface for managing and visualizing product transaction data.

---

## Live Demo

- **Website URL**: [Sales Management Platform](https://roxiler-plum.vercel.app/)  

---

## Features

### Backend Features
The backend provides several APIs for:
1. **Initializing the Database**:  
   - Fetches data from a third-party API (`https://s3.amazonaws.com/roxiler.com/product_transaction.json`) and seeds the database.

2. **Transactions API**:  
   - Lists all transactions with support for search and pagination.  
   - Allows filtering transactions by title, description, or price.

3. **Statistics API**:  
   - Provides:
     - Total sale amount for a selected month.
     - Total number of sold items for a selected month.
     - Total number of unsold items for a selected month.

4. **Bar Chart API**:  
   - Provides price ranges and the number of items in each range for a selected month.

5. **Pie Chart API**:  
   - Provides the unique categories and the number of items in each category for a selected month.

6. **Combined API**:  
   - Combines the responses of Statistics, Bar Chart, and Pie Chart APIs.

---

### Frontend Features
The frontend provides a single-page interface with:
1. **Transactions Table**:  
   - Displays transaction data for a selected month.  
   - Includes search and pagination functionality.  
   - Allows navigation between pages (Next/Previous).  
   - Updates dynamically based on search or dropdown selections.

2. **Transactions Statistics**:  
   - Displays:
     - Total sale amount.
     - Total sold items.
     - Total unsold items.  
   - Updates based on the selected month.

3. **Bar Chart**:  
   - Visualizes price ranges and the number of items in each range for a selected month.

4. **Pie Chart**:  
   - Visualizes the unique categories and the count of items in each category for a selected month.

---

## API Endpoints

### Base URL
`https://roxiler-task-5lpo.onrender.com`

### Available Endpoints
1. **Initialize Database**  
   - `GET /api/transaction/initialize`

2. **List Transactions**  
   - `POST /api/transaction`  
   - Query Parameters:
     - `month` (required): Month (e.g., January, February, etc.).
     - `search` (optional): Search term for title, description, or price.
     - `page` (optional): Page number (default is `1`).
     - `perPage` (optional): Items per page (default is `10`).

3. **Statistics**  
   - `POST /api/statistics`  
   - Query Parameters:
     - `month` (required): Month (e.g., January, February, etc.).

4. **Bar Chart**  
   - `POST /api/chartbar`  
   - Query Parameters:
     - `month` (required): Month (e.g., January, February, etc.).

5. **Pie Chart**  
   - `POST /api/chart/pie`  
   - Query Parameters:
     - `month` (required): Month (e.g., January, February, etc.).

6. **Combined API**  
   - `GET /`  
   - Query Parameters:
     - `month` (required): Month (e.g., January, February, etc.).

---

## Installation Instructions

### Prerequisites
- **Node.js** and **npm** installed.
- A **MongoDB** database setup (if running locally).

### Backend
1. **Clone the repository**:
   ```bash
   git clone https://github.com/khalekarakash05/Roxiler-Task.git
   cd backend



### Technologies Used

## Backend
- Node.js with Express.js
- MongoDB for database
- Axios for third-party API data fetching

## Frontend
- React.js with Vite
- Chart.js for charts
- TailwindCSS for styling
- Deployment
- Frontend: Vercel
- Backend: Render
