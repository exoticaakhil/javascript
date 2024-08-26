
let cmenu = document.querySelector(".context-menu")
let pagebody = document.querySelector("body")
let cbtn = document.querySelector(".close")

// menu
pagebody.addEventListener("contextmenu", (event)=> {
        event.preventDefault();
        console.log(`x=${event.clientX}px and y= ${event.clientY}px`)

        // cursor position 
    cmenu.style.left = `${event.clientX}px`; // x axis
    cmenu.style.top =  `${event.clientY}px`; // y axis

    // adding css class to the context menu
    cmenu.classList.add("active");
});

// closing context menu
cbtn.addEventListener("click",() => {
    // removing class from context menu
    cmenu.classList.remove("active");
});