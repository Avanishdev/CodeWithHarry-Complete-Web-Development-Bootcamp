show dbs
use harrykart
show collections
db.anotherCollection.insertOne({a:69})
db.items.find()
db.items.updateOne({name:'Moto 30s'},{$set:{price:2}})
db.items.updateMany({name:'Moto 30s'},{$set:{price:2,rating:1}})