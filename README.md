# 📝 Task API

A simple **Task Management API** built with **Node.js, Express, and MongoDB**.  
This project was developed as part of an assignment.

---

## 🚀 Tech Stack
- Node.js
- Express
- MongoDB & Mongoose
- dotenv
- express-validator
- cors
- morgan
- nodemon (dev)

---

## ⚙️ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/kavindisathsarani/Task-API.git
   cd Task-API

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:  
   Create a `.env` file in the project root:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/taskdb
   ```

   > 🔹 If you’re using MongoDB Atlas, replace `MONGO_URI` with your connection string.

4. Start the app:
   ```bash
   npm run dev   # development (nodemon)
   npm start     # production
   ```

---

## 📂 Project Structure

```
Task-API/
├─ assets/
│  └─ Task_API_postman_collection.json
├─ src/
│  ├─ config/db.js
│  ├─ controllers/taskController.js
│  ├─ middleware/
│  ├─ models/Task.js
│  ├─ routes/tasks.js
│  ├─ app.js
│  └─ server.js
├─ .env
├─ package.json
├─ README.md
```

---

## 📌 API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/tasks`     | Create a new task   |
| GET    | `/tasks`     | Get all tasks       |
| GET    | `/tasks/:id` | Get a task by ID    |
| DELETE | `/tasks/:id` | Delete a task by ID |

---

## 🛠️ Example Usage with Postman

You can test the API using **Postman**:

### 1. Create a Task
- Method: **POST**  
- URL: `http://localhost:5000/tasks`  
- Body → **raw JSON**:
  ```json
  {
    "title": "Buy groceries",
    "description": "milk, eggs"
  }
  ```

### 2. Get All Tasks
- Method: **GET**  
- URL: `http://localhost:5000/tasks`

### 3. Get Task by ID
- Method: **GET**  
- URL: `http://localhost:5000/tasks/<TASK_ID>`

### 4. Delete Task by ID
- Method: **DELETE**  
- URL: `http://localhost:5000/tasks/<TASK_ID>`

## 📄 Example JSON File

For testing, see the sample payload:  
👉 [assets/sample.json](assests\Task_API_postman_collection.json)

---

## ✅ Validation & Error Handling

* Title must not be empty → returns `400 Bad Request`.
* Invalid MongoDB IDs → returns `400 Bad Request`.
* Non-existing tasks → returns `404 Not Found`.
* All errors return consistent JSON responses.

---

## 🔀 Git Workflow

* Development is done in **`feature/task-api`** branch.
* Create Pull Requests into **`main`**.

---

   
