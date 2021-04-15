
let Hex = ["0","1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"]

for( let index = 0; index < Hex.length; index++ ){
    console.log(Hex[index]);
}

for( let index = 0; index < 6; index++ ){
    const randomIndex  = Math.floor(Math.random() * Hex.length)
    console.log(Hex[randomIndex]);
}

let color = "#"
for( let index = 0; index < 6; index++ ){
    const randomIndex  = Math.floor(Math.random() * Hex.length)
    color = color + Hex[randomIndex]
}

console.log(color)
document.body.style.backgroundColor = color
