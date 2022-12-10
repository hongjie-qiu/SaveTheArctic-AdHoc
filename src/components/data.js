// var res = new Request(
//     //"http://api.mediastack.com/v1/news?access_key=9efda4972ee50a5e0886643a98ae57a5"
//     `https://newsapi.org/v2/everything?q=arctic+and+wildlife&sortBy=publishedAt&apiKey=2b9f4fcd5b4f41f682de8debe01988ce`
//   );
// fetch(res)
//    .then(function(response) {
//        console.log(response.json());
//    })

const everything = async () =>{
    let res = await fetch(
      //"http://api.mediastack.com/v1/news?access_key=9efda4972ee50a5e0886643a98ae57a5"
      `https://newsapi.org/v2/everything?q=arctic+and+wildlife&sortBy=publishedAt&apiKey=2b9f4fcd5b4f41f682de8debe01988ce`
    );
    let data = await res.json();
    return data;
}

const fs = require('fs');

everything().then((res)=>fs.writeFileSync('newsData.json', JSON.stringify(res)));
