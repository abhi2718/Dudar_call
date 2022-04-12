const express = require('express'),
      port = process.env.PORT ||7070,
      path = require("path"),
      app = express();
      app.use(express.static(path.resolve(__dirname, './build')))
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './build', 'index.html'));
      });
      app.listen(port,()=> console.log(`listening on port ${port}`));
      //https://solvedudar.in/#98078654323?student=Dudar=https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg
     // https://solvedudar.in/#klji90?student=Abhishek%singh=https://freevideolectures.com/blog/wp-content/uploads/2016/01/21.jpg
     //https://solvedudar.in/#09890178?teacher=Abhishek Singh=https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg