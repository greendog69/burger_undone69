//const { select, insert, update } = require('../models/burger.js'); 

//let select = 't';


//let select = selectAll();
//selectAll().then(x => {return x});

const express = require('express');
const app = express();

// get an instance of the express Router
let router = express.Router();

// register the router so it can be used
app.use('/', router);

router.get('/',(request,response)=>{
    (async function (){
        let {selectAll} = await require('../models/burger.js');
        //console.log('x :',x);
        return selectAll().then( x => {
            const select =  x.selectAll;
            console.log('select :',select);
            response.render('home',{select: select});
        });
    })();
    //console.log('select :',select);
    //response.render('home');
});

router.post('/',(request,response)=>{
    const burgers = {
            name: request.body.name,
            bool: 1  
    };
    
    (async function (){
        
        let {insertOne} = await require('../models/burger.js');
        //console.log('x :',x);
        console.log('tester', typeof burgers.name, typeof burgers.bool);
        return insertOne(burgers.name,burgers.bool).then( x => {
            const select =  x.insertOne;
            //console.log('select :',select);
            console.log('tester', burgers.name, burgers.bool);
            response.render('home',{select: select});
        });
    })(burgers);
    //insertOne(request.name,request.bool);
});

router.get('/:id',(request,response)=>{
    const burgers = {
            name: "name",
            bool: 0,
            id: request.params.id
    };
    
    (async function (){
        
        let {updateOne} = await require('../models/burger.js');
        //console.log('x :',x);
        console.log('teste',typeof burgers.bool, typeof burgers.id);
        return updateOne(burgers.name,burgers.bool,burgers.id).then( x => {
            const select =  x.updateOne;
            //console.log('select :',select);
            console.log('tester', burgers.name, burgers.bool, burgers.id);
            response.render('home',{select: select});
        });
    })(burgers);
    //insertOne(request.name,request.bool);
});

router.get('/delete/:id',(request,response)=>{
    const burgers = {
            id: request.params.id
    };
    
    (async function (){
        
        let {deleteOne} = await require('../models/burger.js');
        //console.log('x :',x);
        console.log('teste', typeof burgers.id);
        return deleteOne(burgers.id).then( x => {
            const select =  x.deleteOne;
            //console.log('select :',select);
            console.log('tester', burgers.id);
            response.render('home',{select: select});
        });
    })(burgers);
    //insertOne(request.name,request.bool);
});

//exporting thee router to other modules
module.exports = router;
