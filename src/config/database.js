import mongoose from "mongoose";

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose.connect("mongodb+srv://jesusfb:Dove3229-@cluster0.yx9sjqo.mongodb.net/catalog", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Database connected");
      })
      .catch((error) => {
        console.log(`Database connect error: ${error}`);
        process.exit(1);
      });
}
