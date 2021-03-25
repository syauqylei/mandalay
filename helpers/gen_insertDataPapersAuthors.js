const models = require('../models');
const fs = require('fs');
const rawData = JSON.parse(fs.readFileSync('../data/rawdata.json','utf8'))

Promise.all([models.Authors.findAll(),models.Papers.findAll()]).
  then( data =>{
    const Authors = data[0];
    const Papers = data[1];
    const datainsert = [];

    for (let item of rawData) {
      for (let author of item.authors) {
        const papersid = Papers.find( el => el.title === item.title );
        const authorsid = Authors.find( el => el.name === author.name );
        datainsert.push({
          PapersId: papersid.id,
          AuthorsId: authorsid.id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      }
    }

    fs.writeFileSync('../data/PaperAuthors.json',JSON.stringify(datainsert,null,2),'utf8')
  }).
  catch( err => console.log(err) )
