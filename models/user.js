module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      user_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      user_name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      user_role: {
          type: DataTypes.STRING,
          defaultValue: "customer",
      },
      user_email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      user_password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      user_image: DataTypes.STRING,
      total_orders: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
      },
      created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
      },
      last_logged_in: {
          type: DataTypes.DATE,
          allowNull: true,
      },
  });

  return User;
}

