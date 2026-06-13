# Full-Stack Amazon Clone | React, Firebase, Stripe & Material UI

## 🚀 Live Demo

Click here to view the project:
👉 https://challenge-38b56.web.app

## Overview

This project is a full-stack Amazon-inspired e-commerce application built using React, Firebase, Stripe, and Material UI. The application replicates key functionalities of a modern online shopping platform, including user authentication, product browsing, shopping cart management, secure payment processing, and order history tracking.

The project was developed to strengthen practical skills in frontend development, backend integration, cloud services, authentication, payment gateways, and responsive user interface design.

---

## Features

### User Authentication

* Secure user registration and login using Firebase Authentication.
* Persistent user sessions across page refreshes.
* Authentication state management throughout the application.

### Product Discovery

* Browse products displayed on the homepage.
* Product information includes images, titles, ratings, and prices.
* Responsive product layout for different screen sizes.

### Shopping Cart Management

* Add products to the shopping basket.
* Remove products from the basket.
* Automatic calculation of total order value.
* Real-time basket updates.

### Secure Payment Processing

* Integrated Stripe payment gateway.
* Secure checkout experience.
* Payment validation before order confirmation.

### Order Management

* Store completed orders using Firebase Firestore.
* View previously placed orders.
* Maintain order history for authenticated users.

### Responsive User Interface

* Built with Material UI components.
* Mobile-friendly and responsive design.
* Consistent user experience across devices.

---

## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3
* Material UI
* React Router DOM

### Backend & Cloud Services

* Firebase Authentication
* Firebase Firestore
* Firebase Hosting

### Payment Integration

* Stripe
* Stripe React SDK

### Utilities & Libraries

* Axios
* Moment.js
* React Currency Format

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## Application Architecture

User Interaction

↓

React Frontend

↓

Firebase Authentication

↓

Firebase Firestore Database

↓

Stripe Payment Processing

↓

Order Storage & Management

---

## Local Development Setup

### Clone the Repository

```bash
git clone https://github.com/alfia9847/Amazon-clone.git
cd Amazon-clone
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

The application will run locally at:

```text
http://localhost:3000
```

---

## Project Structure

```text
src/
├── components/
├── pages/
├── firebase.js
├── App.js
├── index.js
├── reducer.js
├── StateProvider.js
└── styles/
```

---

## Key Learning Outcomes

Through this project, I gained practical experience in:

* Building single-page applications using React.
* Managing application state effectively.
* Implementing user authentication with Firebase.
* Working with cloud-hosted databases using Firestore.
* Integrating secure payment processing using Stripe.
* Creating responsive user interfaces with Material UI.
* Handling API requests using Axios.
* Managing version control with Git and GitHub.
* Deploying modern web applications.

---

## Future Improvements

Potential enhancements for future development include:

* Product search functionality.
* Product categories and filtering.
* User profile management.
* Wishlist functionality.
* Admin dashboard.
* Product reviews and ratings.
* Enhanced order tracking.
* Performance optimization and testing.

---

## Deployment

To create a production build:

```bash
npm run build
```

To deploy using Firebase Hosting:

```bash
firebase deploy
```

---


## Acknowledgements

This project was developed as part of a React and Firebase learning journey. It provided hands-on experience with modern web development technologies, cloud services, authentication systems, and payment integration.
