const mongoose = require("mongoose");


const createDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.LOCAL_MONGO_URL);
    console.log(
      `Database connected sucessfully to ${connect.connection.host}`.blue
        .underline.bold
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = createDB;
