# QuadB Tech Node.js Backend Project

This is the QuadB Tech Node.js backend project, where you can register, log in, and access restricted resources.

## API Documentation: for Swagger

You can explore the API documentation using Swagger UI. Access the documentation by navigating to:

   https://quadb-nodejs-qxb9.onrender.com/api-docs

## Functionality

The API includes the following functionality:
- User Registration
- User Login and Authentication
- User details by user_id
- User Management- create , update, delete
- Get user information like user's image

## Backend Deployment

The backend of this project is deployed on AWS and can be accessed via the following link: 

[Backend Deployment Link](https://quadb-nodejs-qxb9.onrender.com/)


## Backend-Routes
- **User Authentication**:
  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Log in with a registered user.
  - `GET /users/details/{user_id}`: Get the user's details by user_id .
  - `PUT /users/update`: update the user (protected route using JWT).
  - `POST /users/image/{user_id}`: get user's image.
  - `POST /users/insert`: insert new user (protected route using JWT).
  - `DELETE /users/delete/{user_id}`: delete the user using user_id.

### Technologies Used

- Node.js 
- Express.js
- MySQL
- Sequelize
- Sequelize-cli
- Bcrypt
- JWT
- Swagger (for API documentation)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rubel011/quadb-nodejs-backend.git

2. Navigate to the project directory:
    ```bash
    cd quadb-nodejs-backend
3. Install the project dependencies:
    ```bash
    npm install 

4. Create a .env file in the project root and configure the following environment variables:
    ```markdown
    PORT=your-database-port
    DB_USER=your-database-username
    DB_PASS=your-database-password
    DB_Name=your-database-name
    DB_HOST=your-database-host
    NODE_ENV=production
    ACCESS_TOKEN_SECRET=masai-school-web
    REFRESH_TOKEN_SECRET=masai-school
    ACCESS_TOKEN_EXPIRATION=1d
    REFRESH_TOKEN_EXPIRATION=24d
    EMAIL_ID=nodemailer-email-id
    GOOGLEKEY=nodemailer-google-key
    FRONTEND_DEPLOYED_URL=#
    BACKEND_DEPLOYED_URL=http://localhost:8080/

4. Start the server:
    ```
    npm run server
    ```

5. Access the backend API at http://localhost:PORT.
