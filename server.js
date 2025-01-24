const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;
const SECRET_KEY = "J~X~ Wb2vJl`_^r$~)L_88F{H]J_GcooqGW1QUfC{X+"<+/J2hE6fF`USPT?B8H?*QT'm'zHS)|C 4}6~3Kv+rt,^[%BdWuKd~L!bRbt,V7oJiUO Ed<I#,}Z_6gU%[a6C0r=5wy6daW?="; // Replace with your secret key
const jsonFile = {
  message: "This is a secure JSON file.",
};

// Serve the "Access Denied" page
app.get("/denied", (req, res) => {
  res.sendFile(path.join(__dirname, "denied.html"));
});

// Endpoint for JSON access
app.get("/get-json", (req, res) => {
  const key = req.query.key;

  if (key === SECRET_KEY) {
    res.json(jsonFile);
  } else {
    res.redirect("/denied");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
