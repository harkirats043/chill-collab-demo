const mongoose = require("mongoose");
const process = require("process")
const [pathNam, moduleName, clusterName, username, password] = process.argv
let connectionString
if(username && password){
    connectionString = `mongodb+srv://${username}:${password}@${clusterName}/?retryWrites=true&w=majority`
}else {
    connectionString = process.env.DATABASE_URL
}
mongoose.connect(connectionString);
// shortcut to mongoose.connection object
const db = mongoose.connection;
db.on("connected", function () {
  console.log(`SUCCESS:\n\tConnected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  console.log(`\tConnected to MongoDB ${new Date().toLocaleString()}`);
  console.log('\nExiting connection...')
  process.exit()
});
db.on("error", function (error) {
  console.log(`error:\n${error}`);
  process.exit()
});