show dbs
use miPrimeraBase
db.createCollection('usuarios')
db.usuarios.insertOne({nombre:"Coderhouse",age:30,email:"email@email.com"})
db.usuarios.find()
db.dropDatabase()

use baseCRUD
db.createCollection('mascotas')
db.mascotas.insertOne({nombre:'Mascota1',especie:'especie1',edad:1})
db.mascotas.find()
db.mascotas.find({especie:'especie1'})
db.mascotas.estimatedDocumentCount()
db.mascotas.countDocuments()

db.mascotas.renameCollection("mascota",true) //segundo parametro para borrar la coleccion mascota si existe


db.movies.find({year:{$eq:2000}})
db.movies.find({year:{$ne:2000}})
db.movies.find({year:{$gt:2000}})
db.movies.find({year:{$gte:2000}})
db.movies.find({year:{$lt:2000}})
db.movies.find({year:{$lte:2000}})
db.movies.find({year:{$in:[2000,2001,2002]}})
db.movies.find({year:{$nin:[2000,2001,2002]}})
db.movies.find({year:{$exists:true}})
db.movies.find({countries:{$size:2}}) //arrays
db.movies.find({directors:{$all:['Joe May']}})
$elemMatch buscar
db.movies.find({$or:[{year:{$gt:2000}},{type:{$ne:'movie'}}]})
db.movies.find({$nor:[{year:{$gt:2000}},{type:{$ne:'movie'}}]})
db.movies.find({$and:[{year:{$gt:2000}},{type:{$ne:'movie'}}]})
$type
db.movies.find({$and:[{year:{$ne:2000}},{year:{$type:16}}]}) //"int"
db.movies.find({"awards.wins":{$gte:7}})
db.movies.find({title:/little/i})
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$set:{type:'Coderhouse'}})
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$set:{coderhouse:'Coderhouse'}}) //sino existe lo crea
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$unset:{coderhouse:true}}) //lo borra
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$rename:{'coderhouse':'backend'}})
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$inc:{runtime:5}}) //incremental
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$mul:{runtime:5}}) //multiplica
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$min:{runtime:5}}) // compara los valores y cambia la minimo
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$max:{runtime:500}}) //compara los valores y cambia al maximo
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$currentDate:{runtime:true}})
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$currentDate:{runtime:{$type:'timesdtamp'}}})
//upsert
db.movies.updateOne({_id:ObjectId('573a139af29313caabcf0782')},{$set:{item:"apple"},$setOnInsert:{qty:100}},{upsert:true})

[
{nombre:"Juan",edad:25},
{nombre:"Angela",edad:22},
{nombre:"Juan Alberto",edad:23},
{nombre:"Maria",edad:25},
{nombre:"Diego",edad:24},
{nombre:"Luisa",edad:27},
{nombre:"Juan Alberto",edad:25},
{nombre:"Ricardo",edad:29},
{nombre:"Nora",edad:25},
{nombre:"Eliana",edad:30},
{nombre:"Fede",edad:32},
{nombre:"Cesar",edad:20},
{nombre:"Juliana",edad:36},
]

db.usuarios.find().sort({edad:-1})
db.usuarios.find().sort({edad:1}).limit(1)
db.usuarios.find().sort({edad:1}).limit(1).skip(1)
db.usuarios.find({nombre:/juan/i})
db.usuarios.find({nombre:/juan/i, edad:29})
db.usuarios.find({nombre:{$in:['Nombre1','Nombre2']}})
db.usuarios.find({edad:{$gt:25}})
db.usuarios.find({edad:{$lte:25}})
db.usuarios.find({edad:{$ne:25}})
db.usuarios.find({$and:[{edad:{$gte:26}},{edad:{$lte:27}}]})
db.usuarios.updateOne({nombre:'Nombre10'},{$set:{edad:36}})

