# Authentication and Authorization with Role-Based Access Control (RBAC)

## **Introduction**
Welcome to the *Authentication and Authorization with Role-Based Access Control (RBAC)* web application! This project demonstrates a simple yet secure authentication and authorization system that incorporates role-based access control. It allows users to register, log in, and access various resources depending on their role (Admin, Manager, User). The backend is built with Node.js and MongoDB, with JWT used for secure token management.

The purpose of this project is to demonstrate the implementation of **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)**, which are crucial for ensuring secure access and operations within a system.

## **Features**

### **Core Functionality**
- **User Registration & Login**: Secure authentication mechanism allowing users to register and log in.
- **JWT Authentication**: Utilizes JSON Web Tokens for secure session management.
- **Role-Based Access Control (RBAC)**: Roles (Admin, Manager, User) are assigned to users, and access to resources is restricted based on their role.
- **Role-Specific Endpoints**: Different routes and functionalities are accessible based on the user’s role (Admin has more privileges than Manager, and Manager has more than User).
- **User Management**: Admins can manage users, including assigning roles.

### **Advanced Features**
- **Authorization Logic**: Role-based access ensures that only authorized users can access certain endpoints or features.
- **Error Handling**: Proper error handling for unauthorized access and invalid operations.
- **Secure Token Handling**: JWT tokens are used for secure access to endpoints, reducing the risk of security breaches.

## **Getting Started**

### **Prerequisites**
Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB Atlas (for cloud database storage)
- A modern Integrated Development Environment (IDE) such as VS Code
- A modern web browser

### Installation Steps

1. *Clone the Repository*
   bash
   git clone https://github.com/muskanbindal/RBAC.git
   cd RBAC
   

2. *Set Up the Server*
   bash
   cd server
   npm install
   npm run dev
   

3. *Set Up the Client*
   bash
   cd client
   npm install
   npm run dev
   

4. *Access the Application*
   The application will be available at *http://localhost:5173*.

## Technology Stack

- *Frontend*:
  - React.js

- *Backend*:
  - Node.js
  - Express.js
  - JWT (JSON Web Tokens)

- *Database*:
  - MongoDB Atlas (Cloud Database)

