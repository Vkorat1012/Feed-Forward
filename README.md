# FeedForward

**FeedForward** is a community-driven platform designed to address the dual challenges of food waste and hunger. By efficiently connecting food donors with recipients in need, FeedForward simplifies the donation process, promotes sustainable food sharing, and strengthens community bonds. This solution provides a streamlined experience for donors and recipients, complete with smart matching, pick-up coordination, feedback systems, and real-time notifications.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Proposed Solution](#proposed-solution)
- [Project Architecture](#project-architecture)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

---

## 📖 Project Overview

FeedForward improves food redistribution by offering a digital platform where surplus food can be donated and accessed with ease. The platform facilitates real-time matching between food donors and recipients, reducing food wastage while helping communities in need. With an intuitive interface, secure authentication, and robust backend services, FeedForward aims to make the process of food donation quick, transparent, and effective.

---

## 📉 Problem Statement

Food waste and hunger continue to coexist globally — millions of tons of food are wasted while millions of people suffer from food insecurity.  
The traditional donation process is often fragmented, manual, and localized, limiting its reach and efficiency. Many willing donors are unaware of how to connect with those in need, and many potential recipients lack easy access to available resources.

The absence of a centralized, easy-to-use, and trustworthy platform exacerbates these challenges. This results in lost opportunities to feed people in need and reduce environmental waste.

---

## 💡 Proposed Solution

FeedForward provides a scalable and efficient solution to streamline food donation:

- **Smart Matching Algorithm**: Matches available food donations with nearby recipients based on location, type of food, and urgency.
- **Secure Authentication**: Ensures that only verified users can donate and request food.
- **Donation Management**: Allows donors to easily list food items with detailed information (type, quantity, expiration date, pickup time/location).
- **Real-Time Notifications**: Notifies users immediately about new donations or requests.
- **Feedback and Rating System**: Builds trust within the community and helps improve the platform through continuous feedback.
- **Responsive User Interface**: Ensures accessibility across mobile and desktop devices.

By building a simple yet powerful platform, FeedForward aims to make food sharing convenient, secure, and community-driven.

---

## 🎯 Project Architecture

### 1. Frontend (Client)
- Built using **React** and **Vite** for fast, modern web development.
- **Ant Design (AntD)** components and **Tailwind CSS** for responsive and elegant UI.
- **React Router** for smooth navigation.
- **Axios** for making API requests.
- **React Toastify** for notification popups.
- **Tw-elements-react** for enhanced UI components.

### 2. Backend (Server)
- Developed using **Express.js** and **Node.js**.
- **Mongoose** to interact with **MongoDB** database.
- **JWT** (JSON Web Tokens) for secure authentication.
- **Nodemailer** to send email notifications to users.
- **UUID** for generating unique IDs.

### 3. Database
- **MongoDB**: Stores user information, food donations, requests, feedback, and ratings securely.

### 4. DevOps and Development Tools
- **Docker**-ready architecture for containerized deployments (future scalability).
- **Nodemon** for automatic server restarts during development.
- **Environment Variables** managed with **dotenv** for secure configuration.

---

## 🛠️ Technologies Used

| Category      | Technologies |
| ------------- | ------------- |
| Frontend      | React, Vite, Tailwind CSS, Ant Design, Axios, React Router, React Toastify |
| Backend       | Express.js, Node.js, Mongoose, JWT, Nodemailer |
| Database      | MongoDB |
| Tools         | Docker (planned), dotenv, UUID |
| Deployment    | Future-ready for AWS/GCP or other cloud hosting |

---

## 🚀 Installation

### Prerequisites
- [Node.js 18.x or higher](https://nodejs.org/en/)
- [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas) or local MongoDB server
- [Docker](https://www.docker.com/products/docker-desktop/) *(optional for containerization)*


## 📘 Usage

### Accessing the Chat Interface
Visit the homepage at http://localhost:3000 to interact with FeedForward.
