 function two() 
{
    console.log("2")
}

function time5(numb){
    console.log(numb)
    let multipleOfFive = numb * 5
    return multipleOfFive
}

function fourAC(a, c){
    return 4 * a * c
}

function almightyFormula(a, b, c) {
    const bSquare = Math.pow(b, 2)
    const fAC = fourAC(a, c)

    return  ( -b + Math.sqrt(bSquare - fAC) ) / ( 2 * a )
}

function addition(numberOne, numberTwo){
    console.log(numberOne + numberTwo)
}

function subs(numberOne, numberTwo){
    console.log(numberOne - numberTwo)
}

function metaQuestion(){
    console.log("Hello")
    const name = prompt("What is your name?")
    console.log("Welcome " + name + ", how are you doing today?")
    console.log(`Welcome ${name},  how are you doing today?`)
}

function changeAnchorTitle(position, newTitle){
    let getAnchorAtPosition = document.getElementsByTagName("a")[position]
    const formerTitle = getAnchorAtPosition.getAttribute("title")  // before we change
    console.log(`The former title is: ${formerTitle}`)
    getAnchorAtPosition.setAttribute("title", newTitle)
    console.log(`The new title is: ${getAnchorAtPosition.getAttribute("title")}`) // after we change
    console.log( getAnchorAtPosition )
}

function allAnchorTagsTitles(){
    console.log( document.getElementsByTagName("a")) 
}

function getAllImages(){

    let images = document.getElementsByTagName("img")
    let imagesLink = []
    for(let i = 0; i < images.length; i++){
        let imageElement = images[i]
//	console.log(imageElement) 
        let imageSource = imageElement.getAttribute("src")
// 		console.log(imageSource) 


         imagesLink.push(imageSource)
    }

    return imagesLink
}
