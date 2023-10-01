const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080
const db = require('./models');
const { errorResponse, successResponse } = require('./helpers/successAndError');
const userRouter = require('./routes/userRouter');
const swaggerUI = require("swagger-ui-express");
const specs = require('./config/swaggerConfig');

app.use(express.json());
app.use(cors())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/users", userRouter)

app.get("/", (req, res) => {
    try {
        res.status(200).json(successResponse(200, "Server is running successfully", null));

    } catch (error) {
        res.status(404).json(errorResponse(404, error.message));
    }

})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port:- ${PORT}`);
    });
})