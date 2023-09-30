const swaggerJsDoc = require("swagger-jsdoc");
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
                url: "http://54.196.52.191:8080/"
            },
            {
                url: "http://localhost:8080/"
            }
        ],
    },
    apis: ["./docs/*.js"],
};
const specs = swaggerJsDoc(options);
module.exports = specs