
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://bindhya:bindhyaPassword@cluster0.jeuso.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected");
  client.close();
});
