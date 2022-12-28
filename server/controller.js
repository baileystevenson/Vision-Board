const database =[]
let newID =1

module.exports={
    getAllWants:(req,res) => {
        console.log('endpoint hit')
        res.status(200).send(database)
    },

    createWant:(req,res) => {
        res.status(200).send(database)
    },
    deleteWant:(req,res) => {
        res.status(200).send(database)
    },

createWant: (req, res) => {
    let{ want } = req.body
    let newWant = {
    id: newID,
    want,
   }
    
    database.push(newWant)

    res.status(200).send(database)
    
    newID++
},

    deleteWant: (req, res) => {
        let {id} = req.params
        let index = database.findIndex(wantObj => wantObj.id === +id)
        database.splice(index,1)
        res.status(200).send(database)
    }
}