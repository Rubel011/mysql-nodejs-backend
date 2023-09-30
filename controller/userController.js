const { errorResponse, successResponse } = require("../helpers/successAndError");
const { User } = require("../models/index");

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

        res.status(200).json(successResponse(200,"User image retrieved successfully", {user_image: user.user_image}));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, 'Server error'));
    }
}

module.exports.insertNewUser = async (req, res) => {
    try {
        const newUserDetails = req.body;

        // Assuming you have your Sequelize User model imported as 'User'
        const newUser = await User.create(newUserDetails);

        res.status(201).json(successResponse(201, 'User inserted successfully', { user_id: newUser.user_id }));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse(500, error.message));
    }
}


module.exports.deleteUserByuser_id=async (req, res) => {
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