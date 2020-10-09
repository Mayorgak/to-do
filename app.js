const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Eat food"];
let workItems = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  const today = new Date();
  
  const options = {
      weekday : "long",
      day: "numeric",
      month : "long"
  };

let day = today.toLocaleDateString("en-us", options);

    res.render('list', {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});


app.get("/work" ,function( req,res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});


app.listen(3001 ,function(){
    console.log("🌍 Server started on port 3001")

});