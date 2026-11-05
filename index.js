let colorSelector = document.querySelector("#colorSelector");
let colorPaletteContainer = document.querySelector(".color-palette-container")
let colorForm = document.querySelector("#colorForm");
let eyeDrop = document.getElementById("eyeDrop");



const getColors = async ( base ='000000', type ='monochrome') => {
    // Fetch colours
    const response = await fetch(`https://www.thecolorapi.com/scheme/?hex=${base}&mode=${type}`);
    const data = await response.json();

    // Clears HTML
    colorPaletteContainer.innerHTML = "";

    let colors = data.colors;
    for(let color of colors){
        colorPaletteContainer.innerHTML +=`<div class="color-cont"><div class="color-block" style="background-color: ${color.hex.value};"></div><p> ${color.hex.value}</p></div>`   
    }
}
// Initial Load
getColors()

// Update colors on submit 
colorForm.addEventListener("submit", e =>{
    e.preventDefault()
    getColors(eyeDrop.value.slice(1), colorSelector.value)
})










