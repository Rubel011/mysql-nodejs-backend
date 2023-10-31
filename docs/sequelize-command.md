

1. npx sequelize-cli init
Create a model for the User table:
npx sequelize-cli model:generate --name User --attributes user_name:string,user_email:string,user_password:string,user_image:string,total_orders:integer

Modify the generated model (models/user.js) to include additional fields such as user_id, created_at, and last_logged_in. Also, configure any validation rules and associations.


npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate:undo --name create-users

<!-- to create migrations files for  -->
npx sequelize-cli migration:generate --name create-users


