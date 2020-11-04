/*Consultas ejemplo inventory MongoManual*/

db.inventory.find(
    {
        status: "D"
    }
).pretty()

//

db.inventory.find(
    {
        status: {
            $in: [ "A", "D" ]
        }
    }
).pretty()

//

db.inventory.find(
    {
        status: "A", qty: { $lt: 30}
    }
).pretty()

//

db.inventory.find(
    { $or: [
        { status: "A" }, 
        { qty: { $lt: 30}}
        ]
    }
).pretty()

//

db.inventory.find(
{
    status: "A",
    $or: [
        { qty: { $lt: 30} }, 
        { item: /^p/ }
    ]
}
).pretty()

/*Consultas aporte personal con AND implícito y explícito*/

/*Documentos con qty menor o igual a 60 y status no igual a D*/ 
db.inventory.find(
    {
        $and: [
            { qty: {$lte: 70}},
            { status: {$ne: "D"}}
        ]
    }
).pretty()

//Documentos con h mayor que 10 y status igual a A
db.inventory.find(
    {
        $and: [
            { "size.h": { $gte: 10}},
            { status: "A"}
        ]
    }
).pretty()

//Documentos en los que uom es cm y w es menor o igual a 30
db.inventory.find(
    {
        "size.uom": "cm",
        "size.w": { $lte: 30}
    }
).pretty()

//Documentos con qty mayor de 20 o status igual a A
db.inventory.find(
    { $or: [
        {
        qty: { $gt: 20},
        status: "A"
        }
    ]
    }
).pretty()

//Documentos donde uom sea in y qty sea 25 o 50
db.inventory.find(
    {
        "size.uom": "in",
        qty: { $in: [ 25, 50]}
    }
).pretty()