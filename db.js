const mongoose = require("mongoose");


mongoose.connect(
    "mongodb+srv://manaihadir:14017269@cluster.cseon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    (err, done) => {
      if (err) {
        console.log(err);
      }
      if (done) {
        console.log("base de donnée connected");
      }
    }
  );
  