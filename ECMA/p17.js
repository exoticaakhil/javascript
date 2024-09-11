const readData =async() =>{
    await fetch('https://dummyjson.com/recipes')
         .then(res => res.json())
         .then(res=>{
            console.log('response =',res)
         }).catch(err =>console.log(err))
}
readData()