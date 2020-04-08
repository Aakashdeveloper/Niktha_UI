var database ={}
database.cred=[
    {
        name:"devdb",
        password:"ajkhjh"
    },
    {
        name:"proddb",
        password:"kjhui"
    }
]

database.select=(table) => {return `Select * Form ${table}`}

module.exports = database;