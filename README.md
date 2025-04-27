# Express Middleware Authentication App

This is a simple Node.js + Express project demonstrating how to implement **basic route-level middleware authentication** using tokens and passwords.  
Sensitive information like tokens is securely stored in a `.env` file instead of hardcoding it directly into the codebase.

## Features

- Middleware authentication based on query parameters (`token` and `pass`)
- Environment variables handled through `.env` file
- Clean separation of concerns using a `middleware.js` file
- Secure practices for managing sensitive data
- Express server with simple routing

## Project Structure

```
.
├── .env
├── index.js
├── middleware.js
├── package.json
└── package-lock.json
```

## How It Works

1. **Environment Variables**  
   The `.env` file stores sensitive values:
   ```
   MyToken=123456
   PORT=8000
   ```
   These are loaded into the app using the `dotenv` package.

2. **Middleware**  
   - `checktoken`: Verifies if a correct token is provided in the query parameters.
   - `checkpass`: Checks if a correct password is provided.
   
   Both middleware functions send appropriate error messages if validation fails, otherwise they allow the request to proceed.

3. **Routes**  
   - `GET /next`: Protected by `checktoken` middleware.  
     If the token is correct, it responds with a friendly message.

4. **Running the Server**  
   The server listens on the port specified in `.env` (e.g., 8000).

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd <your-repo-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Inside the project root, create a `.env` file and add:

```env
MyToken=123456
PORT=8000
```

(Feel free to change these values!)

### 4. Start the server

```bash
node index.js
```

You should see the server running on your specified port (e.g., http://localhost:8000).

## API Usage

### Request

```http
GET /next?token=123456
```

### Response

```json
{
  "msg": "hello dost"
}
```

If you provide an invalid or missing token, you’ll get an appropriate error message.

## Additional Notes

- The password check middleware (`checkpass`) is applied globally through `app.use()`.
- Token validation (`checktoken`) is applied specifically to the `/next` route.
- This project is mainly for learning and demonstration purposes.  
  In real-world projects, you should implement proper security practices like hashed passwords, JWTs, etc.

---
