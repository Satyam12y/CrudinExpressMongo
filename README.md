A full-stack CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap.

Features
Add New Contact
View Contact Details
Update Existing Contact
Delete Contact
Responsive Bootstrap UI
MongoDB Database Integration
Server-side Rendering with EJS
Tech Stack
Node.js
Express.js
MongoDB
Mongoose
EJS
Bootstrap 5
Project Structure
CrudinExpressMongo/
│
├── modules/
│   └── CrudExpress.model.js
│
├── views/
│   ├── home.ejs
│   ├── addcontact.ejs
│   ├── update-contact.ejs
│   └── showcontact.ejs
│
├── index.js
├── package.json
└── README.md
Installation

Clone the repository:
git clone https://github.com/Satyam12y/CrudinExpressMongo.git
Move into the project directory:
cd CrudinExpressMongo
Install dependencies:
npm install
Start MongoDB and run the application:
npm run dev
MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/CrudExpress")
CRUD Operations
Create

Add new contact information to MongoDB.

Read

Display all contacts and individual contact details.

Update

Edit and update existing contact information.

Delete

Remove contacts from the database.
Author

Satyam Singh Yadav

GitHub: Satyam12y GitHub
LinkedIn: linkedin.com/in/satyamsinghyadav2786

CrudinExpressMongo Repository

License

This project is open source and available under the MIT License
