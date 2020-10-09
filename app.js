const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Eat food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  const today = new Date();
  
  const options = {
      weekday : "long",
      day: "numeric",
      month : "long"
  };

let day = today.toLocaleDateString("en-us", options);

    res.render('list', {kindOfDay: day, newListItems: items});
});

app.post("/", function (req,res) {
    let item = req.body.newItem;

    items.push(item);
   
    res.redirect("/");
      
});


app.listen(3001 ,function(){
    console.log("🌍 Server started on port 3001")

});