var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten2.avif",
    link: "About Kitten 2",
    desciption: "Hello There! I just wanted  showcase serving data through REST API's",
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.webp",
    link: "About Kitten 3",
    desciption: "Hello There! Next time I will show you how to coonect with mongoDB",
  },
];
app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});
var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
