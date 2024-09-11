
const URL = "https://dummyjson.com"

// read api data
const readData = async () => {
    await fetch(`${URL}/recipes`)
        .then(res=> res.json())
        .then(res => {
            console.log(`data =`, res)
            printData(res.recipes)
        }).catch(err => console.log(err))
}

readData()

let recipeBlock = document.getElementById("recipes")
// print recipes list
const printData = (data) => {
    data.forEach(item => {
        recipeBlock.innerHTML += `<div class="card" onclick="dialogHandler(${item.id})">
                                    <img src='${item.image}' />
                                    <div class="content">
                                        <h4> ${item.name} </h4>
                                    </div>
                                </div>`
    });
};

let dialog = document.querySelector("#recipe-dialog")
let cls = document.querySelector("#clsBtn")
    
const dialogHandler = (id) => {
    console.log(`card clicked =`,id)
    dialog.show();
}

cls.addEventListener("click", function() {
    dialog.close();
});