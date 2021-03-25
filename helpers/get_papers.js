const arxiv = require('arxiv');
const fs = require('fs');


const getPapersFromAuthor = (name) => {
  const  search_query = {
      author: name
  };
  
  arxiv.search(search_query, function(err, results) {
    const data = results.items
    fs.writeFileSync('../data/rawdata.json',JSON.stringify(data,null,2),'utf8');
    const dataEx = []
    for (let item of data) {
      const rows = {
        title: item.title,
        url: item.id,
        categories: item.categories.join(' '),
        summary: item.summary,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      dataEx.push(rows)
    }
    fs.writeFileSync('../data/papers.json',JSON.stringify(dataEx,null,2),'utf8')
  })
}

getPapersFromAuthor('William Chan');
