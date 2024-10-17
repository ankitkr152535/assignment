Steps to run the project : 
1. Clone the repository : git clone https://github.com/ankitkr152535/assignment.git
2. Switch to client directory in the terminal : cd client
3. Install dependencies : npm i
4. Run the frontend (client) : npm run start
5. Configure the mysql database as mentioned in the next section. After completing head over to step 6.
6. Open another terminal and switch to server directory : cd server
7. Install dependencies : npm i
8. Create a .env file in the server's root directory and put values for these :
        DB_HOST=
        DB_USER=
        DB_PASSWORD=
        DB_NAME=
        PORT=5000
        MAIL_HOST = 
        MAIL_USER = 
        MAIL_PASS = 
        JWT_SECRET_KEY =

9. Run the backend (client) : npm run dev
10. Go to url http://localhost:3000/


Steps to Setup the database in mysql :
1. Create a database : CREATE DATABASE assignment
2. Create login table and insert admin user data :
        create table logintable (
      	id int not null AUTO_INCREMENT,
      	username varchar(50) not null,
        password varchar(255) not null,
        primary key (id)
        );
        INSERT INTO logintable (username, password) VALUES ('user', '1234');
3. Create user_contacts table :
        CREATE TABLE user_contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(20), 
          message TEXT NOT NULL
        );
