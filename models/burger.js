 

async function selector(){
    const { selectAll} = await require('../config/orm.js');
    return selectAll;
    
}
async function selectAll(){
    const select = await selector();
    return select();
}

// insert ops
async function inserter(name,bool){
    const { insertOne} = await require('../config/orm.js');
    return insertOne;
    
}
async function insertOne(name,bool){
    const insert = await inserter(name,bool);
    return insert(name,bool);
}
// close insert ops

// update ops
async function updater(name,bool,id){
    const { updateOne} = await require('../config/orm.js');
    return updateOne;
    
}
async function updateOne(name,bool,id){
    const update = await updater(name,bool,id);
    return update(name,bool,id);
}
// close update ops

// delete ops
async function deleter(id){
    const { deleteOne} = await require('../config/orm.js');
    return deleteOne;
    
}
async function deleteOne(id){
    const delet = await deleter(id);
    return delet(id);
}
// close delete ops
 /*
(async function() {
    const { selectAll,insertOne, updateOne} = await require('../config/orm.js');
select=1;
 selectAll().then( select =>{
    select = select;
 });

 insert = insertOne('testburger',0);
 insert.then( insert =>
    console.log( 
        //insertOne('testburger',0)
        "burgerinsert ",insert
        //updateOne('testburger2',1,2)
    )
 );

 update = updateOne('testburger',0);
 update.then( update =>
    console.log( 
        //insertOne('testburger',0)
        //"burgerinsert ",update
        updateOne('testburger8',1,8)
    )
 );

})();
*/


module.exports = {
    selectAll,
    insertOne,
    updateOne,
    deleteOne
};