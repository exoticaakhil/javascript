//submit handler
function submitHanler(event){
    event.preventDefault(); //to avoid page refresh
           // read the input
    let fname = document.getElementById("name").value;
    console.log(`name =`,fname)
    store(fname)
}
//store logic
function store(name){
    localStorage.setItem("username", name)
    alert("Username stored succesfully")
    window.location.reload();
}
//remove logic

function remove(key){
    if(confirm("do you want to delete username")){
        localStorage.removeItem(key)
        alert("userrname successfully deleted");
        window.location.reload()
    }else{
        alert("delete terminated")
    }
}
// read logic
function readname() {
    let name = localStorage.getItem("username")
    let out = document.querySelector(".output")
    if(!name){
        out.innerHTML =`<h1>no Username</h1>`
    }else {
        out.innerHTML =`<div>
        <h1>Username is ${name} <span class="btn danger" onclick="remove('username')">&times;</span></h1>
        
        </div>`
    }
}
readname()