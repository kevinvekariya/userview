const mongoose = require('mongoose');
const UserView = require('../models/UserView');


const getRandomDate = function(from, to) {
    from = from.getTime();
    to = to.getTime();
    return new Date(from + Math.random() * (to - from));
}

// Insert record into userView Collections
const records=[];
const randomStartDate = new Date('2019-09');
const randomEndDate = new Date();

for(let ProductId=1; ProductId<=1000; ProductId++){
    for(let UserId=1; UserId<=500; UserId++){
        records.push({
            ProductId,
            UserId,
            ViewDate: getRandomDate(randomStartDate,randomEndDate)
        })
    }
}


UserView.insertMany(records,function(error, docs) {
    if(error){
        console.log(`Error Occurs during populating`);
    } else {
        console.log(`Docs inserted successfully`);
    }
})