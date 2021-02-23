
# To : Task Management

## Objective of Project 

• Develop a too app <br/>
• Create an API for adding todo <br/>
• Create an API for updating todo <br/>
• Create an API for deleting todo <br/>
• Create an API for listing todo <br/>

### Technologies
Frontend :- Reactjs ,Redux ,Saga , loadsh,axios
Backend  :- Django,Django-Rest-Framework, 
Database :- sqlite3 for development env , postgresql for production env

### Deployment :-
      Frontend on Netlify
      Backend  on Heroku 

### Setup the Project locally :- <br/>
  ***Backend*** :-
   1. Clone the repo
         git clone https://github.com/TejsinghDhaosriya/TODO-React-Django
   2. Inside the Base Directory(inside the root of project) run pip install so that all dependencies of project get install 
         pip install -r requirements.txt
   3. Start the Backend
         python manaage.py runserver
   Note :- Backend is by default served at 8000 if due to some reason it is not able to serve at 8000 ,if it is serve at any other port then change the port number in baseURL.js file which is inside at flight-frontend folder.    <br/> 
  ***Frontend***:-
  1. Move to frontend folder
       cd frontend
  2. Installing the dependencies 
       yarn install
  3.  Starting the frontend
       yarn start
       will serve project at port 3000
       
### Inside the Project-Features :- 
   -user can add , delete, update ,list todos .<br/>
   -dark mode feature
   -react-redux-saga arch in frontend
   -dev and prod. env for backend
   

#### Pls visit to above link for demo




##Project Link :-
    [Link to Project!](https://tej-todo-backend.herokuapp.com)
