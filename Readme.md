# 🧠 ThinkBoard – ToDo List (MERN Stack)

A full-featured **To-Do List Web App** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). ThinkBoard allows users to create, manage, and delete tasks in a clean, modern interface, helping them stay organized and productive.

---

## 🚀 Live Demo

🌐 [Live Link (if hosted)](https://yourdeploymenturl.com)  
📁 [GitHub Repo](https://github.com/AaryanPathak31/ToDoList-ThinkBoard-MERN_Stack)

---

## 🛠 Tech Stack

| Tech        | Role                    |
|-------------|-------------------------|
| **MongoDB** | NoSQL database to store tasks |
| **Express.js** | Backend framework for Node.js |
| **React.js** | Frontend UI built with components |
| **Node.js** | Server-side JavaScript runtime |
| **Mongoose** | ODM for MongoDB interactions |
| **Axios** | Handling API calls on frontend |
| **Tailwind CSS** *(optional)* | For responsive and modern styling |



---

## ✨ Features

- ✅ Create new tasks
- ✏️ Update task status
- 🗑️ Delete tasks
- 💾 Persistent storage with MongoDB
- 🔄 Real-time updates (manual refresh)
- 📱 Responsive UI (Mobile-friendly)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AaryanPathak31/ToDoList-ThinkBoard-MERN_Stack
cd ToDoList-ThinkBoard-MERN_Stack
```
## 2. Backend Setup
```
cd server
npm install
```
## Create a `.env` file with the following:
```
MONGO_URI=your_mongodb_connection_string
npm start
```

## Frontend Setup
```
cd client
npm install
npm start
```

## Sample .env File (Backend)
```
MONGO_URI=mongodb+srv://yourUser:yourPass@cluster.mongodb.net/thinkboard
PORT=5001
```
