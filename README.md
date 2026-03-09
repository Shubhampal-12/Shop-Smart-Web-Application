# 🛒 Shop Smart – Full Stack E-Commerce Web Application

**Shop Smart** is a modern full-stack e-commerce web application that allows users to browse products, add items to their shopping cart, place orders, track order status, and manage their personal profile. The platform is designed to provide a smooth and responsive online shopping experience similar to popular e-commerce platforms.

This project demonstrates the implementation of a complete shopping system using modern web technologies including **React.js, Node.js, Express.js, and MongoDB**. It includes features such as user authentication, product management, cart functionality, order tracking, and profile management.

The application follows a **client-server architecture**, where the frontend is built using React for a fast and interactive user interface, while the backend uses Node.js and Express to handle APIs and business logic. MongoDB is used as the database to store user accounts, product information, and order details.

---

## 🚀 Key Features

### 👤 User Features

* User Registration and Secure Login (JWT Authentication)
* Browse and search products
* Add products to shopping cart
* Remove items from cart
* Place orders using Cash on Delivery
* Track order status (Order → Packing → Shipped → Out for Delivery → Delivered)
* View order history
* Manage personal profile information
* Responsive design for mobile and desktop

### 🛍 Product Features

* Product listing with images
* Product details page
* Category-based browsing
* Dynamic product data from database
* Image hosting and display

### 📦 Order Management

* Order creation system
* Order status tracking
* Order history for each user
* Admin control over order progress

### 🔐 Authentication & Security

* JWT-based user authentication
* Protected API routes
* Token-based user session management

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Context API for global state management

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose ODM
* JWT Authentication

### Tools & Utilities

* Git & GitHub
* REST API
* Postman for API testing

---

## 📁 Project Structure

frontend
│
├── components
├── pages
├── context
├── assets
└── App.jsx

backend
│
├── controllers
├── models
├── routes
├── middleware
└── server.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/shop-smart.git
```

### 2️⃣ Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=4000
```

### 4️⃣ Start the servers

Backend

```
npm run server
```

Frontend

```
npm run dev
```

---

## 📸 Future Improvements

* Online Payment Integration (Stripe / Razorpay)
* Product Reviews and Ratings
* Admin Dashboard
* Wishlist System
* Email Notifications
* Advanced Search Filters

---

## 🎯 Purpose of the Project

This project was built to practice **full-stack web development** and understand how a real-world e-commerce platform works. It demonstrates how frontend and backend systems interact through APIs and how user data and product information are managed in a database.

---

## 📜 License

This project is open source and available under the MIT License.

---

⭐ If you like this project, consider giving it a star on GitHub!
