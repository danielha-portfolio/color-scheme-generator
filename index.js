let colorSelector = document.querySelector("#colorSelector");
let colorPaletteContainer = document.querySelector(".color-palette-container")

fetch('https://www.thecolorapi.com/scheme/?hex=EEEEEE&mode=monochrome')
.then(response => response.json())
.then(data => {
    let colors = data.colors;

    for(let color of colors){
        // console.log(color.hex.value)
        colorPaletteContainer.innerHTML +=`<div class="color-cont"><div class="color-block" style="background-color: ${color.hex.value};"></div><p> ${color.hex.value}</p></div>`
    }
})
