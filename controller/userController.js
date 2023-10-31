const { sendEmail } = require("../helpers/sendEmail");
const { errorResponse, successResponse } = require("../helpers/successAndError");
const { User } = require("../models/index");
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'ACCESS_TOKEN_SECRET';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'REFRESH_TOKEN_SECRET';
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION || '1d';
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || '30d';
const FRONTEND_DEPLOYED_URL = process.env.FRONTEND_DEPLOYED_URL || "#";

module.exports.getUserByuser_id = async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json(errorResponse(404, 'User not found'));
        }

        res.status(200).json(successResponse(200, 'User details retrieved successfully', user));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, 'Server error'));
    }
}


module.exports.updateUser = async (req, res) => {
    try {
        const updatedUserDetails = req.body;


        const user = await User.findByPk(updatedUserDetails.user_id);

        if (!user) {
            return res.status(404).json(errorResponse(404, 'User not found'));
        }

        // Update the user's details
        await user.update(updatedUserDetails);

        res.status(200).json(successResponse(200, 'User details updated successfully', null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, 'Server error'));
    }
}


module.exports.getUserImageByuser_id = async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id);

        if (!user || !user.user_image) {
            return res.status(404).json(errorResponse(404, 'User image not found'));
        }

        res.status(200).json(successResponse(200, "User image retrieved successfully", { user_image: user.user_image }));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, 'Server error'));
    }
}

module.exports.insertNewUser = async (req, res) => {
    try {
        const newUserDetails = req.body;

        // Hash the user's password before inserting it into the database
        const hashedPassword = await bcrypt.hash(newUserDetails.user_password, 15);
        newUserDetails.user_password = hashedPassword

        const newUser = await User.create(newUserDetails);

        // Send a welcome email to the user
        const emailData = {
            email: newUser.user_email,
            subject: "Welcome to QuadB nodeJS backend project!",
            body: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <h2>Welcome to QuadB teach ${newUser.user_name}!</h2>
            <p>Thank you for registering with QuadB tech.</p>
            <p>It is a node.js backend project.</p>
            <p>Happy Exploring!</p>
            <p>Best regards,</p>
            <p>The QuadB tech Team</p>
            <a href="${FRONTEND_DEPLOYED_URL}/login">Proceed to Login</a>
          </body>
        </html>
      `,
        };
        sendEmail(emailData);

        res.status(201).json(successResponse(201, 'User inserted successfully', { user_id: newUser.user_id }));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, error.message));
    }
}


module.exports.deleteUserByuser_id = async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json(errorResponse(404, 'User not found'));
        }

        // Delete the user
        await user.destroy();

        res.status(200).json(successResponse(200, 'User deleted successfully', null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, 'Server error'));
    }
}

module.exports.userLogin = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;

        // Find the user by email
        const user = await User.findOne({ where: { user_email } });

        if (!user) {
            return res.status(401).json(errorResponse(401, "User not found"));
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(user_password, user.user_password);

        if (!isPasswordValid) {
            return res.status(401).json(errorResponse(401, "Invalid password"));
        }

        // Generate access and refresh tokens
        const accessToken = jwt.sign({ userId: user.user_id }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });

        const refreshToken = jwt.sign({ userId: user.user_id }, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });

        let successData = successResponse(200, 'Login successful', user)
        successData.accessToken = accessToken;
        successData.refreshToken = refreshToken;

        res.status(200).json(successData);

    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, 'Server error'));
    }

}