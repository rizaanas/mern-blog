const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postsRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const cors = require ('cors');

const app = express()
const PORT = process.env.PORT || 8000

// middleware 
app.use(bodyParser.json())
app.use(cors())

// Connect to MongoDb
mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>console.log("MongoDb connected")
).catch(err => console.log("DB error",err)
)


// Use Routes
app.use('/api/posts',postsRoutes);
app.use('/api/categories',categoryRoutes);

// server running code
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
