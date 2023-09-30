// ---------------------*********** Authentication Schema ***********---------------------
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       description: Bearer token authorization header
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         user_name:
 *           type: string
 *         user_email:
 *           type: string
 *         user_password:
 *           type: string
 *         user_image:
 *           type: string
 *         total_orders:
 *           type: integer
 *
 * /users/details/{user_id}:
 *   get:
 *     summary: Get user details by user_id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 *
 * /users/update:
 *   put:
 *     summary: Update user details
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: User object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User details updated successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 *
 * /users/image/{user_id}:
 *   get:
 *     summary: Get user image by user_id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User image retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 user_image:
 *                   type: string
 *       '404':
 *         description: User image not found
 *       '500':
 *         description: Server error
 *
 * /users/insert:
 *   post:
 *     summary: Insert a new user
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: User object to be inserted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User inserted successfully
 *       '500':
 *         description: Server error
 *
 * /users/delete/{user_id}:
 *   delete:
 *     summary: Delete a user by user_id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 *
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User
 *     requestBody:
 *       description: User object to be registered
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '500':
 *         description: Server error
 *
 * /users/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - User
 *     requestBody:
 *       description: User login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_email:
 *                 type: string
 *               user_password:
 *                 type: string
 *             required:
 *               - user_email
 *               - user_password
 *     responses:
 *       '200':
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Server error
 */
