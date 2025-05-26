const e1 = require("express");
const app = e1();

//REG API
app.post("/registration", (req, res) => {
  res.send("<html><body>INSIDE REGISTRATION API..</body></html>");
});

app.post("/login", (req, res) => {
  res.send("<html><body>INSIDE LOGIN API..</body></html>");
});

//SEARCH API
app.get("/search", (req, res) => {
  res.send("<html><body>INSIDE SEARCH API..</body></html>");
});

//VIEW API
app.get("/view", (req, res) => {
  res.send("<html><body>INSIDE VIEW API..</body></html>");
});

//UPDATE API
app.put("/updateprofile", (req, res) => {
  res.send("<html><body>INSIDE UPDATE PROFILE API..</body></html>");
});

//DELETE API
app.delete("/del", (req, res) => {
  res.send("<html><body>INSIDE DELETE API..</body></html>");
});

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5000, () => console.log("EXPRESS Server Started at Port No: 5000"));
