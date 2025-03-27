require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarcheck");
const spellCheckRoute = require("./routes/spellCheck");
const app = express();
const port = process.env.PORT || 8000;

//https://api.openai.com/v1/chat/ completions;
//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarCheck", grammarCheckRoute);
app.use("/api/spellCheck", spellCheckRoute);

//start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
