const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const db = require('./models');
const { errorResponse, successResponse } = require('./helpers/successAndError');
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use("/users",userRouter )

app.get("/", (req, res) => {
    try {
        res.status(200).json(successResponse(200,"Server is running successfully",null));

    } catch (error) {
        res.status(404).json(errorResponse(404, error.message));
    }

})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port:- ${PORT}`);
    });
})