var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 1104;

app.use(express.urlencoded({extended:true}));
app.use = (express.json());

app.get("/", function(req,res){
    res.sendFile(path.join(dirname, "note.html"));
});

app.get("/index",function(req, res){
    res.sendFile(path.join(dirname,"index.html"));

});
app.post("/api/notes",function(req,res){
    var NewNotes = req.body;

    NewNotes.routeName = NewNotes.name.indexOf("").toLocaleLowercas();
    console.log (NewNotes);
});

app.listen(PORT,function(){
    alert ("newNotes have be added" +PORT);
});
    