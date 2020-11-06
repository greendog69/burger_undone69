var Database = require('./connection.js'); 
var dbconfig = require('./dbconfig.js');

// create instance of database
const database = new Database( dbconfig );
//console.log(database);

const useBurgers = `USE burgers_db`;
const getBurgers = `select * from burgers`;
//module.exports = (async function() {
    

    function conVert(rows){
        var string =  JSON.stringify(rows);
        var json =  JSON.parse(string);
        //console.log("rows returned", json);
        return json;
    }

    async function select(){
        //console.log("test", test);
        const selectAll = await database.query(useBurgers)
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(getBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //database.close();
            return conVert(rows);
        });
        return selectAll;
    };
    
    async function selectAll(){
        const selectAll = await select();
        return {selectAll};
    };

    async function insert(name,bool){
        
        const burgers = {
            name: name,
            bool: Number(bool)    
        };
        console.log('teste', typeof name, typeof bool);
        const inBurgers = `
            INSERT INTO 
                burgers(burger_name, devoured)
            VALUES
                ("${burgers.name}",${burgers.bool})`;
        
        const insertOne = await database.query(useBurgers)
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(inBurgers)
        })
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(getBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //database.close();
            return conVert(rows);
        });
        return insertOne;
    };
    
    async function insertOne(name,bool){
        console.log('orm insertOne', name, bool);
        const insertOne = await insert(name,bool);
        return {insertOne};
    };
    
    async function update(name,bool,id){
        
        const burgers = {
            name: name,
            bool: bool,
            id: id
        };
        
        let upBurgers = `
            UPDATE burgers 
                SET 
                    
                    devoured = "${burgers.bool}"
                WHERE 
                    id="${burgers.id}"`;
                    
        const updateOne = await database.query(useBurgers)
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(upBurgers)
        })
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(getBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //database.close();
            return conVert(rows);
        });
        return updateOne;
    };
    
    async function updateOne(name,bool,id){
        const updateOne = await update(name,bool,id);
        return {updateOne};
    };
    
    async function delet(id){
        
        const burgers = {
            id: id
        };
        
        let delBurgers = `
            DELETE FROM burgers 
                WHERE 
                    id= ${burgers.id}`;
                    
        const deleteOne = await database.query(useBurgers)
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(delBurgers)
        })
        .then((rows,err)=> {
            if (err) throw err;
            return database.query(getBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //database.close();
            return conVert(rows);
        });
        return deleteOne;
    };
    
    async function deleteOne(id){
        const deleteOne = await delet(id);
        return {deleteOne};
    };
    
    module.exports = {selectAll,insertOne,updateOne,deleteOne};
/*
    updateOne: (name,bool,id) => {
        
        const burgers = {
            name: name,
            bool: bool,
            id: id
        };
        
        let upBurgers = `
            UPDATE burgers 
                SET 
                    burger_name = "${name}",
                    devoured = "${bool}"
                WHERE 
                    id="${id}"`;
                    
        database.query(useBurgers)
        .then((rows)=> {
            return database.query(upBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //var string =  JSON.stringify(rows);
            //var json =  JSON.parse(string);
            console.log("rows returned", rows);
            return rows;
        });
    }*/
    
//})();