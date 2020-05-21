# Example-React-List
An example inventory entry list created using React in the frontend and Flask in the backend.

### Front End
The Front End application allows for users create items with a name and category and add, update, 
and delete those entries to the server using RESTful API calls.

All CSS styling was created using Bootstrap 4, view logic was created using React framework, and all API requests are created using Axios.

All Front End related files are found under the `client` directory.

To run the front end application, open a command prompt, navigate to `client` directory, and use `npm start` to run (This requires node to be downloaded onto the user's machine).

Application will appear in browser user localhost:3000.

### Back End
The Back End application holds all the items in the inventory, and establishes API routes used to commmunicate with external applications.

All logic was written in Python, utilizing the Flask framework to implement API logic, and the Flask-CORS extension to allow cross origin resource sharing.

All Back End related files are found under the `server` directory.

To run the back end application, run `simple_app.py` under `server` directory.

Application runs on localhost:5000.

### Future Improvements
<ul>
<li>Validation can be added on front end to ensure field are not empty</li>
<li>Server already has return messages implemented on creation, update, and deletion, so including these messages and logic to front end to improve experience</li>
<li>Implementing a database for the obects in the server to maintain persistence of objects between sessions.</li>
</ul>
