const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://ojhaash247:1221vrvAssignmentAsh@rbac.p1vyd.mongodb.net/?retryWrites=true&w=majority&appName=RBAC"; // Use your MongoDB connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

run();
