 const express = require('express');
 const app = express();
 app.get('',(req,res)=>{
     res.send('hello world');
 })
 var port = process.env.PORT || 3000;

 var server = app.listen(port, function () {
     console.log('Server running at ' + port + '/');
 });
