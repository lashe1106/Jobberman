const mongoose = require("mongoose")

const connectToDB = () => {
    let DB_URL = "mongodb+srv://toluwalaseowonubi:QssmFKX4j9Oh5Vg6@cluster0.gtqlv.mongodb.net/jobberman?retryWrites=true&w=majority&appName=Cluster0"

    mongoose.connect(DB_URL)
        .then(() => console.log("Connected To Database"))
        .catch((err) => console.log("Error Connecting To Database" + err))
    // try {
    //     let DB_URL = "mongodb+srv://toluwalaseowonubi:QssmFKX4j9Oh5Vg6@cluster0.gtqlv.mongodb.net/jobberman?retryWrites=true&w=majority&appName=Cluster0"
    //     mongoose.connect(DB_URL)
    //     console.log("Connected To Database");
        
    // } catch (error) {
    //     console.log("Error Connecting To Database" + error);
        
    // }
}

module.exports = connectToDB