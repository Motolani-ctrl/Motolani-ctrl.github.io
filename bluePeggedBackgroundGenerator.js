
   let Hex = ["0","1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"]

   //let color = "#"
   /** for( let index = 0; index < 6; index++ ){
      const randomIndex  = Math.floor(Math.random() * Hex.length)
      color = color + Hex[randomIndex]
   } **/

   //console.log(color)
  

   let color8 = "#"
   for( let index = 0; index < 4; index++ ){
      const randomIndex  = Math.floor(Math.random() * Hex.length)
      color8 = color8 + Hex[randomIndex]
   }

   document.body.style.backgroundColor = color8 + "ff"
