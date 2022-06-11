## CSAU BACKEND TASK - Creating REST API
  This project is made as a task for joining Web and App Domain in Computer Society of Anna University (CSAU)

# Tech stack used: 
 - Node.Js
 - Express.Js
 - Database: MongoDB (NoSQL database)
 - Validations are done using JOI library
 - Successfully Deployed in Heroku
 - Database deployed in Cloud MongoDb
  
# People Routes (/people)
- GET /maxAge => returns the details of a person with the maximum age. In case of a tie in age,
return the details of the persons who have the same age.
- GET /phoneMatch => returns the details of a person(s) whose starting and ending digits of a
phone number are the same.
- Data in Backendtask1.json can be imported in MongoDB database using npm script import-data 
- Data in MongoDB database can be flushed using npm script delete-data


# Club Members Routes (/club)
Name, Register Number, Department, Tag (Red, Brown etc), Domain (Tech,
Marketing, Design etc), Mobile Number, Email are collected.
Data  validated properly before storing into the database.
Server and Validation errors are handled.
- GET / => For getting all club members
- GET /:id => For getting club member by id
- POST / => Register new club member
- PATCH /:id => For updated club member details by id
- DELETE / => for deleting club member by id 


