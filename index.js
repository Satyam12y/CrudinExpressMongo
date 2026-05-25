const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Contact = require("./modules/CrudExpress.model");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/CrudExpress")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Home Page - Show All Contacts
app.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.render("home", { contacts });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Fetching Contacts");
    }
});

// Show Contact Page
app.get("/showcontact/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.send("Contact Not Found");
        }

        res.render("showcontact", { contact });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error Loading Contact");
    }
});

// Add Contact Form
app.get("/addcontact", (req, res) => {
    res.render("addcontact");
});

// Save Contact
app.post("/addcontact", async (req, res) => {
    console.log(req.body);

    try {
        const contact = await Contact.create(req.body);
        console.log("Saved:", contact);

        res.redirect("/");
    } catch (err) {
        console.log("Error:", err);
        res.status(500).send("Error Saving Contact");
    }
});
// Update Contact Form
app.get("/update-contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.send("Contact Not Found");
        }

        res.render("update-contact", { contact });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error Loading Contact");
    }
});
// Update Contact
app.post("/update-contact/:id", async (req, res) => {
    try {
        await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.redirect("/");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error Updating Contact");
    }
});

// Delete Contact
app.get("/delete-contact/:id", async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Deleting Contact");
    }
});

// Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});