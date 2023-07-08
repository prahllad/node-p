 const express = require('express');
 const app = express();
 app.get('',(req,res)=>{
     res.send('<h1>hello world</h1>');
 })
 var port = process.env.PORT || 3000;

 var server = app.listen(port, function () {
     console.log('Server running at ' + port + '/');
 });
