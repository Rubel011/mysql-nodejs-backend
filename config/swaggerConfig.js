const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config()
const BACKEND_DEPLOYED_URL=process.env.BACKEND_DEPLOYED_URL||"http://localhost:8080/"
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "QuadB Teach NodeJS Backend Project",
            version: "1.0.0",
            description:
                "Welcome to QuadB Teach Node.js backend project. Here, you can register yourself, log in, and access restricted resources."
        },
        servers: [
            {
                url: BACKEND_DEPLOYED_URL
            }
        ],
    },
    apis: ["./docs/*.js"],
};
const specs = swaggerJsDoc(options);
module.exports = specs