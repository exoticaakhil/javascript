var books = [
    {
        title:"abc",
        author:"dfg",
        language:"malayalam",
        pages:100
    },
    {
        title:"xyz",
        author:"lmn",
        language:"kannada",
        pages:385
    },
    {
        title:"qrs",
        author:"wsdws",
        language:"hindi",
        pages:452
    }
]
books.forEach(function(item,index){
    document.write(`<h3>${item.title}</h3>`)
    document.write(`<h3>${item.author}</h3>`)
    document.write(`<h3>${item.language}</h3>`)
    document.write(`<h3>${item.pages}</h3>`)
})
//object array to json
var res1 = JSON.stringify(books);
console.log(`json array =`,res1)

//json to object conversion
var res2 = JSON.parse(res1);
console.log(`object array =`,res2);