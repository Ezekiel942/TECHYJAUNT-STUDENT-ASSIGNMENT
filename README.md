# **Student Management API**

A simple Node.js REST API for managing students, using **Express** and **MongoDB**.

## **Features**

- Create, read, update, and delete student records
- Count total students
- Pagination and filtering by last name
- (Bonus) Search by email or name (first or last)

## **Technologies**

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **dotenv**

## **Getting Started**

### **1. Clone the repository**

```bash
 git clone <your-repo-url>
 cd JAVASCRIPTTUTORIAL
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Set up environment variables**

Create a `.env` file in the root directory:

```
MONGO_URL=mongodb://localhost:27017/techstudents
PORT=3000
```

### **4. Start MongoDB**

Make sure **MongoDB** is running on your machine.

### **5. Start the server**

```bash
npm run dev
```

## **API Endpoints**

- `POST /students` - Create a new student
- `GET /students` - Get all students (supports pagination: `?page=1&limit=10` and filtering: `?lastName=Smith`)
- `PUT /students/:id` - Update a student by ID
- `DELETE /students/:id` - Delete a student by ID
- `GET /students/count` - Get the total number of students
- `GET /students/:id` - Get a student by ID
- `GET /students/search/email/:email` - Get a student by email (bonus)
- `GET /students/search/name/:name` - Get students by name (bonus)

## **Example Student JSON**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "age": 20
}
```

## **Testing**

You can test the API using **Thunder Client** (VS Code) or **Postman**.

### **Manual Test Instructions**

For each endpoint, create and send requests as described above. Use the response to verify correct status codes and data. For `PUT` and `DELETE`, use the `_id` returned from a `POST` or `GET` request.

### **Importing and Executing Postman Collections**
1. Open Postman and click **Import**.
2. Select the Postman collection file (if provided) or import from a link.
3. After import, select the collection and click **Run** to execute requests.
4. Make sure your server is running (`npm run dev`) before sending requests.

## **Assumptions & Design Decisions**
- The API assumes MongoDB is running locally at `mongodb://localhost:27017/techstudents`.
- Student emails are unique.
- Basic pagination and filtering are supported on the `/students` endpoint.
- No authentication is implemented (for simplicity).
- The project is designed for educational/demo purposes and can be extended for production use.
- Bonus endpoints for searching by email and name are included for extra functionality.