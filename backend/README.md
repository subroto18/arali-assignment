# Backend - Customer API

A simple REST API built using Node.js and Express for managing customers.

---

## 📁 Folder Structure

```
allbackend/
├── controllers/
├── routes/
│   └── v1/
├── middleware/
├── utils/
├── config/
├── server.js
```

---

## 🚀 Features

- RESTful API design
- In-memory data storage
- Custom error handling (AppError)
- Global error middleware
- Request validation
- Health check endpoint

---

## 📌 API Endpoints

### Base URL

```
/api/v1/customer
```

---

### 1. Get All Customers

```
GET /
```

---

### 2. Create Customer

```
POST /
```

Body:

```json
{
  "name": "John",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

### 3. Delete Customer

```
DELETE /:id
```

---

## ❤️ Response Format

### Success

```json
{
  "success": true,
  "status": "success",
  "message": "Success message",
  "data": {}
}
```

---

### Error

```json
{
  "success": false,
  "status": "error",
  "message": "Error message",
  "code": "ERROR_CODE",
  "statusCode": 400,
  "data": null
}
```

---

## 🔍 Health Check

```
GET /api/health
```

---

## ⚠️ Notes

- Data is stored in-memory (array)
- No database integration
- Suitable for learning & assignments

---
