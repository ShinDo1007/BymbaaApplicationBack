const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    const con = await mongoose.connect(process.env.MONGODB_HOST_PORT);
    console.log(
      `MongoDB connected : ${con.connection.host}://${con.connection.port}`
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};


module.exports.connect = connect;